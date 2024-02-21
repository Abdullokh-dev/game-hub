import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />

        <main>
          <div className="row">
            <div className="d-none d-xl-block col-12 col-xl-6">
              <aside>Aside</aside>
            </div>

            <div className="col-12 col-xl-6">
              <Game />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
