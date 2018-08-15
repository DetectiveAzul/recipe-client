class Ingredient {
  constructor(data) {
    this.id = data.id ? data.id : undefined;
    this.name = data.name;
    this.description = data.description;
  };

};

export default Ingredient;
