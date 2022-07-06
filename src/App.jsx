import BoxText from "./components/BoxText"
import BoxImg from './components/BoxImg'
import foto1 from './img/foto1.jpg'
import foto2 from './img/foto2.jpg'

function App() {
  const img3 = 'https://drive.google.com/uc?export=view&id=1CyAlt0zK_mhrDQacVC4M4Zeferwxp5PQ'
  return(
    <div>
      {/* HEADER */}
      <header>
        <h1 className="header-title">Nuestra Historia</h1>
      </header>

      {/* MAIN */}
      <div className="main-table">
        <BoxText title='Costa Verde' date='17/03/2022'/>
        <BoxImg img={img3}/>
        <BoxImg img={foto2}/>
        <BoxText title='Mar de miraflores' date='17/03/2022'/>
      </div>
    </div>
  )
}

export default App