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

INSERT INTO employee VALUES
    (1, 'Joe', 1000),
    (2, 'Henry', 2000),
    (3, 'Sam', 2500),
    (4, 'Max', 1500);

INSERT INTO employee (name, salary) VALUES ('Pedro', 3500), ('Miau', 3000);

SELECT * FROM employee;

DELETE FROM employee;

DROP TABLE employee;