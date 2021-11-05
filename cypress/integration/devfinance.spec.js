// autocompletar com a tipagem do cypress 
/// <reference types="cypress"/>

describe('DevFinance',()=>{
  beforeEach(()=>{
    cy.visit('https://dev-finance.netlify.app/')
  })

  it('Adicionar uma nova transação de entrada',()=>{
    cy.get('a[onclick*=open]').click()
    cy.get('#description').type('Freela')
    cy.get('#amount').type('12')
    cy.get('#date').type('2021-11-03')

    // botão com o texto "Salvar"
    cy.contains('button','Salvar').click()

    cy.get('#data-table tbody tr').should('have.length',1)
  })

  it('Excluir uma transação da listagem',()=>{
    cy.get('a[onclick*=open]').click()
    cy.get('#description').type('Freela')
    cy.get('#amount').type('12')
    cy.get('#date').type('2021-11-03')

    cy.contains('button','Salvar').click()

    cy.get('#data-table tbody tr').should('have.length',1)

    cy.contains('td','Freela')// a partir de um elemento texto
      .parent()// voltar ao elemento pai
      .find('img[onclick*=remove]')// busca um elemento especifico
      // .click()

    cy.contains('td','Freela')
      .siblings()// lista os elementos irmãos
      .children('img[onclick*=remove]')// elementos filhos
      .click()
    
    cy.get('#data-table tbody tr').should('have.length',0)
  })
})