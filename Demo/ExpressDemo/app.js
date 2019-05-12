//Reference video: https://www.youtube.com/watch?v=L72fhGm1tfE

const express = require('../node_modules/express');		//express web framework library
const path = require('path');				//node module to deal with file paths
const PORT = process.env.PORT || 5000;		//use port specified in env var, if not available, use 5000

const member = require('./routes/members');

const app = express();

//Import Modules
const logger = require('./middleware/logger');

//Log any incoming input http request onto console
app.use(logger);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));		//use-middleware; "public" folder is now statically available

app.use('/api/members', member);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));