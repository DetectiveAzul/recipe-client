class Quantity {
  constructor(data) {
    this.id = data.id ? data.id : undefined;
    this.recipeId = data.recipeId;
    this.ingredientId = data.ingredientId;
    this.measurementId = data.measurementId;
    this.ingredientQuantity = data.ingredientQuantity;
  };

};

export default Quantity;
