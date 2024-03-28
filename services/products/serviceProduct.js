const dbQueryAsync = require('../../config/dbConfig');

const createProduct = async ({ categoria, nombre, precio, descripcion }) => {
    const query = 'INSERT INTO products (categoria, nombre, precio, descripcion) VALUES (?, ?, ?, ?)';
    try {
        const result = await dbQueryAsync(query, [categoria, nombre, precio, descripcion]);
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
    const query = 'SELECT * FROM products WHERE id = ?';
    try {
        const result = await dbQueryAsync(query, [pid]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deleteProductById = async (pid) => {
    const query = 'DELETE FROM products WHERE id = ?';
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