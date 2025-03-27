///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ludmila_teste@teste.com.br')
        cy.get('#password').type('testeludmila123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ludmila_teste (não é ludmila_teste? Sair)' )
    })
})