import loginDetails from '../fixtures/loginDetails.json'

const testUser = loginDetails.testAdmin

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


describe('Login_as_Teacher', function() {
   // start login

  it('Login_as_Teacher_using_test_account', function() {
 
     cy.viewport(1366, 625)
  
     cy.visit('http://localhost:3000/')
  
     cy.get('.hidden > :nth-child(1)').click()
  
      
     cy.get('.w-full > .bg-white > .space-y-4 > div > #email').type(testUser.email)
   
   
     cy.get('.w-full > .bg-white > .space-y-4 > div > #password').type(testUser.password)
  
     cy.get('.bg-green-500').click()
  
  cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0').as('LoginRedirect')
  cy.wait('@LoginRedirect').its('response.statusCode').should('eq', 200)
  cy.url().should('include', '/ManageQuizzes')
  // end login


  })
  it('Creates_quiz_using_teacher_account', function() {
   login()

   cy.viewport(1366, 625)

   cy.visit('http://localhost:3000/ManageQuizzes')

   cy.get('body > #root > div > .flex').click()

   cy.get('body > #root > div > .flex > .mt-8').click()

   cy.get('div > .flex > form > .block > .create-quiz').click()

   cy.get('div > .flex > form > .block > .create-quiz').type('Test')

   cy.get('div > div > .flex > form > .bg-blue-500').click()
   cy.wait(3000)
   // assert that the quiz was created
   cy.wait(1000)
   cy.get(':nth-child(4) > .p-6').should('be.visible')


})


it('Adds_written_answer_question', function() {
   login()

   cy.viewport(1366, 625)

   cy.visit('http://localhost:3000/ManageQuizzes')
   cy.wait(3000)
   cy.get('div > .flex > .flex > div:nth-child(4) > .p-6').click()
 
   cy.get('.flex-col > .flex > :nth-child(2)').click()

   cy.get('div > .flex > form > .block:nth-child(1) > .create-ow-question').type('How many states are in America?')

   cy.get('div > .flex > form > .block:nth-child(2) > .create-answer').type('50')

   cy.get('.bg-blue-500').click()
   cy.wait(3000)

   cy.get('#root > div > .flex > form > .btnBack').click()

   // assert that the question was created
   cy.get('.mt-8 > :nth-child(1) > .bg-white').should('be.visible')

})

})

describe('Multiple_choice', function() {

   it('Adds_mutltiple_choice_questions', function() {
  
      login()
      cy.viewport(1366, 625)
   
      cy.visit('http://localhost:3000/ShowQuestions/Test')
   
      cy.get('#root > div > .flex > .flex > .inline-flex:nth-child(1)').click()
   
      cy.get('div > .flex > form > .block:nth-child(1) > .h-10').click()
   
      cy.get('div > .flex > form > .block:nth-child(1) > .h-10').type('How many states are in America?')
   
      cy.get('div > .flex > form > .block:nth-child(2) > .h-10').click()
   
      cy.get('div > .flex > form > .block:nth-child(2) > .h-10').type('56')
   
      cy.get('div > .flex > form > .block:nth-child(3) > .h-10').click()
   
      cy.get('div > .flex > form > .block:nth-child(3) > .h-10').type('50')
   
      cy.get('div > .flex > form > .block:nth-child(4) > .h-10').click()
   
      cy.get('div > .flex > form > .block:nth-child(4) > .h-10').type('48')
   
      cy.get('div > .flex > form > .block:nth-child(5) > .h-10').click()
   
      cy.get('div > .flex > form > .block:nth-child(5) > .h-10').type('34')
   
      cy.get('div > .flex > form > .block:nth-child(6) > .h-10').click()
   
      cy.get('div > .flex > form > .block:nth-child(6) > .h-10').click()
   
      cy.get('div > .flex > form > .block:nth-child(6) > .h-10').type('50')
   
      cy.get('#root > div > .flex > form > .bg-blue-500').click()
      cy.wait(3000)
   
      cy.get('#root > div > .flex > form > .btnBack').click()

      // assert that the question was created
      // if failed changed to nth-child(2)
      cy.get('.mt-8 > :nth-child(2) > .bg-white').should('be.visible')
   
   })
  
  })
  

describe('Submit_quiz', function() {
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

   cy.get('div > .flex > .grid > .p-6:nth-child(4) > .block:nth-child(1)').click()

   cy.wait(3000)
   cy.get(':nth-child(4) > .mr-2').click()
   cy.get('.oneWord-question-input').type('5677')

   cy.get('body > #root > div > .min-h-screen > .bg-blue-500').click()
   cy.wait(3000)
   // no need to assert as the task is a repeat from the student task
   

   

})

it('Reviews_student_submission', function() {
   login()

   cy.viewport(1366, 625)

   cy.visit('http://localhost:3000/TeacherReviewSubmission/Test')
   cy.wait(1000)

   cy.get('body > #root > div > .flex').click()

   cy.get('.score-teacher').type('5')

   cy.get('.feedback-teacher').type('Correct Answer Well done!')
   cy.get('.bg-blue-500').click()
   
   // assert for alert
   cy.on('window:alert', (str) => {
     expect(str).to.equal('Mark has been submitted')
   })


})
})









  
 

  





  
 


 
 
 

 
 
 