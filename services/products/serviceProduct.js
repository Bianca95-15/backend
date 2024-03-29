const dbQueryAsync = require('../../config/dbConfig');
const mailerService = require('../mailerService/mailerService')
const { productCreatedTemplate } = require('../mailerService/templates/productMailTemplates')

const createProduct = async ({categoria, nombre, precio, descripcion }) => {
    try {
        const query = 'INSERT INTO products (categoria, nombre, precio, descripcion) VALUES (?,?,?,?)';
        const result = await dbQueryAsync(query, [categoria, nombre, precio, descripcion ]);  
        mailerService.transport.sendMail(
            productCreatedTemplate('', 'admin', {categoria, nombre, precio, descripcion }), (error)=>{
            if(error){
                console.error('no se pudo enviar el mail');
            }else{
                console.log('Se envio el mail correctamente');
            }
        });
        return result;
    }
    catch(error){
        console.error(error);
        return false;
    }
}


const getAllProducts = async () => {
    const query = 'SELECT * FROM products';
    try {
        const result = await dbQueryAsync(query);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


const getProductById = async (pid) => {
    const query = 'SELECT * FROM products WHERE pk_id_producto = ?';
    try {
        const result = await dbQueryAsync(query, [pid]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deleteProductById = async (pid) => {
    const query = 'DELETE FROM products WHERE pk_id_producto  = ?';
    try {
        const result = await dbQueryAsync(query, [pid]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    mailerService
};