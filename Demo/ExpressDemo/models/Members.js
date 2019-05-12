//Sample members array
const members = [
	{id: 1, name: 'John Doe', status: 'active'},
	{id: 2, name: 'Bob Williams', status: 'inactive'},
	{id: 3, name: 'Shannon Jackson', status: 'active'}
];

module.exports = members;
/*
module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.
i.e. you can do require elsewhere and get access to "members" array
Similarly other objects like function, varibles, etc can be exported
*/