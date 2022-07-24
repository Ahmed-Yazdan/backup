const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
	res.send('Hello from node ddasasdbndhahb');
});
const users = [
	{ id: 0, name: "Number One Shakib Khan" },
	{ id: 1, name: "Number Two Shakib Khan" },
	{ id: 2, name: "Number Three Shakib Khan" },
	{ id: 3, name: "Number Four Shakib Khan" },
	{ id: 4, name: "Number Five Shakib Khan" },
]
app.get('/users', (req, res) => {
	const search = req.query.search;
	if (search) {
		const seacrhResult = users.filter(user => user.name.toLowerCase().includes(search));
		res.send(seacrhResult);
	}
});

app.get('/users/:idd', (req, res) => {
	const id = req.params.idd;
	const user = users[id];
	res.send(user);
});

app.listen(port, () => {
	console.log('LIstening to port', port);
});