import placeholder from "../../assets/placeholder.svg";

function GameCardSkeleton() {
  return (
    <div className="col d-flex flex-column mb-4">
      <div className="card rounded-3 overflow-hidden h-100" aria-hidden="true">

        <img src={placeholder} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title placeholder-glow">
              <span className="placeholder col-12" />
            </h3>
            <p className="card-text placeholder-glow d-flex">
              <span className="placeholder col-9" />
              <span className="placeholder col-2 ms-auto" />
            </p>
          </div>
      </div>
    </div>
  )
}

export default GameCardSkeleton;
