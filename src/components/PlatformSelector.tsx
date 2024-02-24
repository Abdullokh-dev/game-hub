import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({selectedPlatform, onSelectPlatform}: Props) {
  const { data, error } = usePlatforms();
  if (error.length) return null;
  return (
    <>
      <div className="dropdown mb-4">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedPlatform?.name || 'Platforms'}
        </button>
        <ul className="dropdown-menu">
          {data.map(platform => <li key={platform.id} onClick={() => onSelectPlatform(platform)}><a className="dropdown-item" href="#">{platform.name}</a></li>)}
        </ul>
      </div>
    </>
  )
}

export default PlatformSelector;
