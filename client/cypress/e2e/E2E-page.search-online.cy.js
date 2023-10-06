/* eslint-disable no-undef */
describe('template spec', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'))

  it('initial state, with out search', () => {
    cy.get('#input__search')
      .should('have.value', '')
  })

  it('click in search and submit', () => {
    cy.get('#input__search')
      .should('have.value', '')
      .click()
  })

  it('clear input search', () => {
    cy.get('[placeholder="Nunca dejes de buscar"]').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  it('add text in search', () => {
    cy.get('#input__search')
      .click()
      .get('[placeholder="Nunca dejes de buscar"]').type('carros modernos')
  })

  it('text and submit', () => {
    cy.get('[placeholder="Nunca dejes de buscar"]')
      .type('motos modernass')

    cy.get('#form_input__search').submit()
  })
})
describe('when the user can go to detail item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('#input__search')
      .type('autos clasicos')

    cy.get('#form_input__search').submit()
  })

  it('click into card item', () => {
    cy.get('#cardItem__article-link')
      .click()
  })

  it('click into logo, go to home', () => {
    cy.get('#cardItem__article-link')
      .click()

    cy.get('[alt="nav-logo-ml"]').click()
  })
})

describe('Go to any view', () => {
  it('visit any route, go to screen', () => {
    cy.visit('http://localhost:3000/items/MLA1133297186')
  })
})
describe('Failed service, characters specials ', () => {
  
  it('special characters and submittext and submit', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#input__search')
      .type('3$%"##%..')

    cy.get('#form_input__search').submit()
  })
})

