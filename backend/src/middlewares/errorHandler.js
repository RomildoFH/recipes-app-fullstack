const errorHandler = (err, _req, res, next) => {
  res.status(500).json({ message: err.message });
  next(err);
}

module.exports = errorHandler;