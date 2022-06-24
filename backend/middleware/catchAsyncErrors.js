//use to reduuse line of code becz its a reoccuring code for fandling async
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
