const mysql = require('mysql2/promise');


module.exports = {

    getCartItem: async (id) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        const [results, fields] = await connection.execute('SELECT cartItem.*, product.price, product.name, product.image FROM `cartItem` JOIN `product` ON cartItem.productId = product.productId AND `cartItemId` = ?', [id]);
        // console.log(results)
        if (!results) {
            return null;
        }
        return results;
    },

    addCartItem: async (cartItem) => {

        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        var results
        // console.log(cartItem)
        const [rows, fields] = await connection.execute('INSERT INTO cartItem (customerId, productId, amount) VALUES (?, ?, ?)', [cartItem.customerId, cartItem.productId, cartItem.amount]);
        results = rows;


        // console.log(fields)
        if (!results) {
            return null;
        }
        return results;
    },

    updateCartItem: async (cartItem) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        var results

        const [rows, fields] = await connection.execute('UPDATE cartItem SET amount = ? WHERE cartItemId = ?', [cartItem.amount, cartItem.cartItemId]);
        results = rows;


        // console.log(fields)
        if (!results) {
            return null;
        }
        return results;

    },

    deleteCartItem: async (id) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        const [results, fields] = await connection.execute('DELETE FROM `cartItem` WHERE `cartItemId` = ?', [id]);
        // console.log(results)
        if (!results) {
            return null;
        }
        return results;
    },

    getAllCartItems: async (userId) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        const [results, fields] = await connection.execute('SELECT cartItem.*, product.price, product.name, product.image FROM `cartItem` JOIN `product` ON cartItem.productId = product.productId  AND `customerId` = ?', [userId]);
        // console.log(results)
        if (!results) {
            return null;
        }
        // console.log(results)
        return results;
    },

    clearCart: async (id) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        const [results, fields] = await connection.execute('DELETE from `cartItem` WHERE `customerId` = ?', [userId]);

        if (!results) {
            return false;
        }
        if(results.affectedRows > 0) {
            return true;
        }
        else {
            return false;
        }

        
    }

}