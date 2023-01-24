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

  useEffect(() => {
    const totalPagar = calcularTotalPagar(parseInt(cantidad), parseInt(meses));
    setTotal(totalPagar);
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(total / meses);
  }, [total]);

  const handleChange = (e) => setCantidad(e.target.value);

  const handleOnclickIncremento = () => {
    const valor = parseInt(cantidad) + step;
    if (valor <= max) setCantidad(valor);
    else alert("¡Valor máximo alcanzado!");
  };

  const handleOnclickDecremento = () => {
    const valor = parseInt(cantidad) - step;
    if (valor >= min) setCantidad(valor);
    else alert("¡Valor mínimo alcanzado!");
  };

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleOnclickDecremento} />
        <Button operador="+" fn={handleOnclickIncremento} />
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

      <select
        className="w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={(e) => +setMeses(e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="space-y-3 bg-gray-50 my-5 py-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen de <span className="text-indigo-600">Pago </span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(pago)} Mensuales
        </p>
      </div>

      <p className="text-gray-500 text-center font-bold mb-5">
        Realizado por{" "}
        <span className="text-indigo-500 italic">Luis Dominguez</span>
      </p>

      <div className="font-bold rounded flex justify-evenly items-center uppercase">
        <div className="bg-indigo-600 hover:bg-indigo-800 w-5/12 mx-auto rounded">
          <a
            class="text-white flex justify-center items-center"
            href="https://github.com/luisedr98"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-github"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </div>
            <p>Mi github</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
