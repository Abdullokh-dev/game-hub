import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return null

  if (isLoading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>

  return (
    <>
      <ul>
        {data.map(genre => <li key={genre.id}> {genre.name} </li>)}
      </ul>
    </>
  )
}

export default GenreList;
