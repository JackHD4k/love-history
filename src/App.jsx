import BoxText from "./components/BoxText"
import BoxImg from './components/BoxImg'

function App() {
  return(
    <div>

      {/* HEADER */}
      <header>
        <h1 className="header-title">Nuestra Historia</h1>
      </header>

      {/* MAIN */}
      <div className="main-table">
        <BoxText />
        <BoxImg />
        <BoxText />
        <BoxImg />
        <BoxText />
        <BoxImg />
      </div>
    </div>
  )
}

export default App