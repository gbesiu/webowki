import { useRef } from 'react'
import psy from './wariant11'
import Pozycja from './pozycja'
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  const imienazwisko  = useRef();
  const numerPsa  = useRef();
  function zatwierdz(event){
    event.preventDefault();

    console.log(imienazwisko.current.value)
    if (numerPsa.current.value <= psy.length && numerPsa.current.value >= 1){
      console.log(psy[numerPsa.current.value-1])
    } else{
      console.log("Nieprawidłowy numer psa")
    }
  }
  return (
    <>
      <h1>Liczba filmów: {psy.length}</h1>
      <ol>
      {psy.map((pies) => (
        <Pozycja rasa={pies} key={pies} />
      ))}
      </ol>
      <form onSubmit={zatwierdz}>
        <label htmlFor="imienazwisko">Imię i nazwisko:</label><br/>
        <input className='form-control' style={{width: '400px'}} type="text" name='imienazwisko' id='#imienazwisko' ref={imienazwisko}/><br/>
        <label htmlFor="numerPsa">Numer psa:</label><br/>
        <input className='form-control' style={{width: '400px'}} type="number" name='numerPsa' id='#numerPsa' ref={numerPsa}/><br/>
        <input className='btn btn-primary' type="submit" value={"Zatwierdź"} />
      </form>
    </>
  )
}

export default App
