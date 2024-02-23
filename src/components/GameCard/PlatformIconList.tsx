import 'bootstrap-icons/font/bootstrap-icons.css';
import {Platform} from "../../hooks/useGames";

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: string } = {
    pc: 'windows',
    playstation: 'playstation',
    xbox: 'xbox',
    nintendo: 'nintendo-switch',
    mac: 'apple',
    linux: 'ubuntu',
    android: 'android2',
    ios: 'phone',
    web: 'globe'
  }

  return (
    <div className="d-flex gap-2">
      { platforms.map((platform) =>
        <i key={platform.id} className={"platform-icon bi bi-"+ iconMap[platform.slug]} />
      ) }
    </div>
  )
}

export default PlatformIconList;
