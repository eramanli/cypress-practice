import './command.js'

Cypress.config('defaultCommandTimeout', 10000)


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
