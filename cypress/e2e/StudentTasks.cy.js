import loginDetails from '../fixtures/loginDetails.json'

const testUser = loginDetails.testUser

function login() {
   
 
   cy.viewport(1366, 625)

   cy.visit('http://localhost:3000/')

   cy.get('.hidden > :nth-child(1)').click()

    
   cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type(testUser.email)
 
 
   cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type(testUser.password)

   cy.get('.bg-green-500').click()

cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('LoginRedirect')
cy.wait('@LoginRedirect').its('response.statusCode').should('eq', 200)
}

describe('Login_as_student', function() {

  it('Login_as_student_using_test_account', function() {
 
     cy.viewport(1366, 625)
  
     cy.visit('http://localhost:3000/')
  
     cy.get('.hidden > :nth-child(1)').click()
  
      
     cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type(testUser.email)
   
   
     cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type(testUser.password)
  
     cy.get('.bg-green-500').click()
  
  cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('LoginRedirect')
  cy.wait('@LoginRedirect').its('response.statusCode').should('eq', 200)
  cy.url().should('include', '/StudentHomepage')
  })
 
 })



  describe('Logout', function() {

   it('Logout_from_student_page', function() {

      // start login
      cy.viewport(1366, 625)
  
      cy.visit('http://localhost:3000/')
   
      cy.get('.hidden > :nth-child(1)').click()
   
       
      cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type('test@test.com')
    
    
      cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type('test@test.com')
   
      cy.get('.bg-green-500').click()
   
   cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('LoginRedirect')
   cy.wait('@LoginRedirect').its('response.statusCode').should('eq', 200)
   cy.url().should('include', '/StudentHomepage')
  // end login

      cy.viewport(1366, 625)
   
      cy.visit('http://localhost:3000/StudentHomepage')
      cy.get('.navbar-items').click()
   
   })
  
  })

 
  describe('submit_quiz', function() {

   it('submits_quiz_using_test_account', function() {
      cy.viewport(1366, 625)
  
      cy.visit('http://localhost:3000/')
   
      cy.get('.hidden > :nth-child(1)').click()
   
       
      cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type('test@test.com')
    
    
      cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type('test@test.com')
   
      cy.get('.bg-green-500').click()
   
   cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('LoginRedirect')
   cy.wait('@LoginRedirect').its('response.statusCode').should('eq', 200)
   cy.url().should('include', '/StudentHomepage')
  
      cy.viewport(1366, 625)
   
      cy.visit('http://localhost:3000/StudentHomepage')
   
      cy.get('div > .flex > .grid > .p-6:nth-child(2) > .block:nth-child(1)').click()
   
      cy.wait(3000)
      cy.get(':nth-child(1) > .mr-2').click()
      cy.get(':nth-child(3) > div.mb-4 > .oneWord-question-input').type('5677')
   
      cy.get('.min-h-screen > .rounded-lg > form > .block:nth-child(2) > .mr-2').click()
     
   
      cy.get('.min-h-screen > .rounded-lg > form > .block:nth-child(2) > .mr-2').type('1577')

   
      cy.get('body > #root > div > .min-h-screen > .bg-blue-500').click()
      cy.wait(3000)

      //assert the url is correct
      cy.url().should('include', '/StudentHomePage')

      
   
   })
  
  })

describe('Review_Submission', function() {

   it('Reviews_Sutudent_Submission', function() {

      
      // start login
      cy.viewport(1366, 625)
  
      cy.visit('http://localhost:3000/')
   
      cy.get('.hidden > :nth-child(1)').click()
   
       
      cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type('test@test.com')
    
    
      cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type('test@test.com')
   
      cy.get('.bg-green-500').click()
   
   cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('LoginRedirect')
   cy.wait('@LoginRedirect').its('response.statusCode').should('eq', 200)
   cy.url().should('include', '/StudentHomepage')
  // end login
  
      cy.viewport(1366, 625)
   
      cy.visit('http://localhost:3000/StudentHomepage')
   
      cy.get('body > #root > div > .flex').click()
   
      cy.get('div > .flex > .grid > .p-6:nth-child(2) > .block:nth-child(2)').click()
       // assert the answer is visible
    cy.get(':nth-child(3) > :nth-child(1) > .bg-white').should('be.visible')
   
      cy.get('#root > div > .min-h-screen > div > .btnBack').click()

   

   
   })
  
  })
  



  
  
 


 
 
 

 
 
 