const productCreatedTemplate = (email, username, product) =>{
    return {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: 'Has creado un producto ' + username,
        html: `
        <h1 style='background-color: blue; color: white;'>Felicitaciones</h1>
        <p>El producto ${product.nombre} se creo satifactoriamente</p>
        <a href='#'>Ve el detalle de tu producto</a>
        `
    }
}

module.exports = {productCreatedTemplate}