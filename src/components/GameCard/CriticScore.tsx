interface Props {
  score: number;
}

function CriticScore({score}: Props) {
  const color = score > 75 ? 'success' : score > 60 ? 'warning' : 'secondary';
  return (
    <>
      <span className={"badge text-bg-" + color}>{score}</span>
    </>
  )
}

export default CriticScore;
