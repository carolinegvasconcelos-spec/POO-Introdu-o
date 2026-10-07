import './App.css'
import { ContaBancaria } from './models/ContaBancaria'
import { Usuario } from './models/Usuario'

function App() {
  const Usuario1 = new Usuario('Ana',25)
  const Usuario2 = new Usuario('Pedro',35)
  const conta = new ContaBancaria(Usuario1)

  conta.depositar (100000000)
 
 
  return (
    <>
    <p>{Usuario1.apresentar()}</p>
    <p>{Usuario2.apresentar()}</p>
    <p>R$ {conta.verSaldo()}</p>
      
    </>
  )
}

export default App
