import { useState, useEffect } from 'react';
import './App.css';
import { CONST_BOLILLAS, CONST_NUMEROS } from './Constants';



function App() {
  const [listBolillas, setListBolillas] = useState(CONST_BOLILLAS)
  const [numerosSalidos, setnumerosSalidos] = useState(CONST_NUMEROS)

  useEffect(() => {
    //console.log(numerosSalidos.length != null ? numerosSalidos[numerosSalidos.length - 1] : 'num99');
    document.getElementById('num99').scrollIntoView()

    document.getElementById('ln2').scrollTo(0, 1000);
  }, [numerosSalidos, listBolillas])

  // UseEffect Color Animation
  useEffect(() => {

  }, [numerosSalidos.length])

  const getRandomInt = () => {
    let randNum = Math.floor(Math.random() * 100);
    if (numerosSalidos.includes(randNum)) {
      return getRandomInt();
    }

    setListBolillas(listBolillas);
    return randNum;

  }

  const drop = () => {
    var numberSelector = getRandomInt()
    if (numerosSalidos.length < 100) {
      setnumerosSalidos(oldarray => [...oldarray, numberSelector]);
    }
    return numberSelector;
    //console.log(listBolillas);

  }
  return (
    <main className="App">
      <h1>Bingo</h1>
      <div className='content-number'>
        <h2>Lista de numeros</h2>
        <div className='listaNumeros' id="ln1">{
          listBolillas.map((numero) => (
            <p
              id={'num' + numero}
              key={numero + 'num'}
              className={numerosSalidos.includes(numero) ? 'si' : 'no'}
            >{numero}</p>
          ))
        }</div>
        <h2>Orden de Salida</h2>
        <div className='listaNumeros' id="ln2">{
          numerosSalidos.map(numero => (
            <p key={numero + 'numS'}>{numero}</p>
          ))
        }</div>
      </div>
      <div>

        <button onClick={drop}>Tirar</button>
      </div>
    </main>
  );
}

export default App;
