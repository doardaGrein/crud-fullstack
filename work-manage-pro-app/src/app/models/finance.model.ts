export class Finance {
  id: number;
  transactionDate: Date;
  description: string;
  amount: number;
  assets: number;
  liabilities: number;
  revenues: number;
  expenses: number;

  constructor(
    id: number,
    transactionDate: Date,
    description: string,
    amount: number,
    assets: number,
    liabilities: number,
    revenues: number,
    expenses: number
  ) {
    this.id = id;
    this.transactionDate = transactionDate;
    this.description = description;
    this.amount = amount;
    this.assets = assets;
    this.liabilities = liabilities;
    this.revenues = revenues;
    this.expenses = expenses;
  }
}
