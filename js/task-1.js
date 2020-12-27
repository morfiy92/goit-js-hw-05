const Account = function ({ login, email }) {
  this._login = login
  this._email = email
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this._login} & Email: ${this._email}`)
}

console.log(Account.prototype.getInfo) 

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
})

mango.getInfo() 

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
})

poly.getInfo() 
