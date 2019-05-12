const express = require('../node_modules/express');		//express web framework library
const path = require('path');				//node module to deal with file paths
const PORT = process.env.PORT || 5000;		//use port specified in env var, if not available, use 5000

const app = express();

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));		//use-middleware; "public" folder is now statically available

//Sample members array
const members = [
	{id: 1, name: 'John Doe', status: 'active'},
	{id: 2, name: 'Bob Williams', status: 'inactive'},
	{id: 3, name: 'Shannon Jackson', status: 'active'}
];

app.get('/api/members', (req, res) => res.json(members));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));