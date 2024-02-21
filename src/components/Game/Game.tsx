import useGames from "../hooks/useGames";

function Game() {
  const { error, games } = useGames();
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

export default Game;
