package com.example.wibu_shop.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private  JwtTokenUtil jwtTokenUtil;
    @Autowired
    private  UserDetailsService userDetailsService;
    @Autowired
    private  AuthenticationManager authenticationManager;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String jwtToken = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwtToken = authorizationHeader.substring(7);
            try {
                username = jwtTokenUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                logger.error("Unable to get JWT Token");
            } catch (  Exception e) {
                logger.error("JWT Token has expired");
            }
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            JwtUserDetails userDetails = (JwtUserDetails) userDetailsService.loadUserByUsername(username);
            JwtUserDetails jwtUserDetails = userDetails;
            if (jwtTokenUtil.validateToken(jwtToken, jwtUserDetails)) {
                UsernamePasswordAuthenticationToken  authenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, userDetails.getPassword(), userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));// Đặt thông tin xác thực chi tiết (ví dụ: địa chỉ IP, User-Agent, ...) vào authenticationToken.
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);//Khi xác thực thành công, Spring Security sẽ sử dụng authenticationToken để đánh dấu người dùng đã được xác thực, và từ đó cho phép truy cập vào các tài nguyên bảo mật.
            }
        }
        // Gọi chain.doFilter để tiếp tục yêu cầu và phản hồi qua các filter còn lại
        chain.doFilter(request, response);
        // Thực hiện các tác vụ xử lý hoặc kiểm tra sau khi đi qua các filter khác hoặc servlet
    }
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}

