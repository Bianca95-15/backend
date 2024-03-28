const db = require('../../config/dbConfig')

const createProduct = ({categoria, nombre, precio, descripcion}) => {
    const query = 'INSERT INTO products (categoria, nombre, precio, descripcion) VALUES (?, ?, ?, ?)'
    db.query(query, [categoria, nombre, precio, descripcion], (error) => {
        if(error){
            console.error(error);
        }
        else{
            console.log('El producto fue creado exitosamente');
        }
    });
}



/* createProduct({categoria: 'Laptops', nombre:'Apple Mac Book Pro', precio: 95000, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Tablets', nombre:'iPad Pro 11', precio: 90000, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Computers', nombre:'Computers', precio: 950.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Phones', nombre:'Samsung Galaxy s10', precio: 950.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Computers', nombre:'iPad Pro 11', precio: 450.00,  descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Tablets', nombre:'Samsung Qled 4K', precio:1000.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Tablets', nombre:'Microsoft Surface Studio', precio: 950.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Watches', nombre:'Samsung Watch', precio: 950.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Computers', nombre:'Pro Display XDR', precio: 1000.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Black Friday', nombre:'Gamepad Xbox One X', precio: 950.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Watches', nombre:'Smart Watch', precio: 800.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Gadget', nombre:'Google Nest', precio:  600.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Laptops', nombre:'Mac Book Air 15', precio: 3000.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Watch', nombre:'Apple Watch', precio:600.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
createProduct({categoria: 'Gadget', nombre:'Apple iPod', precio: 600.00, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})  */


/* logica para obtener todos mis productos */

const getAllProducts = () =>{
    const query = 'SELECT * FROM products'
    db.query(query, (error,result) =>{
        if(error){
            console.log(error)
        }
        else{
            console.log(result)
        }
    } )
} 

//----------------------------------------------------------------------

/* obtener productos por id */

const getProductById = (pid) =>{
    const query = `SELECT * FROM products WHERE id = ${pid}`
    db.query(query,[pid],(error,result) =>{
        if(error){
            console.error(error)
        }
        else{
            console.log(result[0])
        }
    })
}
getProductById()
//-----------------------------------------------------------------------
/* eliminar productos */

const deleteProductById = (pid) =>{
    const query = `DELETE FROM products WHERE id =(?)`
    db.query(query,(error,result) =>{
        if(error){
            console.error(error)
        }
        else{
            console.log('El producto fue eliminado con exito')
        }
    })
}
deleteProductById()  


getAllProducts()

module.exports = {createProduct,getAllProducts,getProductById,deleteProductById}