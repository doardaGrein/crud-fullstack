# Employee

### Script MySQL

* "id": Um identificador único para cada funcionário, com a opção "AUTO_INCREMENT" para gerar automaticamente valores
* crescentes.
* "name": O nome do funcionário, com um limite de 50 caracteres e a restrição "NOT NULL" para garantir que seja
* obrigatório.
* "email": O email do funcionário, com um limite de 100 caracteres e a restrição "NOT NULL".
* "department": O departamento do funcionário, com um limite de 50 caracteres. Pode ser nulo.
* "hire_date": A data de contratação do funcionário, representada como um tipo "DATE". Pode ser nula.
* "salary": O salário do funcionário, representado como um valor decimal com precisão de 10 dígitos no total, sendo 2
* deles para casas decimais.
* "active": Um campo booleano que indica se o funcionário está ativo ou não. O valor padrão é "true".
* "age": Representa a idade do funcionário. Utilizamos o tipo "INT" para armazenar valores inteiros.
* "position": Representa o cargo do funcionário. Utilizamos o tipo "VARCHAR(50)" para armazenar uma string com até 50 caracteres.
---









