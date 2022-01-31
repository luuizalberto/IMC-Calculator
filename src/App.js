import { useState } from 'react'
import './app.css'

export default function App(){

  /* estados (ou useState) é algo mutável, ou seja, pode trocar de valor conforme a minha aplicação sem que eu tenha que recarregar a página. Então ele salva esses valores como se fosse uma variável para mim ter acesso depois */
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');


  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc <= 16.9){
      setMensagem("Você está Muito abaixo do peso! Seu IMC: " +imc.toFixed(1))
    }else if(imc > 16.9 && imc <= 18.4){
      setMensagem("Você está abaixo do peso! Seu IMC: " +imc.toFixed(1))
    }else if(imc >= 18.4 && imc < 25){
      setMensagem("Peso ideal! Seu IMC: " +imc.toFixed(1))
    }else if(imc > 24.9 && imc < 30){
      setMensagem("Você está levemente acima do peso! Seu IMC: " +imc.toFixed(1))
    }else if(imc >= 30 && imc <= 34.9){
      setMensagem("Você está com obesidade grau I! Seu IMC: " +imc.toFixed(1))
    }else if(imc > 34.9 && imc <= 39.9){
      setMensagem("Você está com obesidade grau II! Seu IMC: " +imc.toFixed(1))
    }else if(imc > 39.9){
      setMensagem("Você está com obesidade grau III! Seu IMC: " +imc.toFixed(1))
    }
    
  }


  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex: 70"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Altura em (cm) Ex: 176"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}
