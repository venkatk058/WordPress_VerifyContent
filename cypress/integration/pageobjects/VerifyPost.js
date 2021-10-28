class VerifyPost{

    VerifyHeaderPost(){
        const field =  cy.get('iframe.is-loaded')
        field.then($iframe => {
            const body = $iframe.contents().find('body  div.block-editor-writing-flow > div.edit-post-visual-editor__post-title-wrapper > h1')
            cy.wrap(body).contains('Sun Bus Tickets')
          })
        return this 
    }

   VerifyDatePost(){
        const field =  cy.get('iframe.is-loaded')
        field.then($iframe => {
            const body = $iframe.contents().find('body  div.block-editor-writing-flow > div.block-editor-block-list__layout > p')
            cy.wrap(body).contains('Oct')
          })

          
        return this 
    }


    VerifyBulletDescribtionPost(){
        const field =  cy.get('iframe.is-loaded')
        field.then($iframe => {
            const body = $iframe.contents().find('body  div.block-editor-writing-flow >div.block-editor-block-list__layout > p:nth-child(3)')
            cy.wrap(body).contains('Bus Tickets')
        })
                 

        return this 
    }
    

    
    verifyTitle(strTitleText){
        cy.title().should('eq',strTitleText)
        return this
    }
    
    }
    
    export default VerifyPost