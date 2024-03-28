const dbQueryAsync = require('../../config/dbConfig');

const createProduct = async ({pk_id_producto ,categoria, nombre, precio, descripcion }) => {
    const query = 'INSERT INTO products (categoria, nombre, precio, descripcion) VALUES (?, ?, ?, ?)';
    try {
        const result = await dbQueryAsync(query, [pk_id_producto ,categoria, nombre, precio, descripcion]);
        console.log('El producto fue creado exitosamente');
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

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
    deleteProductById
};