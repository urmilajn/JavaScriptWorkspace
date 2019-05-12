const express = require('../../node_modules/express');
const router = express.Router();
const members = require('../models/Members');

//Get ALL members
router.get('/', (req, res) => res.json(members));

//Get member by ID
router.get('/:id', (req, res) => {
	const found = members.some((member) => member.id===parseInt(req.params.id));
	if(found)
		res.json(members.filter((member) => member.id===parseInt(req.params.id)));
	else
		res.status(400).json({msg: `No member found with id = ${req.params.id}`});
});

module.exports = router;