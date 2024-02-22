import {Game} from "../hooks/useGames";

interface Props {
  game: Game,
}

function GameCard({ game }: Props) {
  return (
    <div className="col d-flex flex-column mb-4">
      <div className="card rounded-3 overflow-hidden h-100">
        <img src={game.background_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title fs-5">{game.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default GameCard;
