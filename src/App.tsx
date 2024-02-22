import Header from "./components/Header/Header";
import Games from "./components/Games/Games";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />

        <main>
          <div className="row">
            <div className="d-none d-xl-block col-12 col-xl-3 col-xxl-2">
              <aside>
                <GenreList />
              </aside>
            </div>

            <div className="col-12 col-xl-9 col-xxl-10">
              <Games />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
