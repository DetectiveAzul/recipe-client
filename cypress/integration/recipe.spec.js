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
});