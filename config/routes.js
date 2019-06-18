var home = require('../app/controllers/home');

  module.exports = function (app){
  app.get('/transfer', home.relay);
  app.get('/lol',home.Render_barcode); 
 }
