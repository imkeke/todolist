
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'todolist',
    lists: [{number: '1', name: '买菜', id: '123'},{number: '2', name: '做饭', id: '123'}]
  });
};

exports.add = function(req, res) {
    res.json({
        succ: true,
        item: req.param('item')
    });
};
