import foto1 from './img/foto1.jpg'
import foto2 from './img/foto2.jpg'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Nuestra Historia</h1>
      </header>
      <div className="a">
        <h1>Costa verde</h1>
        <p>17/07/2022</p>
      </div>
      <div className="b">
        <img className="img-box" src={foto1} alt="" />
      </div>
      <div className="c">
        <img className="img-box" src={foto2} alt="" />
      </div>
      <div className="d">
        <h1>Costa verde</h1>
        <p>17/07/2022</p>
      </div>
    </div>
  )
}

export default App