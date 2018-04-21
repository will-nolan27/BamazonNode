var mysql = require('mysql');
var inquirer = require('inquirer');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4muchphun4u",
  database: "bamazon"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM products", function (err, rows, fields) {
    if (err) throw err;
    for ( i = 0; i < rows.length; i++){
    console.log(rows[i].id + " " + rows[i].product_name + " "+ rows[i].department_name + " $" +
    rows[i].price + " " + rows[i].stock_quantity );}

    var questions = [
        {
          type: 'input',
          name: 'item',
          message: "What would you like to buy?"
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to buy?'
        }
    ]

    inquirer.prompt(questions).then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
      });
  });
});