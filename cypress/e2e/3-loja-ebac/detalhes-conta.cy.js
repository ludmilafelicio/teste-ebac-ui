///<reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        
    });

    it('Deve completar detalhes da compra com sucesso', () => {
        cy.detalhesConta('Ludmila', 'Felicio', 'ludmila.felicio')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});