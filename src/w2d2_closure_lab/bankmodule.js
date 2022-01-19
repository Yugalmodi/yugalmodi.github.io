let accList = [];
let createAccount = (function () {
	function display() {
		document.getElementById("textBox").value += "Account Name: "+accList.at(-1).accName+", Deposit: "+accList.at(-1).deposit+"\n";
	}
	return {
		newAccount: function () {
			accList.push(new Account(document.getElementById('name').value, document.getElementById('amount').value));
			display();
		}
	};
})();

class Account {
  constructor(accName, deposit) {
    this.accName = accName;
    this.deposit = deposit;
  }
}