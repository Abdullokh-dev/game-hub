import useGames from "../hooks/useGames";
import GameCard from "../GameCard/GameCard";

function Games() {
  const { error, games } = useGames();
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  )
}

export default Games;
