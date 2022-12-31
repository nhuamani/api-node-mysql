DROP DATABASE db_company;

CREATE DATABASE IF NOT EXISTS db_company;

USE db_company;

SHOW TABLES;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employee;