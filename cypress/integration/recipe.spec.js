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
        let expectedName = undefined;

        before(() => {
            cy.visit('/recipes/new');
            expectedName = 'Cypress Test Recipe';
        });

        it('should be able to input the recipe name', () => {
            cy.get('input[name="name"]')
                .type(expectedName)
                .should('have.value', expectedName);
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

        it('should be able to add and remove ingredients', () => {
            cy.contains('+').click().click();
            cy.get('.ingredient-field').then(($fields) => {
                expect($fields).to.have.length(3);
            });
            cy.contains('-').click();
            cy.get('.ingredient-field').then(($fields) => {
                expect($fields).to.have.length(2);
                cy.contains('-').click();
            });
        });

        it('should be able to input a recipe step', () => {
            const expectedText = 'This is a Test Step';
            cy.get('textarea[name="step-0"]')
            .type(expectedText)
            .should('have.value', expectedText);
        });

        it('should be able to add and remove step', () => {
            cy.get('.fDXsSF').then(($buttons) => {
                $buttons[2].click();
                $buttons[2].click();

                cy.get('.step-field').then(($fields) => {
                    expect($fields).to.have.length(3);

                    $buttons[3].click();
                    cy.get('.step-field').then(($fields) => {
                        expect($fields).to.have.length(2);
                        $buttons[3].click();
                   });
                });

            });
        });

        it('should be able to submit the recipe, and find it on the index', () => {
            cy.contains('Add Recipe').click();
            cy.url().should('include', '/recipes');
            cy.contains(expectedName).click();
            cy.get('.sc-htoDjs').should('have.text', expectedName);
            cy.contains('Delete').click();
            cy.get('.sc-bwzfXH').then(($recipes) => {
                const isItDeleted = true;
                $recipes.each(($recipe) => {
                    if ($recipe.text === expectedName) isItDeleted = false;
                });
                expect(isItDeleted).to.equal(true);
            });

        });


    });
});