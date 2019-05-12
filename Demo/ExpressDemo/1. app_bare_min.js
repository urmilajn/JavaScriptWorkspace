const express = require('../node_modules/express');
const PORT = process.env.PORT || 5000;		//use port specified in env var, if not available, use 5000

const app = express();

app.get('*',  (req, res) => {
	res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));