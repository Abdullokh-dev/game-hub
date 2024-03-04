import useGenres, {Genre} from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import "./Genres.css";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({selectedGenre, onSelectGenre}: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>

  return (
    <>
      <ul className="genre-list mb-3">
        {data.map(genre =>
          <li key={genre.id}>
            <img className="genre-img" src={getCroppedImageUrl(genre.image_background)} alt={genre.name}/>
            <button onClick={() => onSelectGenre(genre)} className={genre.id === selectedGenre?.id ? 'fs-6 btn-link p-0 fw-bold' : 'fs-6 btn-link p-0 fw-light'}>{genre.name}</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default GenreList;
