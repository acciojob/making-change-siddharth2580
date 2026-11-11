const makeChange = (c) => {
  let cents = Number(c);
  
  let q = Math.floor(cents / 25);
  cents %= 25;
  
  let d = Math.floor(cents / 10);
  cents %= 10;
  
  let n = Math.floor(cents / 5);
  cents %= 5;
  
  let p = cents;
  
  return { q, d, n, p };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));