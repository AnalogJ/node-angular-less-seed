exports.index = function ( req, res ){
  res.render('index', { what: 'best', who: 'me' });
};


exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};