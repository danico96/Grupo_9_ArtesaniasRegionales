const path = require('path');
const db = require(path.resolve(__dirname, '../database/models'));

const prueba = {
    getAll: async() => {
        try {
            const result = await db.products.findAll();
            console.log(result);
        } catch (error) {
            console.log(error);
            
        }
    }
}

prueba.getAll();