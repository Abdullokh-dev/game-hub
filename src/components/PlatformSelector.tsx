import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data, error } = usePlatforms();
  if (error.length) return null;
  return (
    <>
      <div className="dropdown mb-4">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Platforms
        </button>
        <ul className="dropdown-menu">
          {data.map(platform => <li key={platform.id}><a className="dropdown-item" href="#">{platform.name}</a></li>)}
        </ul>
      </div>
    </>
  )
}

export default PlatformSelector;
