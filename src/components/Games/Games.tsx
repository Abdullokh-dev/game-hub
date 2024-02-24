import useGames, {Platform} from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import {Genre} from "../../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function Games( {selectedPlatform, selectedGenre}: Props ) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p className="text-danger m-0">{error}</p>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  )
}

export default Games;
