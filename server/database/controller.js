const mydb = require('./db');

const controller = {

  products: {
    getProducts: (req, res) => {
      const queryString = `SELECT *
                            FROM "products"."product"
                            LIMIT 20`

      mydb.query(queryString, (err, result) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(result.rows)
        }
      })

    },

    getProductById:  (req, res) => {
      const { id } = req.params;
      const queryString = `SELECT *
                           FROM "products"."product"
                           WHERE
                           ${id} = products.product.id`;
      mydb.query(queryString, (err, result) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(result.rows)
        }
      })
    },

    getProductStyles: (req, res) => {
      const { product_id } = req.params;
      const queryString = `Select *
                           FROM "products"."styles"
                           WHERE
                           "productId" = ${product_id}`;

      mydb.query(queryString, (err, result) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(result.rows)
        }
      })
    },

    getRelatedProducts: (req, res) => {
      const { product_id } = req.params;
      const queryString = `Select "related_product_id"
                           FROM "products"."related"
                           WHERE
                           "current_product_id" = ${product_id}`;

      mydb.query(queryString, (err, result) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(result.rows)
        }
      })
    }



  }
}


module.exports = controller;