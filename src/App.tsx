import Header from "./components/Header/Header";
import Games from "./components/Games/Games";
import GenreList from "./components/Genres/GenreList";
import "./index.css";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/useGames";
import SortSelector from "./components/SortSelector/SortSelector";
import GameHeading from "./components/GameHeading/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="container-fluid px-3 px-md-4">
        <Header onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />

        <main>
          <div className="row">
            <div className="col d-none d-xl-block aside-column">
              <h5 className="mb-2">Genres</h5>
              <aside>
                <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
              </aside>
            </div>

            <div className="col">
              <GameHeading gameQuery={gameQuery} />

              <div className="d-flex gap-4">
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({...gameQuery, platform})}/>
                <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
              </div>
              <Games gameQuery={gameQuery} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
