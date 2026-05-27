import { useState } from "react";

function AddFoodForm({ onAdd }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: crypto.randomUUID(),
      name,
      owner,
      quantity: 100,
      reserved: false,
      requestedBy: null,
      status: "available",
      approvedAt: null,
    };

    onAdd(newFood);

    setName("");
    setOwner("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        required
      />

      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFoodForm;