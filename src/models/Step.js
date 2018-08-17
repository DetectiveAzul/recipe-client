class Step {
  constructor(data) {
    this.id = data.id ? data.id : undefined;
    this.recipeId = data.recipeid;
    this.stepNumber = data.stepnumber;
    this.stepDescription = data.stepdescription;
  };

};

export default Step;
