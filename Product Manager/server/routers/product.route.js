const productController = require('../controller/controller')

module.exports = function(app){
    app.get ('/api', productController.index);
    app.get ('/api/product', productController.allProducts);
    app.post('/api/product/new', productController.createProduct);
    app.get ('/api/product/:id', productController.getProduct);
    app.put ('/api/product/update/:id', productController.updateProduct);
    app.delete('/api/product/delete/:id', productController.deleteProduct);
}