CREATE TABLE suppliers
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    name         VARCHAR(100) NOT NULL,
    address      VARCHAR(200),
    contact_name VARCHAR(100),
    email        VARCHAR(100),
    phone        VARCHAR(20)
);
