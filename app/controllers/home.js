//var DB_config = require('../../config/database.js');
var request = require('request');




exports.home = function(req, res) {
  if (!(req.session.barcode)) {
       req.session.barcode = [];
   }
  res.render('barcode_info.ejs',{barcodes: req.session.barcode});
}

 exports.Render_barcode = function(req, res) {

 //Takes parameters from GET request
  var Bar_code_num = req.query.barcode;

  var barcode;

  req.session.barcode.push(Bar_code_num);
  console.log(req.session.barcode);
  res.redirect('/');
}

exports.delete  = function(req, res) {
  //Delete record from the array
   console.log(req.query.id);
   if(req.query.id == 0){
     req.session.barcode.shift();
   }
   else{
   req.session.barcode.splice(req.query.id,req.query.id);
   }
   res.redirect('/');
}

exports.send = function(req, res) {

  for(var i = 0; i < req.session.barcode.length; i++){

  request({
	uri: 'http://afaf.fortidyndns.com:81/barcodeReader.aspx',
	qs: {
		refNo: req.session.barcode[i]
	},
	function(error, response, body) {
		if (!error && response.statusCode === 200) {
			return response;
		} else {
			return error;
		}
	}
});
}

res.redirect('/');

}
