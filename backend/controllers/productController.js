const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const cathcAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//create Product -- admin only
exports.createProduct = cathcAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    sucess: true,
    product,
  });
});

//Get all produucts from database
exports.getAllProducts = cathcAsyncErrors(async (req, res) => {
  //no. of produxt required per page
  const resultPerPage = 3;

  //to show
  const productsCount = await Product.countDocuments();
  //for searching or soomething
  // like keyword = mango
  const ApiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    //case sensitive
    .filter()
    .pagination(resultPerPage);
  const products = await ApiFeature.query;

  res.status(200).json({ success: true, products });
});

//Get Product details
exports.getProductDetails = cathcAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    //function for error handlnig(middle ware : error.js)
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
    resultPerPage,
  });
});

//update products -- only admin
exports.updateProduct = cathcAsyncErrors(async (req, res, next) => {
  let product = Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//Delete Product --admin only

exports.deleteProduct = cathcAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
