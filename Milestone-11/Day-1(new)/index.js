const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 6969;

app.get('/',( req, res )=>{
    res.send("baya dak disilan?asdasdasd");
});

const users = [
    {id:0, name:"kanekirPola"},
    {id:1, name:"madarsud"},
    {id:2, name:"sudirbaye"},
    {id:3, name:"madarsud"},
    {id:4, name:"bainsud"},
    {id:5, name:"kankemage"}
]
app.get('/users', ( req, res ) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else{
        res.send(users);
    }
    console.log(search);
});

// App Method //
app.post('/users', ( req, res ) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Aye mamo post e dhuika gesi", req.body);
    res.json(newUser);
})

app.get('/users/:id', ( req, res ) => {
    const params = req.params.id;
    res.send(users[params]);
})

app.listen(port, (req)=>{
    console.log("baya aisa porsi, bolan kaka borta hoba, bolan akon e bore ditasi", port);
});


