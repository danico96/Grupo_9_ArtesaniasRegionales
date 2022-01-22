const db = require('../database/models');

const prueba = {
    getAll: () => {
        console.log(db.users);
    }
}

prueba.getAll();