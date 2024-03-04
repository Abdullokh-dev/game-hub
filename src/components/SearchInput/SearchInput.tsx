import {useRef} from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput ({onSearch}: Props) {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <form className="mx-3 d-flex w-100" onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <div className="input-group">
        <span className="input-group-text rounded-4 rounded-end-0" id="basic-addon1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input ref={ref} type="search" className="form-control rounded-4 rounded-start-0" placeholder="Search games..." />
      </div>
    </form>
  )
}

export default SearchInput;
