import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {
  const min = 0,
    max = 20000,
    step = 100;

  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(()=>{
    const totalPagar = calcularTotalPagar(parseInt(cantidad), parseInt(meses));
    setTotal(totalPagar);
  }, [cantidad, meses])

  useEffect(()=>{
    setPago((total/meses));
  },[total])

  const handleChange = (e) => setCantidad(e.target.value);


  const handleOnclickIncremento = () => {
      const valor = parseInt(cantidad) + step;
      if (valor <= max) setCantidad(valor);
      else alert('¡Valor máximo alcanzado!');
  }

  const handleOnclickDecremento = () => {
    const valor = parseInt(cantidad) - step;
    if (valor >= min) setCantidad(valor);
    else alert('¡Valor mínimo alcanzado!');;
}


  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
        operador="-"
        fn={handleOnclickDecremento}
        />
        <Button
        operador="+"
        fn={handleOnclickIncremento}
        />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 d-block my-5"
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        value={cantidad}
      />

      <p className="text-center mb-5 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center mb-5">
        Elige un <span className="text-indigo-600">Plazo </span> a pagar
      </h2>

      <select className="w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
              value={meses}
              onChange={e => +setMeses(e.target.value)}>
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="space-y-3 bg-gray-50 my-5 py-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen de <span className="text-indigo-600">Pago </span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pago)} Mensuales</p> 
      </div>
    </div>
  );
}

export default App;
