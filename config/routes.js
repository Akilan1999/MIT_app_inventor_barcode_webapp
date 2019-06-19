var home = require('../app/controllers/home');

  module.exports = function (app){
  app.get('/',home.home);
  app.get('/barcode',home.Render_barcode);
  app.get('/delete',home.delete);
  app.get('/send',home.send);
 }
