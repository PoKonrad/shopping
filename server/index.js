import express, { json } from 'express';
import { createPool } from 'mariadb';
import dotenv from 'dotenv';
dotenv.config()

const dbQuery = async (query, placeholders) => {
    try {
        const db = createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            checkDuplicate: false
        });

        const resp = await db.query(query, placeholders);
        await db.end();
        return resp;
    } catch (error) {
        console.error(error)
    }
}


const app = express()

app.use(json());


app.get('/list', async (req, res) => {

    const resp = await dbQuery(`SELECT * FROM list`)

    res.json(resp)
});

app.post('/list', async (req, res) => {

    const item = req.body;

    try {

        const resp = await dbQuery(`INSERT INTO list (text, quantity, date_added, checked) VALUES (?, ?, NOW(), 0)`, [item.text, parseInt(item.quantity)])
        console.log('Data Inserted')
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


app.delete('/list/:id', async (req, res) => {
    const resp = await dbQuery(`DELETE FROM list WHERE list.id = ?`, [req.params.id])
    console.log(`Deleted ${req.params}`)
    res.sendStatus(200)
})

app.patch('/list/:id', async (req, res) => {
    const resp = await dbQuery(`UPDATE list SET checked = checked XOR 1 WHERE list.id = ?`, [req.params.id])
    console.log(`Changed ${req.params}`)
    res.sendStatus(200)
})

app.listen(3500, () => { console.log('App listening on port 3500.') })