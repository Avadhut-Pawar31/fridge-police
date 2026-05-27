import FoodCard from "./FoodCard";

function FoodList(props) {
  return (
    <div>
      {props.foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          onRequest={props.onRequest}
          onApprove={props.onApprove}
          onConsume={props.onConsume}
          onSpoil={props.onSpoil}
          onMissing={props.onMissing}
        />
      ))}
    </div>
  );
}

export default FoodList;