CREATE DATABASE sprint_2;
USE sprint_2;

CREATE TABLE roles(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
role_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE users(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(255) UNIQUE NOT NULL,
`password` TEXT NOT NULL,
role_id BIGINT NOT NULL,FOREIGN KEY(role_id) REFERENCES roles(id)
);

CREATE TABLE product_type(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(255)NOT NULL);


CREATE TABLE products(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
price BIGINT NOT NULL,
is_delete BIT DEFAULT 0,
start_day DATETIME NOT NULL,
end_day DATETIME NOT NULL,
note TEXT,
image MEDIUMTEXT,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME DEFAULT CURRENT_TIMESTAMP,
product_type_id BIGINT NOT NULL,
FOREIGN KEY (product_type_id) REFERENCES product_type(id)
);

CREATE TABLE customers(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(255) NOT NULL,
birthday VARCHAR(255) NOT NULL,
gender int not null,
phone_number VARCHAR(10) NOT NULL  UNIQUE ,
email VARCHAR(255) NOT NULL UNIQUE,
address VARCHAR(255) NOT NULL,
citizen_code VARCHAR(255) NOT NULL UNIQUE,
is_delete BIT DEFAULT 0,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME
);

CREATE TABLE orders(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
total_price BIGINT,
customers_id BIGINT NOT NULL,
FOREIGN KEY (customers_id)REFERENCES customers(id),
create_date DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE orders_detail(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
product_id BIGINT NOT NULL,
FOREIGN KEY(product_id)REFERENCES products(id),
order_id BIGINT NOT NULL,
FOREIGN KEY(order_id)REFERENCES orders(id),
quantity INT,
price BIGINT,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP);