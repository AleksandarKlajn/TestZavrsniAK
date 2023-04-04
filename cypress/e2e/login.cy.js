/// <reference types="Cypress" />

const userData = require('../fixtures/user.json')

describe('login with valid credentials', () => {
    xit('Visit login page', () => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        cy.get('input[type="email"]').type('probni@gmail.com')
        cy.get('input[type="password"]').type('Test123')
        cy.get('button[type="submit"]').click()
        cy.url().should('contains', '/my-organizations')
        cy.get('button[type="submit"]').should("not.exist")
    })
})

describe('login with invalid email', () => {
    xit('Visit login page', () => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        cy.get('input[type="email"]').type('probni2@gmail.com')
        cy.get('input[type="password"]').type('Test123')
        cy.get('button[type="submit"]').click()
    })
})

describe('login with invalid password', () => {
    xit('Visit login page', () => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        cy.get('input[type="email"]').type('probni@gmail.com')
        cy.get('input[type="password"]').type('Test1234')
        cy.get('button[type="submit"]').click()
    })
})

it('Create new board', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/login')
    cy.get('input[type="email"]').type('probni@gmail.com')
    cy.get('input[type="password"]').type('Test123')
    cy.get('button[type="submit"]').click()
    cy.get('li[title="Add new Board"]').click()
    cy.get('input[name="name"]').type('Ime table')
    cy.get('button[name="next_btn"]').click()
    cy.get('span[name="type_scrum"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('p[class="vs-c-task-card__title"]').should('exist')
    
})

it('Delete created board', ()=>{
  cy.visit('https://cypress.vivifyscrum-stage.com/login')
  cy.get('input[type="email"]').type('probni@gmail.com')
  cy.get('input[type="password"]').type('Test123')
  cy.get('button[type="submit"]').click()
  cy.get('a[class="vs-c-site-logo router-link-exact-active router-link-active"]').click()
  cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]').click()
  cy.get('button[name="save-btn"]').click()
})