export default describe('chuick noris project', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('page loads', () => {
    cy.contains('WELCOME');
  })

  it('loads a joke when the button is clicked', () => {
    cy.get('.displayJoke').contains('Wanna hear a joke?');
    cy.get('.randomJoke').contains('Click here for a random joke!').click();
    cy.get('.displayJoke').contains('Wanna hear a joke').should('not.exist');
  })

  it('loads all 16 categories', () => {
    cy.get('.cypressTest').should('have.length', 16);
  })

  it('loads a joke when a category is clicked', () => {
    cy.wait(1000)
    cy.get('.categoryJoke').should('not.exist');
    cy.get('.categoryButton').contains('animal').click();
    cy.get('.categoryJoke').should('exist');
  })

  it('loads jokes based on search value', () => {
    cy.get('.toSearchPage').click();
    cy.wait(1000);
    cy.contains('Type here any word to find your joke:').should('exist');
    cy.get('.displayJoke').should('not.exist');
    cy.get('input').type('sad')
    cy.get('.displayJoke').should('exist');
  })
})