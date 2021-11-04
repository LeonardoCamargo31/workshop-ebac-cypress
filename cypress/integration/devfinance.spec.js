// autocompletar com a tipagem do cypress 
/// <reference types="cypress"/>

describe('DevFinance',()=>{
  it('Adicionar uma nova transação de entrada',()=>{
    cy.visit('https://dev-finance.netlify.app/')

    cy.get('a[onclick*=open]').click()
    cy.get('#description').type('Freela')
    cy.get('#amount').type('12')
    cy.get('#date').type('2021-11-03')

    // botão com o texto "Salvar"
    cy.contains('button','Salvar').click()

    cy.get('#data-table tbody tr').should('have.length',1)
  })
})