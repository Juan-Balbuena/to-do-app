const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "weekend-to-do-app" ORDER BY "id" ASC;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.error('ERROR IN GET /todo', error);
            res.sendStatus(500);
        });
});

// POST
router.post('/', (req, res) => {
    console.log(req.body);

    let queryText = `
    INSERT INTO "weekend-to-do-app" ("name", "description")
    VALUES ($1, $2);
    `;

        pool.query(queryText, [req.body.name, req.body.description])
        .then(response => {
            res.sendStatus(200);
        }).catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
});

// PUT
router.put('/:id', (req, res) => {
    console.log('PUT /todo', req.params);
    const queryText =`UPDATE "weekend-to-do-app" SET "completed" = NOT "completed" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in PUT', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    const queryText = `UPDATE "weekend-to-do-app" SET "completed" = NOT "completed" WHERE "completed" = $1;`;

    pool.query(queryText, [true])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in PUT', error);
            res.sendStatus(500);
        });
});

// DELETE
router.delete('/', (req, res) => {
    let queryText = `DELETE FROM "weekend-to-do-app"`;
    pool.query(queryText)
    .then(result => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in delete', error);
        res.sendStatus(500);
    });
});


router.delete('/:id', (req, res) => {
    console.log('DELETE /todo', req.params);
    let queryText = `DELETE FROM "weekend-to-do-app" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in delete', error);
        res.sendStatus(500);
    });
});


module.exports = router;
