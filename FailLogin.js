describe('Orki - Failed Login', function() {
    it('Open Orki Product', function() {
      cy.visit('http://datawave-test-oracle.s3-website.eu-west-2.amazonaws.com')
    })

    it('Attempt to Login without Username or Password', function() {
        cy.contains('Log in').click()
        cy.contains('Please enter a valid user name')
        cy.contains('Please enter a password')
    })

    it('Attempt to Login with an incorrect Username or Password', function() {
        cy.get('input.input-group-text').eq(0).type('fake@email.com')
        .should('have.value', 'fake@email.com')

        cy.get('input.input-group-text').eq(1).type('TestPassword')
        .should('have.value', 'TestPassword') 
        
        cy.contains('Log in').click()
        //cy.wait(50)
        //cy.contains('Incorrect details')
    })




  })