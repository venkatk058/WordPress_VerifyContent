import LoginPage from '../integration/pageobjects/LoginPage'
import CreatePost from '../integration/pageobjects/CreatePost'
import VerifyPost from '../integration/pageobjects/VerifyPost'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



//Login WordPress
Cypress.Commands.add('login_WordPress', (username, password) => {
   const lp = new LoginPage()
   
    lp.login_WordPressAppl(username,password)
    

 })

 //NavigateToNewPost_WordPress
Cypress.Commands.add('NavigateToNewPost_WordPress', () => {
    const cp = new CreatePost()
    
     cp.clickNewPostCreation()
     
 
  })

   //CreateHeaderPost_WordPress
Cypress.Commands.add('CreateHeaderPost_WordPress', () => {
    const cp = new CreatePost()
    
     cp.createHeaderPost()
     
 
  })


  //CreateHeaderPost_WordPress
Cypress.Commands.add('CreateDescribtionPost_WordPress', () => {
    const cp = new CreatePost()
    
     cp.createDescribtionPost()

     cp.createBulletDescribtionPost()
     
 
  })



    //CreateHeaderPost_WordPress
Cypress.Commands.add('VerifyHeaderPost_WordPress', () => {
    const vp = new VerifyPost()
    
     vp.VerifyHeaderPost()
     
 
  })

      //CreateHeaderPost_WordPress
Cypress.Commands.add('VerifyHeaderPost_WordPress', () => {
    const vp = new VerifyPost()
    
     vp.VerifyHeaderPost()
     
 
  })



      //VerifyDatePost_WordPress
Cypress.Commands.add('VerifyDatePost_WordPress', () => {
    const vp = new VerifyPost()
    
     vp.VerifyDatePost()
     
 
  })


        //VerifyBulletDescribtionPost
Cypress.Commands.add('VerifyBulletDescribtionPost_WordPress', () => {
    const vp = new VerifyPost()
    
     vp.VerifyBulletDescribtionPost()
     
 
  })
