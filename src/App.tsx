import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />

        <main>
          <div className="row">
            <div className="d-none d-xl-block col-12 col-xl-6 bg-success">
              <aside>Aside</aside>
            </div>

            <div className="col-12 col-xl-6 bg-secondary">
              Main
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
