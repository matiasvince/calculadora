import { useEffect, useState } from 'react';
import Display from './Display';
import Botones from './Botones';
import Historial from './Historial';

const Calculadora = () => {
  const [resultado, setResultado] = useState("");
  const [historial, setHistorial] = useState([]);

  const clickBoton = (e) => {
    setResultado(resultado.concat(e.target.innerText));
  }

  const borrar = () => {
    setResultado("");
  }

  const resolver = () => {
    try {
      var result = eval(resultado).toString();
      setResultado(result);

      const listado2 = [...historial, resultado + ' = ' + result];
      setHistorial(listado2);
    }
    catch (Exception) {
      setResultado("SyntaxError");
      console.log(Exception);
    }
  }

  useEffect(() => {
    const listadoLocalStorage = JSON.parse(localStorage.getItem('historial-calculadora'));
    if (listadoLocalStorage) {
      setHistorial(listadoLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('historial-calculadora', JSON.stringify(historial));
  }, [historial]);


  return (
    <>
      <div class="container position-absolute top-50 start-50 translate-middle">
        <h2 class="text-center mb-5 display-6">CALCULADORA APP</h2>
        <div class="row d-flex justify-content-center align-items-center">
          <div style={{ maxWidth: 400 }} class="col">
            <Display result={resultado} />
            <Botones click={clickBoton} resolver={resolver} borrar={borrar} />
          </div>

          <div style={{ maxWidth: 400 }} class="col">
            <Historial class="col" historial={historial} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculadora;