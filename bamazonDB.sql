DROP DATABASE if exists bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
DROP TABLE if exists products;
CREATE TABLE products (
	id int not null auto_increment,
	product_name varchar(100) not null,
	department_name varchar(100) not null,
	price decimal(10,2) not null,
	stock_quantity int not null,
    primary key (id)
);
insert into products (product_name, price, stock_quantity)
values 
('dresses', 82.99, 1000),
('shirts', 49.99, 1700),
('pants', 79.99, 1700),
('shoes', 38.99, 1000),
('underwear', 19.99, 1000),
('suits', 190.99, 1000)
