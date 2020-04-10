const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

const typeTransaction  = {
  type: "credit",
  value: 50.5
}
//Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.
//Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.

function createTransaction(typeTransaction) {
    const create = user.transactions.push(typeTransaction)
};

createTransaction(typeTransaction);

function getHigherTransactionByType(typeTransaction) {
  
}