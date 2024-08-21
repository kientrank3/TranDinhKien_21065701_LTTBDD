const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The tip for a bill of 100 is: ${calcTip(100)}`); // Should output 15

const bills = [125, 555, 44];

const tips = bills.map(calcTip);

const total = bills.map((bill, index) => bill + tips[index]);

// Output the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);