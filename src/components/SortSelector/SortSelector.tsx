interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export default function SortSelector({onSelectSortOrder, sortOrder}: Props) {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <div className="dropdown mb-4">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Order by {currentSortOrder?.label || 'Relevance'}
      </button>
      <ul className="dropdown-menu">
        { sortOrders.map(order =>
          <li key={order.value}><a onClick={() => onSelectSortOrder(order.value)} className="dropdown-item" href="#">{order.label}</a></li>
        )}
      </ul>
    </div>
  )
}