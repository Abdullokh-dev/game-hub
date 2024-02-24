import Header from "./components/Header/Header";
import Games from "./components/Games/Games";
import GenreList from "./components/Genres/GenreList";
import "./index.css";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <div className="container-fluid px-3 px-md-4">
        <Header />

        <main>
          <div className="row">
            <div className="col d-none d-xl-block aside-column">
              <aside>
                <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
              </aside>
            </div>

            <div className="col">
              <PlatformSelector />
              <Games selectedGenre={selectedGenre}/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
