const fs = require('fs');
const path = require('path');
const DB = require('../data/users.json');

const modelUsers = {
    getUsers: function () {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), { encoding: "utf-8" }));
    },
    isExist: function (id) {
        const isExist = DB.find(user => user.id == id)
        if (isExist) {
            return true
        } else {
            return false
        }
    },
    createUser: function (newUser) {
        DB.push(newUser);
        fs.writeFileSync(
            path.resolve(__dirname, '../data/users.json'),
            JSON.stringify(DB, null, 4),
            { encoding: "utf-8" }
        );
        return console.log("Agregado con éxito.");

    },
    updateUser: function (userId, userUpdated) {
        const indiceBuscado = this.getUsers().findIndex(user => user.id == userId);
        if (indiceBuscado < 0) {
            return console.log("El usuario con id " + userId + " no esta registado en la base de datos");
        } else {
            let newDB = this.getUsers();
            newDB[indiceBuscado] = userUpdated
            fs.writeFileSync(
                path.resolve(__dirname, '../data/users.json'),
                JSON.stringify(newDB, null, 4),
                { encoding: "utf-8" }
            );
            return console.log("Actualizado con éxito");
        }
    },
    deleteUser: function (userId) {
        const newDB = this.getUsers().filter(user => user.id != userId);
        this.getUsers().push(newDB);
        fs.writeFileSync(
            path.resolve(__dirname, '../data/users.json'),
            JSON.stringify(newDB, null, 4),
            { encoding: "utf-8" }
        );
    }
}


module.exports = modelUsers;