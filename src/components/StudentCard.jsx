function StudentCard({ id, name, major, score, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{major}</p>
      <p>{score} · {score >= 60 ? "Passed" : "Failed"}</p>
      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;