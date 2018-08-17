describe('Orki - Successful Login', function() {
    it('Open Orki Product', function() {
      cy.visit('http://datawave-test-oracle.s3-website.eu-west-2.amazonaws.com')
    })

    it('Attempt to Login with a correct Username & Password', function() {
        cy.get('input.input-group-text').eq(0).type('david')
        .should('have.value', 'david')

        cy.get('input.input-group-text').eq(1).type('password')
        .should('have.value', 'password') 
        
        cy.wait(10)

        cy.contains('Log in').click()
        

    })




  })