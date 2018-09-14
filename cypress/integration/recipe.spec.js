describe('Recipe Home Page Testing', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should visit without problem each page using the navbar', () => {
        cy.get('Button').contains('Recipes').click();
    })
});