// ............................. InstaPay ............................. //

let balance = 0;
let showbutton = document.querySelector("span");
let input = document.querySelector("input");

let Showbalance = () => {
  showbutton.innerText = balance;
};

let Deposit = () => {
  let amount = +input.value;
  if (amount > 0) {
  let newtransaction = { initialBalance : balance , Amount: amount , type: "Deposit",RemainingBalance: balance + amount};
 history.push(newtransaction);
 Transactions();
  balance += amount;
  Showbalance();
  input.value = "";
  } else {
    alert("Not a Valid Request");
  }
};

let Withdraw = () => {
  let amount = +input.value;
  if (amount <= balance && amount > 0) {
    let newtransaction = { initialBalance : balance , Amount: amount , type: "Withdraw",RemainingBalance: balance - amount};
     history.push(newtransaction);
     Transactions();
    balance = balance - amount;
    Showbalance();
    input.value = "";
  } else if (amount <= 0) {
    alert("Not a Valid Request");
  } else {
    alert("Not Enough Balance");
  }
};

let history = [];

let table = document.querySelector("table tbody");

let Transactions = () => {
    table.innerHTML = "";
  history.forEach((el, index) => {
    let row = `<tr>
            <th>${index + 1}</th>
            <th>${el.initialBalance}</th>
            <th>${el.Amount}</th>
            <th>${el.type}</th>
            <th>${el.RemainingBalance}</th>
          </tr>`;
    table.innerHTML += row;
  });
};
