var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: '',//Private//
    database: 'bamazonDB',
});

connection.connect(function(err) {
    if (err) throw err;
    runBamazon();
});

function action() {
    inquirer
        .prompt({
            name: 'mens',
            type: 'list',
            message: ' Welcome to Bamazon! Which item would you like to shop for?',
            choices: [
                'shirts',
                'pants',
                'suits',
                'dresses',
                'shoes',
                'underwear'
            ]
        })
        console.log(action);

        .then(function(answer) {
            switch (answer.action) {
                case 'shirts':
                    shirtsSearch();
                    break;
            }
            switch (answer.action) {
                case 'pants':
                    pantsSearch();
                    break;
            }
            switch (answer.action) {
                case 'suits':
                    suitsSearch();
                    break;
            }
            switch (answer.action) {
                case 'dresses':
                    dressesSearch();
                    break;
            }
            switch (answer.action) {
                case 'shoes':
                    shoesSearch();
                    break;
            }
            switch (answer.action) {
                case 'underwear':
                    underwearSearch();
                    break;
            }
        });

    }

    var shirtsSearch = function() {
            connection.connect(function(err) {
                if (err) throw err;

                var query = connection.query(
                    "select * from shirts = '" + process.argv[3] + ' ' + process.argv[4] + "'",
                    function(err, res) {
                        if (err) throw err;
                        console.log(res);
                    }
                )
                console.log('Shirts are $', query.sql);
            });

    var pantsSearch = function() {
             connection.connect(function(err) {
                    if (err) throw err;

                    var query = connection.query(
                        "select * from pants = '" + process.argv[3] + ' ' + process.argv[4] + "'",
                        function(err, res) {
                            if (err) throw err;
                            console.log(res);
                        }
                )
                console.log('Pants are $', query.sql);
             });

    var suitsSearch = function() {
            connection.connect(function(err) {
                if (err) throw err;

                var query = connection.query(
                    "select * from suits = '" + process.argv[3] + ' ' + process.argv[4] + "'",
                    function(err, res) {
                        if (err) throw err;
                        console.log(res);
                    }
                )
                console.log('Suits are $', query.sql);
            });

    var dressesSearch = function() {
            connection.connect(function(err) {
                if (err) throw err;

                var query = connection.query(
                    "select * from dresses = '" + process.argv[3] + ' ' + process.argv[4] + "'",
                    function(err, res) {
                        if (err) throw err;
                        console.log(res);
                    }
                )
                console.log('dresses are $', query.sql);
            });

    var shoesSearch = function() {
            connection.connect(function(err) {
                if (err) throw err;

                var query = connection.query(
                    "select * from shoes = '" + process.argv[3] + ' ' + process.argv[4] + "'",
                    function(err, res) {
                        if (err) throw err;
                        console.log(res);
                    }
                )
                console.log('Shoes are $', query.sql);
            });

    var underwearSearch = function() {
            connection.connect(function(err) {
                if (err) throw err;

                var query = connection.query(
                    "select * from underwear = '" + process.argv[3] + ' ' + process.argv[4] + "'",
                    function(err, res) {
                        if (err) throw err;
                        console.log(res);
                    }
                )
                console.log('Underwear is $', query.sql);
            });

shirtsSearch();
pantsSearch();
suitsSearch();
dressesSearch();
shoesSearch();
underwearSearch();
