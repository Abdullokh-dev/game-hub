import Header from "./components/Header/Header";
import Games from "./components/Games/Games";
import GenreList from "./components/Genres/GenreList";
import "./index.css";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="container-fluid px-3 px-md-4">
        <Header />

        <main>
          <div className="row">
            <div className="col d-none d-xl-block aside-column">
              <aside>
                <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
              </aside>
            </div>

            <div className="col">
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({...gameQuery, platform})}/>
              <Games gameQuery={gameQuery} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
