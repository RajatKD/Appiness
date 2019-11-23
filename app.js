const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res)=> {
    res.send("I got response" + req.body);
});

app.use('/users/v1', require('./routes/user.route'));

app.listen(5000, (req, res) => console.log('server running on port 5000'));