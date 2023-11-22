
import './App.css'
import CompnyName from './Companies/CompnyName'
import Emplyee from './Programers/Emplyee'

function App() {


  return (
    <>
      <CompnyName name="Tuwaiq" number={240} year="2018" />
      <CompnyName name="Aramco" number={400000} year="1963" />
      <CompnyName name="Stc" number={100000} year="1993" />
    </>
  )
}

export default App
