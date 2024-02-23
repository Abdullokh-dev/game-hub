import Header from "./components/Header/Header";
import Games from "./components/Games/Games";
import GenreList from "./components/Genres/GenreList";
import "./index.css";

function App() {
  return (
    <>
      <div className="container-fluid px-3 px-md-4">
        <Header />

        <main>
          <div className="row">
            <div className="col d-none d-xl-block aside-column">
              <aside>
                <GenreList />
              </aside>
            </div>

            <div className="col">
              <Games />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
