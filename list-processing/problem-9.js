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

console.log(transasctionsFor(101));

//make sure to pay closer attention when accesing key names. You didn't need to use a variable to access .id since the key is always the same, it the value it holds that's different. 