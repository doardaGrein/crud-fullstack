CREATE TABLE products
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    price       DECIMAL(10, 2),
    quantity    INT,
    stock       DECIMAL(10, 2)
);

