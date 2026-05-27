import { useEffect, useState } from "react";

import Header from "./components/Header";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";

import mockData from "./data/mockData";

import {
  requestFood,
  approveFood,
  consumeFood,
  spoilFood,
  markMissing,
  expireApprovals,
  addFood,
} from "./logic/fridgeLogic";

function App() {
  const [foods, setFoods] = useState(mockData);

  const handleRequest = (id, roommate) => {
    setFoods((prev) =>
      requestFood(prev, id, roommate)
    );
  };

  const handleApprove = (id) => {
    setFoods((prev) =>
      approveFood(prev, id)
    );
  };

  const handleConsume = (id) => {
    setFoods((prev) =>
      consumeFood(prev, id)
    );
  };

  const handleSpoil = (id) => {
    setFoods((prev) =>
      spoilFood(prev, id)
    );
  };

  const handleMissing = (id) => {
    setFoods((prev) =>
      markMissing(prev, id)
    );
  };

  const handleAddFood = (newFood) => {
    setFoods((prev) =>
      addFood(prev, newFood)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFoods((prev) =>
        expireApprovals(prev)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />

      <AddFoodForm onAdd={handleAddFood} />

      <FoodList
        foods={foods}
        onRequest={handleRequest}
        onApprove={handleApprove}
        onConsume={handleConsume}
        onSpoil={handleSpoil}
        onMissing={handleMissing}
      />
    </div>
  );
}

export default App;