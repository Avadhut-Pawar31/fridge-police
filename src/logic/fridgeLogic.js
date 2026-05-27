export const requestFood = (foods, id, roommate) => {
  return foods.map((food) => {
    if (food.id === id) {
      if (food.reserved || food.quantity <= 0) {
        alert("Food already reserved or unavailable");
        return food;
      }

      return {
        ...food,
        reserved: true,
        requestedBy: roommate,
        status: "pending approval",
      };
    }

    return food;
  });
};

export const approveFood = (foods, id) => {
  return foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        approvedAt: Date.now(),
        status: "approved",
      };
    }

    return food;
  });
};

export const consumeFood = (foods, id) => {
  return foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        quantity: 0,
        reserved: false,
        requestedBy: null,
        status: "consumed",
      };
    }

    return food;
  });
};

export const expireApprovals = (foods) => {
  const ONE_MINUTE = 60000;

  return foods.map((food) => {
    if (
      food.approvedAt &&
      Date.now() - food.approvedAt > ONE_MINUTE &&
      food.status === "approved"
    ) {
      return {
        ...food,
        reserved: false,
        requestedBy: null,
        approvedAt: null,
        status: "expired",
      };
    }

    return food;
  });
};

export const spoilFood = (foods, id) => {
  return foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        quantity: 0,
        reserved: false,
        requestedBy: null,
        status: "spoiled",
      };
    }

    return food;
  });
};

export const markMissing = (foods, id) => {
  return foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        quantity: 0,
        reserved: false,
        requestedBy: null,
        status: "missing",
      };
    }

    return food;
  });
};

export const addFood = (foods, newFood) => {
  return [...foods, newFood];
};