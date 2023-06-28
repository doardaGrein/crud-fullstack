# Finances

### Script MySQL 

* "id": Um identificador único para cada transação financeira, com a opção "AUTO_INCREMENT" para gerar automaticamente valores crescentes.
* "transaction_date": A data da transação, representada como um tipo "DATE".
* "description": Uma descrição da transação, com um limite de 100 caracteres.
* "amount": O valor da transação, representado como um valor decimal com precisão de 10 dígitos no total, sendo 2 deles para casas decimais.
* "category": A categoria da transação, com um limite de 50 caracteres.
* "ativo" foi traduzido para "assets" (representa ativos financeiros)
* "passivo" foi traduzido para "liabilities" (representa passivos financeiros)
* "receitas" foi traduzido para "revenues" (representa receitas)
* "despesas" foi traduzido para "expenses" (representa despesas)  

---  

### Classe Java

* "id" é a chave primária da tabela, com a anotação @Id e @GeneratedValue para gerar valores automaticamente.
* "transactionDate" representa a data da transação.
* "description" representa a descrição da transação.
* "amount" representa o valor da transação.
* "assets" representa os ativos financeiros.
* "liabilities" representa os passivos financeiros.
* "revenues" representa as receitas.
* "expenses" representa as despesas.  

---