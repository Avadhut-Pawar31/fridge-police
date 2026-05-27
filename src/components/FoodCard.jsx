function FoodCard({
  food,
  onRequest,
  onApprove,
  onConsume,
  onSpoil,
  onMissing,
}) {
  return (
    <div className="card">
      <h2>{food.name}</h2>

      <p>
        <strong>Owner:</strong> {food.owner}
      </p>

      <p>
        <strong>Quantity:</strong> {food.quantity}%
      </p>

      <p>
        <strong>Status:</strong> {food.status}
      </p>

      <p>
        <strong>Requested By:</strong>{" "}
        {food.requestedBy || "Nobody"}
      </p>

      <button
        onClick={() =>
          onRequest(food.id, "Roommate B")
        }
      >
        Request
      </button>

      <button onClick={() => onApprove(food.id)}>
        Approve
      </button>

      <button onClick={() => onConsume(food.id)}>
        Consume
      </button>

      <button onClick={() => onSpoil(food.id)}>
        Mark Spoiled
      </button>

      <button onClick={() => onMissing(food.id)}>
        Mark Missing
      </button>
    </div>
  );
}

export default FoodCard;