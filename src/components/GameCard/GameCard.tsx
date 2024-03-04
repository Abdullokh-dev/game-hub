import {Game} from "../../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import './GameCard.css'
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game,
}

function GameCard({ game }: Props) {
  return (
    <div className="col d-flex flex-column mb-4">
      <div className="card rounded-3 overflow-hidden h-100">
        <img src={getCroppedImageUrl(game.background_image)} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <h3 className="card-title fs-5">{game.name}</h3>
          <div className="d-flex justify-content-between align-items-center">
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard;
