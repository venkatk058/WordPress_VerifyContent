/// <reference types="cypress" />



//Suite - contains tests to test if blogs updates are correct
describe("Test Suite - BlogDataCreationAndVerify",function(){

before(function(){
    cy.fixture('example').then(function(data){
        this.data = data
    })
})



        //Test - contains tests to test if blogs updates are correct
        it("Test Case - BlogDataCreationAndVerifyTest",function(){

        
            cy.login_WordPress(this.data.username,this.data.password)

            cy.NavigateToNewPost_WordPress()

            cy.CreateHeaderPost_WordPress()

            cy.CreateDescribtionPost_WordPress()

            cy.VerifyHeaderPost_WordPress()

            cy.VerifyDatePost_WordPress()

            cy.VerifyBulletDescribtionPost_WordPress()        
            

        })
    })
