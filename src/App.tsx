import Header from "./components/Header/Header";
import Games from "./components/Games/Games";

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
              <Games />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
