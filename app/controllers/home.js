var DB_config = require('../../config/database.js');



exports.relay = function(req, res) {

//Takes parameters from GET request
 var Bar_code_num = req.query.barcode;

 DB_config.connection.query("insert into bar_code(barcode) values(?);",[Bar_code_num],
 function (err, result, fields) {

  if (err) throw err;

 });
}

 exports.Render_barcode = function(req, res) {

 //Takes parameters from GET request
  var Bar_code_num = req.query.barcode;

  var barcode;

  if (!(req.session.barcode)) {
       req.session.barcode = [];
   }

  req.session.barcode.push(Bar_code_num);

  res.render('barcode_info.ejs',{barcodes: req.session.barcode});
}
