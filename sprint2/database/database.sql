create DATABASE wibu_shop;
use  wibu_shop;
create TABLE roles(
id BIGINT PRIMARY KEY,
role_name VARCHAR(50)
);
create TABLE users(
	id BIGINT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    passwords TEXT NOT NULL,
    role_id BIGINT NOT NULL,
    FOREIGN KEY(role_id) REFERENCES roles(id)
);
create table product_type(
	id BIGINT PRIMARY KEY,
	`name` VARCHAR(100) NOT NULL
);

create table products(
	id BIGINT PRIMARY KEY,
    `name` VARCHAR(253) NOT NULL,
    price BIGINT CHECK(price>0),
    `description` TEXT ,
    product_type_id BIGINT NOT NULL,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    image TEXT NOT NULL,
    quantity INT CHECK(quantity>0),
	FOREIGN KEY(product_type_id) REFERENCES product_type(id),
    is_delete BIT DEFAULT 0
); 

create TABLE customers(
	id BIGINT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    address VARCHAR(253) NOT NULL,
    phone_number VARCHAR(10) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id), 
    is_delete BIT DEFAULT 0,
    email VARCHAR(100) NOT NULL UNIQUE,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    gender INT NOT NULL
);

CREATE TABLE orders(
	id BIGINT PRIMARY KEY,
    customer_id BIGINT NOT NULL,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(customer_id)REFERENCES customers(id)
);

CREATE TABLE order_detail(
	id BIGINT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    price BIGINT,
    quantity INT CHECK(quantity>0),
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_delete BIT DEFAULT 0,
    FOREIGN KEY(order_id)REFERENCES orders(id),
    FOREIGN KEY(product_id)REFERENCES products(id)
);

create TABLE shopping_cart(
	id BIGINT PRIMARY KEY,
    customer_id BIGINT NOT NULL,
	product_id BIGINT NOT NULL,
    quantity INT CHECK(quantity >0),
    is_delete BIT DEFAULT 0,
	FOREIGN KEY(customer_id)REFERENCES customers(id),
    FOREIGN KEY(product_id)REFERENCES products(id)
);