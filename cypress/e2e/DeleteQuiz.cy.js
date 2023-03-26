function login() {
   
 
   cy.viewport(1366, 625)

   cy.visit('http://localhost:3000/')

   cy.get('.hidden > :nth-child(1)').click()

    
   cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type('test2@test.com')
 
 
   cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type('test2@test.com')

   cy.get('.bg-green-500').click()

cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('LoginRedirect')
cy.wait('@LoginRedirect').its('response.statusCode').should('eq', 200)
}


describe ('DeleteQuiz', function() {
   it('Deletes_multiple_choice_question', function() {
      login()
   
      cy.viewport(1366, 625)
   
      cy.visit('http://localhost:3000/ShowQuestions/Test')
   
      cy.get('#root > div > .flex > .mt-8 > .rounded:nth-child(1)').click()
   
      cy.get(':nth-child(1) > .flex > .bg-red-500').click()
      // assert that the question is deleted
      cy.get('.mt-8 > :nth-child(2) > .bg-white').should('not.exist')
   
   })
it('deletes_quiz_using_teacher_account', function() {
      
   login()
       cy.viewport(1366, 625)
    
       cy.visit('http://localhost:3000/ManageQuizzes')
    
       cy.get('body > #root > div > .flex').click()
    
       cy.get('div:nth-child(4) > .flex > .p-2 > svg > path').click()
 
       // assert that the there are only 3 quizzes
       cy.get('.flex > .flex-wrap > :nth-child(4)').should('not.exist')
       
 
    
    })
    
   })