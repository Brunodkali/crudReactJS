import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from './components/card';

function App() {

  const [values, setValues] = useState();

  const [listJogos, setListJogos]= useState([]);

  console.log(listJogos)

  const handleChangeValues = (values) => {
    setValues(prevValues => ({
      ...prevValues, [values.target.name]: values.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      nome: values.nome,
      preco: values.preco,
      categoria: values.categoria,
    }).then((response)=> {
      setListJogos([...listJogos, {
        id: response.data[0].id,
        nome: values.nome,
        preco: values.preco,
        categoria: values.categoria,
      }])
    });
  };

  useEffect(()=>{
    Axios.get("http://localhost:3001/getCards")
    .then((response)=>{
      setListJogos(response.data);
    });
  }, []);

  return (
      <div className='app-container'>
        <div className='register'>
            <h1>Dev Shop</h1>
            <input 
            type="text" 
            className='register-input'
            name='nome'
            placeholder='Nome'
            onChange={handleChangeValues}
            ></input>

            <input 
            type="text" 
            className='register-input' 
            name='preco'
            placeholder='Preço (R$)'
            onChange={handleChangeValues}
            ></input>

            <input 
            type="text" 
            className='register-input'
            name='categoria'
            placeholder='Categoria'
            onChange={handleChangeValues}
            ></input>

            <button 
            type="button" 
            className='register-button'
            onClick={() => handleClickButton()}
            >Cadastrar
            </button>
        </div>
        {typeof listJogos !== "undefined" && listJogos.map((values)=>{
        return <Card 
        key={values.id}
        listCard={listJogos}
        setListCard={setListJogos}
        id={values.id}
        nome={values.nome}
        preco={values.preco}
        categoria={values.categoria}
        ></Card>
      }) };
      </div>
  );
}

export default App;
