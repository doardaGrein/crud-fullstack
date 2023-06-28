use work_manage;

CREATE TABLE employees
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(250)  NOT NULL,
    email      VARCHAR(150) NOT NULL UNIQUE,
    department VARCHAR(50),
#     hire_date  DATETIME,
    salary     DECIMAL(10, 2),
    age        INT(3),
    position   VARCHAR(50),
    active     BOOLEAN DEFAULT true
);

# DROP TABLE employees;
