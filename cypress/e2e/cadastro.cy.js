/// <reference types="cypress" />


describe('Cadastro de entregador para Buger Eats', () => {


    it('Deve efetuar cadastro inserindo CNH com método de entrega Moto', () => {

        //Acessa aplicação Buger Eats
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('main > h1').should('be.visible').and('have.text', 'Seja um parceiro entregador pela Buger Eats')
    });


    //Acessa a tela de cadastro
    cy.get('strong').should('be.visible').and('have.text', 'Cadastre-se para fazer entregas').click()
    cy.get('form > h1').should('be.visible').and('contain.text', 'Cadastre-se para')

    //Prenche os dados do usuário
    cy.get('input[placeholder="Nome completo"]').should('be.visible').type('Anice Gomes')
    cy.get('input[placeholder="CPF somente números"]').should('be.visible').type('31041145871')
    cy.get('input[name="email"]').should('be.visible').type('anice.quintanilha@useargo.com')
    cy.get('input[name="whatsapp"]').should('be.visible').type('92965454578')

     //Preenche endereço do usuário
     cy.get('input[placeholder="CEP"]').should('be.visible').type('09110160')
     cy.get('input[type="button"]').should('be.visible').click()
     cy.get('input[placeholder="Número"]').should('be.visible').type('1000')
     cy.get('input[placeholder="Complemento"]').should('be.visible').type('Ap 100 Bl 2')
     
});