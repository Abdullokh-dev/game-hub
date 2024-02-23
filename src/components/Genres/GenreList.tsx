import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import "./Genres.css";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  if (error.length) return null;

  if (isLoading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>

  return (
    <>
      <ul className="genre-list mb-3">
        {data.map(genre =>
          <li key={genre.id}>
            <img className="genre-img" src={getCroppedImageUrl(genre.image_background)} alt={genre.name}/>
            <span className="fs-6">{genre.name}</span>
          </li>
        )}
      </ul>
    </>
  )
}

export default GenreList;
