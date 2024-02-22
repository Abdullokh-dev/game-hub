import {Game} from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import './GameCard.css'

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
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </div>
      </div>
    </div>
  )
}

export default GameCard;
