class CreatePost{

   
    
    clickPostButton(){
        const field = cy.get("a > span.dashicons-admin-post")
        field.click()
        return this
    }

    clickNewPostButton(){
        const field =  cy.get(".section-header__actions > a")
        field.click()
        return this
    }


    createHeaderPost(){
        const field =  cy.get('iframe.is-loaded')
        field.then($iframe => {
            const body = $iframe.contents().find('body  div.block-editor-writing-flow > div.edit-post-visual-editor__post-title-wrapper > h1')
            cy.wrap(body).type('Sun Bus Tickets',{force: true})
          })
        return this 
    }

    createDescribtionPost(){
        const field =  cy.get('iframe.is-loaded')
        field.then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).click().type('Date ::'+ new Date() + '{enter}'
            +'SunBus is the largest e-ticketing platform globally, with more than 23 million users and over 180 million bus tickets sold worldwide.'
            +'Diwali 2021 is just around the corner and RSRTC buses, with their awesome services, are ready to take you to your desired destinations. Book today!'
            + '{enter}')
          })

          
        return this 
    }


    createBulletDescribtionPost(){
        const field =  cy.get('iframe.is-loaded')
        field.then($iframe => {
            const body = $iframe.contents().find('body  div.block-editor-writing-flow >div.block-editor-block-list__layout > p:nth-child(3)')
            cy.wrap(body).click()
            .type('\u2022 Bus Tickets \n'+
                   ' SunBus offers online bus tickets booking option and also...'
                   +'\n \u2022 Print/Sms Ticket \n'+
                   ' Indias No #1 Bus Ticket Booking Company, Volvo, AC and ......'+
                    '                                                              '+
                   '\n \u2022 Offers \n'+
                   ' Offers: Bus Offers & Coupon Codes | Grab Discount on Bus...')
          })

           
        

        return this 
    }
    

    
    verifyTitle(strTitleText){
        cy.title().should('eq',strTitleText)
        return this
    }
    
    clickNewPostCreation(){
      
        this.clickPostButton()
        this.clickNewPostButton()
        cy.wait(15000)   
        //this.VerifyTitle('My Home ‹ SunCoupons — WordPress.com')
        return this
    }



    
    
    }
    
    export default CreatePost