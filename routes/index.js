var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.db');

exports.index = function(req, res) {
    var lists = [];
    db.serialize(function() {
        db.each("SELECT name FROM Todolist", function(err, row) {
            lists.push(row.name);
        }, function() {
            res.render('index', {
                title: 'todolist',
                lists: lists
            });
        });
    });

};

exports.add = function(req, res) {
    var item = req.param('item');
    db.serialize(function() {
        db.run("INSERT INTO Todolist VALUES (1, '" + item + "')", function() {
            res.json({
                "succ": true,
                "data": item
            });
        });
    });
};

exports.del = function(req, res) {
    var item = req.param('item');
    db.serialize(function() {
        db.run("DELETE FROM Todolist WHERE name = '" + item + "'", function() {
            res.json({
                "succ": true,
                "data": item
            });
        });
    });
};
