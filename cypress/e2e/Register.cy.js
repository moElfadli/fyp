import loginDetails from '../fixtures/loginDetails.json'

const testUser = loginDetails.testUser

 describe('Register_as_Student', function() {
  

   it('Register_student_using_test_account', function() {
  
      cy.viewport(1366, 625)
   
      cy.visit('http://localhost:3000/Register')
   
      cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type(testUser.email)
   
      cy.get('.w-full > .bg-white > .space-y-4 > div > #displayName').type(testUser.displayName)
   
      cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type(testUser.password)
   
      cy.get('.bg-green-500').click()

     cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('RegisterRedirect')
     cy.wait('@RegisterRedirect').its('response.statusCode').should('eq', 200)
       cy.url().should('include', '/StudentHomepage')

   
   })
  
  })
  
 


 
 
 

 
 
 