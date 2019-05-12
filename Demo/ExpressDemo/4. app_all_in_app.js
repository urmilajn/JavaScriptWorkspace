const express = require('../node_modules/express');		//express web framework library
const path = require('path');				//node module to deal with file paths
const PORT = process.env.PORT || 5000;		//use port specified in env var, if not available, use 5000

const app = express();

//Import Modules
const members = require('./models/Members');
const logger = require('./middleware/logger');

//Log any incoming input http request onto console
app.use(logger);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));		//use-middleware; "public" folder is now statically available

//Get ALL members
app.get('/api/members', (req, res) => res.json(members));

//Get member by ID
app.get('/api/members/:id', (req, res) => {
	const found = members.some((member) => member.id===parseInt(req.params.id));
	if(found)
		res.json(members.filter((member) => member.id===parseInt(req.params.id)));
	else
		res.status(400).json({msg: `No member found with id = ${req.params.id}`});
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));