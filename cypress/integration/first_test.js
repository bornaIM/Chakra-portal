describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })

    it('Visits page', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('app')
        const title = cy.contains("Demo filter component");
        let fromInput = cy.get('#from-input');
        // const toInput = cy.get('#to-input');

        fromInput.focus();
        fromInput.type('{backspace}{backspace}100');

        cy.wait(3000)

        let fromInput2 = cy.get('#from-input');
        fromInput2.blur()
    })
})