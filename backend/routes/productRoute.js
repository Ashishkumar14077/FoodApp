const expres = require("express");
const { getAllProducts } = require("../controllers/productController");
const router = expres.Router();

router.route("/products").get(getAllProducts);
module.exports = router;
