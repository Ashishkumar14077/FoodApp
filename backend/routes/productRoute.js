const expres = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const router = expres.Router();

//routes

//To get all the products from db
router.route("/products").get(getAllProducts);

//to Create a new Product (only as admin)
router.route("/products/new").post(createProduct);

//to update/delete an existing product (only as admin)
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);

module.exports = router;
