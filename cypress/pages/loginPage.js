// คลาส loginPage.js ใช้เพื่อจัดเก็บองค์ประกอบเว็บที่ใช้ในหน้าเข้าสู่ระบบ คำสั่ง Cypress 
//cy.get(locator) และcy.xpath() ใช้เพื่อรับตัวระบุตำแหน่งสำหรับองค์ประกอบของเว็บต่างๆ 
//ในหน้าเข้าสู่ระบบ จากนั้นเมธอดlogin() ใช้ตัวระบุตำแหน่งเหล่านี้เพื่อสร้างโฟลว์สำหรับการเข้าสู่ระบบ

class loginPage{
    // elements กำหนดตัวแปรเพื่อระบุ locator
    textUsername = "#username";
    textPassword = "#password";
    verifyUser = 'form > .text-white';
    verifyPage = 'h1';
    btnLogin = '.btn';
    btnLogout = '.btn-secondary';
    loginPass = 'h1';
    loginFail = '.alert';
   // function 
    inputUser(username){
        cy.get(this.textUsername).type(username)
    }
    inputPassword(password){
        cy.get(this.textPassword).type(password)
    }
    clickLogin(){
        cy.get(this.btnLogin).click();
    }
    verifyLogin(){
        cy.get(this.verifyPage).should('contain', 'Ace Toys Online Store')
        //cy.get(this.verifyUser).should('contain', 'Hi, ${username}')
    }
    clickLogout(){
        cy.get(this.btnLogout).click()
    }
    loginFailAlert(){
        cy.get(this.loginFail).should('contain', 'Invalid credentials')
    }
}
//เป็นการส่งออก (export) คลาสหรือโมดูล (module) ชื่อ loginPage
//พื่อให้โมดูลอื่นสามารถ import และใช้งานได้
export default loginPage;

