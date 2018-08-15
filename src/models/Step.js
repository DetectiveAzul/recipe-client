class Step {
  constructor(data) {
    this.id = data.id ? data.id : undefined;
    this.recipeId = data.recipeId;
    this.stepNumber = data.stepNumber;
    this.stepDescription = data.stepDescription;
  };

};

export default Step;
