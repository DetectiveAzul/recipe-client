class Ingredient {
  constructor(data) {
    this.id = data.id ? data.id : undefined;
    this.name = data.name;
  };

};

export default Ingredient;
