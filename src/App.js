import './App.css';

function App() {
  return (
    <div className='app-container'>
        <div className='register'>
            <h1>Dev Shop</h1>
            <input type="text" className='register-input' 
            placeholder='Nome'></input>

            <input type="text" className='register-input' 
            placeholder='Preço'></input>

            <input type="text" className='register-input' 
            placeholder='Categoria'></input>

            <button type="button" className='register-button' 
            >Cadastrar</button>

        </div>
    </div>
  );
}

export default App;
