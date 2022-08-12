const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const mysql = require('mysql');


app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host:'localhost',
    port: 3306,
    user:'root',
    password: 'usbw',
    database:'crudgames',
});


app.post('/register', (req, res) => {
    const { nome } = req.body;
    const { preco } = req.body;
    const { categoria } = req.body;

    let SQL = 'INSERT INTO jogos ( nome, preco, categoria ) VALUES ( ?,?,? )';

    db.query(SQL, [nome, preco, categoria],(err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/getCards", (req,res)=>{
    let SQL = "SELECT * from jogos";

    db.query(SQL, (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.put("/edit", (req, res) =>{
    const { id } = req.body;
    const { nome } = req.body;
    const { preco } = req.body;
    const { categoria } = req.body;

    let SQL = "UPDATE jogos SET nome = ?, preco = ?, categoria = ? WHERE id = ?";
    
    db.query(SQL, [nome, preco, categoria, id], (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});


app.listen(3001, ()=>{
    console.log('Servidor iniciado!')
});



/* MongoDB */

/*const host = '127.0.0.1';
const port = '3306';
const url = `mongodb://${host}:${port}/crudgames`;

const database = mongoose.connection;
mongoose.connect(`${url}`);
db.on('error', (err)=> console.log(err));
db.once('open', ()=> console.log('Banco de dados conectado'));

var user = {
    name: 'GTA: San Andreas',
    preco: '80',
    categoria: 'Ação'

};

database.collection('games').insertOne(user);

console.log('User:');
console.log(user);*/







