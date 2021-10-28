class LoginPage{

visit(){
    cy.visit("https://wordpress.com/home/suncoupons.wordpress.com")
 return this
}

fillUsername(value){
    const field = cy.get("#usernameOrEmail")
    field.clear()
    field.type(value)
    return this
}

fillPassword(value){
    const field = cy.get("#password")
    field.clear()
    field.type(value)
    return this
}

clickButton(){
    const field = cy.get("div.login__form-action > button") //cy.get(fieldName)
    field.click()
    return this
}

VerifyTitle(strTitleText){
    cy.title().should('eq',strTitleText)
    return this
}

login_WordPressAppl(uname,pwd){
    this.visit()
    this.VerifyTitle('Log In — WordPress.com')
    this.fillUsername(uname)
    this.clickButton()
    this.fillPassword(pwd)
    this.clickButton()
    cy.wait(10000)   
    this.VerifyTitle('My Home ‹ SunCoupons — WordPress.com')
    return this
}


}

export default LoginPage