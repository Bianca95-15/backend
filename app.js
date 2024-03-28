const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const productRouter = require('./router/productRouter');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(express.static('public'));

// Aquí irían otros middlewares como el CORS y la autenticación.

app.use('/api/products', productRouter);

// Gestión de errores centralizada.
app.use((error, req, res, next) => {
console.error(error);
res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
console.log(`El servidor se está escuchando en http:` + `//localhost:' + ${PORT} `)
});

module.exports = app;
