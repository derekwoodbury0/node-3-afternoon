module.exports = {
    create: (req, res) => {
        let db = req.app.get('db');
  
        db.create_product(req.body)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500)
          console.log(err)
        });
    },
  
    getOne: (req, res) => {
        let db = req.app.get('db');
        const { id } = req.params;
  
        db.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {
          res.status(500)
          console.log(err)
        });
    },
  
    getAll: (req, res) => {
      const db = req.app.get('db');
  
      db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
          res.status(500)
          console.log(err)
        });
    },
  
    update: (req, res) => {
      const db = req.app.get('db');
        let { id } = req.params
        let { desc } = req.query
  
      db.update_product(id, desc)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500)
          console.log(err)
        });
    },
  
    delete: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.params;
  
      db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500)
          console.log(err)
        });
    }
  };