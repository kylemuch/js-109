let transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

function transasctionsFor(id) {
  return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, arr) {
  let transactionsById = transasctionsFor(id);

  let quantity = 0;

  transactionsById.forEach(transaction => {
    if (transaction.movement === 'in') {
      quantity += transaction.quantity;
    } else {
      quantity -= transaction.quantity;
    }
  })

  return quantity > 0;
}

console.log(isItemAvailable(105, transactions));