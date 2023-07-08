const mysql = require('mysql2/promise');



module.exports = {

    getProduct: async (shopId, productId) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        const [results, fields] = await connection.execute('SELECT * FROM `product` WHERE `productId` = ? AND shopId = ?', [productId, shopId]);
        // console.log(results)
        if (!results) {
            return null;
        }
        return results;
    },

    addProduct: async (product) => {

        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        var results
        
        const [rows, fields] = await connection.execute('INSERT INTO product (name, image, price, shopId) VALUES (?, ?, ?, ?)', [product.name, JSON.stringify(product.image), product.price, product.shopId]);
        results = rows;


        // console.log(fields)
        if (!results) {
            return null;
        }
        return results;
    },

    updateProduct: async (product) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        var results

        const [rows, fields] = await connection.execute('UPDATE product SET name = ?, image = ?, price = ? WHERE productId = ? AND shopId = ?', [product.name, JSON.stringify(product.image), product.price, product.id, product.shopId]);
        results = rows;


        // console.log(fields)
        if (!results) {
            return null;
        }
        return results;

    },

    deleteProduct: async (id) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        const [results, fields] = await connection.execute('DELETE FROM `product` WHERE `productId` = ?', [id]);
        // console.log(results)
        if (!results) {
            return null;
        }
        return results;
    },

    getAllProducts: async (shopId) => {
        const connection = await mysql.createConnection({
            host: "db-mysql-sgp1-94191-do-user-14351837-0.b.db.ondigitalocean.com",
            user: "doadmin",
            password: "AVNS_VNd7F-JtcdTrmgqhqbC",
            database: "grocery"
        });

        const [results, fields] = await connection.execute('SELECT * FROM `product` WHERE `shopId` = ? ORDER BY price ASC', [shopId]);
        // console.log(results)
        if (!results) {
            return null;
        }
        return results;
    },

}