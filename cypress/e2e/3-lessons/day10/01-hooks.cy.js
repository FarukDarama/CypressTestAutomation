describe('Hook Nedir', () => {
// before hook()
//ilk test baslamadan once bir kez calisir ve sadece 1 kez calisir

before('Bu bir before hook blogudur',() => {
    cy.log('Tüm testlerden once calisir')
});

// after() hook
//tüm testler tamamlandiktan sonra 1 kez calisir ve sadece 1 kez calisir

after('Bu bir after methoddur',() => {
    cy.log('Tüm testlerden sonra calisir')
});

beforeEach('Bu bir beforeEach() dur',() => {
    cy.log('Her testlerden önce  calisir')
});

//afterEach() hook
//Her testten sonra calisir

afterEach('Bu bir afterEach()',() => {
    cy.log('Her testten sonra calisir');
});

    it('Test 1', () => {
        cy.log('test 1')
    });

    it('Test 2', () => {
        cy.log('test 2')
    });

    it('Test 3', () => {
        cy.log('test 3')
    });
});