describe('Recipe Testing', () => {
    context('Testing Routing through NavBar', () => {
        before(() => {
            cy.visit('/');
        });
    
        it('should enter index after clicking on Recipes', () => {
            cy.get('Button').contains('Recipes').click();
            cy.url().should('include', '/recipes');
        });
    
        it('should enter new recipe form after clicking on New', () => {
            cy.get('Button').contains('New').click();
            cy.url().should('include', 'recipes/new');
        });
    
        it('should enter conversion guide after clicking on Conversion Guide', () => {
            cy.get('Button').contains('Conversion Guide').click();
            cy.url().should('include', '/guide');
        });
        
        it('should come back to Homepage after clicking on Home', () => {
            cy.get('Button').contains('Home').click();
            cy.url().should('eq', 'http://localhost:3000/');
        });
    });

    context('Testing creation of a new Recipe', () => {
        before(() => {
            cy.visit('/recipes/new');
        });

        it('should be able to input the recipe name', () => {
            const expectedTest = 'Cypress Test Recipe'
            cy.get('input[name="name"]')
                .type(expectedTest)
                .should('have.value', expectedTest);
        });

        it('should be able to input the recipe description', () => {
            const expectedTest = 'Cypress Test Recipe Description'
            cy.get('textarea[name="description"]')
                .type(expectedTest)
                .should('have.value', expectedTest);
        });

        it('should be able to input the recipe times', () => {
            const expectedTime = '22:22'
            cy.get('input[name="prep_time"]')
                .type(expectedTime)
                .should('have.value', expectedTime);
            cy.get('input[name="cook_time"]')
                .type(expectedTime)
                .should('have.value', expectedTime);
        });

        it('should be able to input a recipe ingredient', () => {
            const expectedAmount = '99';
            const expectedIngredient = 'Test Ingredient 1';
            const expectedMeasure = 'pints';

            cy.get('input[name="quantity-0"]')
                .type(expectedAmount)
                .should('have.value', expectedAmount);
            cy.get('select[name="measurement-0"]')
                .select(expectedMeasure)
                .should('have.value', expectedMeasure);
            cy.get('input[name="ingredient-0"]')
                .type(expectedIngredient)
                .should('have.value', expectedIngredient)
        });

        xit('should be able to add and remove ingredients', () => {
            cy.contains('+')
        });

        xit('should be able to input a recipe step', () => {

        });

        xit('should be able to add and remove step', () => {

        });

        xit('should be able to submit the recipe and find it on the index', () => {

        });

    });
});