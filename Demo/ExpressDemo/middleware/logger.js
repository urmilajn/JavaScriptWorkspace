const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();		//make sure other middleware .use() or .METHOD() on stack will be executed
};

module.exports = logger;