const express = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer')
dotenv.config();
const jwt = require('jsonwebtoken')
const cors = require('cors')
const { getAllProductsController } = require('./controllers/productController');


const productRouter = require('./router/productRouter');

const app = express();
const PORT = process.env.PORT || 3010;


/* MIDDLEWERES */
app.use(cors())
app.use(express.json());
app.use(express.static('public'));

const secretkey = process.env.SECRET_KEY_JWT
app.get('/api/home', getAllProductsController);



app.use('/api/products', productRouter);


app.post('/register', (req, res) =>{
    console.log(req.body)
    const {username, password} = req.body
    if(users.find((user) => user.username === username)){
        return res.status(400).json({message: 'Username is already taken', status: 400})
    }
    const newUser = { username, password}
    users.push(newUser)
    res.status(201).json({message: 'User was created successfull', status: 201})
})

/* HAGO EL JWT PARA MI LOGIN*/
app.post('/login', (req, res) =>{
    const {username, password} = req.body
    const user = users.find(user => user.username == username && user.password == password)
    if(!user){
        return res.status(401).json({message: 'Invalid credentials', status: 401})
    }
    const token = jwt.sign({username}, secretKey, {expiresIn: '1h'})
    res.status(200).json({accessToken: token, status: 200})

})

app.post('/login')

const users =  []

app.use((error, req, res, next) => {
console.error(error);
res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
console.log(`El servidor se está escuchando en http:` + `//localhost:' + ${PORT} `)
});

module.exports = app;
