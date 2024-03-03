export default function SortSelector() {
  return (
    <>
      <div className="dropdown mb-4">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Order by relevance
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Relevance</a></li>
          <li><a className="dropdown-item" href="#">Date added</a></li>
          <li><a className="dropdown-item" href="#">Name</a></li>
          <li><a className="dropdown-item" href="#">Release date</a></li>
          <li><a className="dropdown-item" href="#">Popularity</a></li>
          <li><a className="dropdown-item" href="#">Average rating</a></li>
        </ul>
      </div>
    </>
  )
}