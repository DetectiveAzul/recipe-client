class Quantity {
  constructor(data) {
    this.id = data.id ? data.id : undefined;
    this.recipeId = data.recipeid;
    this.ingredientId = data.ingredientid;
    this.measurementId = data.measurementid;
    this.ingredientQuantity = data.ingredientquantity;
  };

};

export default Quantity;
