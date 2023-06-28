CREATE TABLE finances
(
    id               INT AUTO_INCREMENT PRIMARY KEY,
    transaction_date DATE,
    description      VARCHAR(100),
    amount           DECIMAL(10, 2),
    assets           DECIMAL(10, 2),
    liabilities      DECIMAL(10, 2),
    revenues         DECIMAL(10, 2),
    expenses         DECIMAL(10, 2)
);

