import loginPage from "../pages/loginPage";

describe('Use Page Object Model Pattern in Cypress for Login Test', () =>{
    //แบบที่ 1 ใช้ fixture นำเข้าข้อมูลผู้ใช้งานจาก file .json 
    it('TC1-Login-Pass', () => {
        cy.visit("/login")
        cy.fixture('userData').then((data)=>{
            const ln = new loginPage();
            ln.inputUser(data.username)
            ln.inputPassword(data.password)
            ln.clickLogin();
            ln.verifyLogin();
            ln.clickLogout();
        })
    })
    //แบบที่ 2 กรอกข้อมูล username และ password ด้วยตัวเอง
    // กรอก username และ password ถูกต้อง และมีบัญชีผู้ใช้งานอยู่จริง
    it('TC2-Login-Pass', () => {
        cy.visit("/login")
        const ln = new loginPage();
        ln.inputUser("user1")
        ln.inputPassword("pass")
        ln.clickLogin();
        ln.verifyLogin();   //เข้าสู่ระบบสำเร็จ
    })
    // กรอก username ผิด และ password ถูก และไม่มีบัญชีผู้ใช้งาน
    it('TC3-Login-Fail-Username Invalid', () => {
        cy.visit("/login")
        const ln = new loginPage();
        ln.inputUser("helloCypress101")
        ln.inputPassword("pass")
        ln.clickLogin();
        ln.loginFailAlert();    //เข้าสู่ระบบไม่สำเร็จ มีแจ้งเตือน
    })
    // ไม่กรอก username และกรอก password ถูก และไม่มีบัญชีผู้ใช้งาน
    it('TC4-Login-Fail-Username is Empty', () => {
        cy.visit("/login")
        const ln = new loginPage();
        ln.inputUser(" ")
        ln.inputPassword("pass")
        ln.clickLogin();
        ln.loginFailAlert();    //เข้าสู่ระบบไม่สำเร็จ มีแจ้งเตือน
    })
    // กรอก username ถูก และกรอก password ผิด และไม่มีบัญชีผู้ใช้งาน
    it('TC5-Login-Fail-Password is Empty', () => {
        cy.visit("/login")
        const ln = new loginPage();
        ln.inputUser("user1")
        ln.inputPassword("1212312121")
        ln.clickLogin();
        ln.loginFailAlert();    //เข้าสู่ระบบไม่สำเร็จ มีแจ้งเตือน
    })
    // กรอก username ไม่ครบ และกรอก password ไม่ครบ 
    it('TC6-Login-Fail-Password Incomplete', () => {
        cy.visit("/login")
        const ln = new loginPage();
        ln.inputUser("use")
        ln.inputPassword("pas")
        ln.clickLogin();
        ln.loginFailAlert();    //เข้าสู่ระบบไม่สำเร็จ มีแจ้งเตือน
    })
    // กรอก username ผิด และกรอก password ผิด และไม่มีบัญชีผู้ใช้งาน
    it('TC7-Login-Fail-Username and Password Invalid', () => {
        cy.visit("/login")
        const ln = new loginPage();
        ln.inputUser("inn")
        ln.inputPassword("KKU")
        ln.clickLogin();
        ln.loginFailAlert();    //เข้าสู่ระบบไม่สำเร็จ มีแจ้งเตือน
    })
})











    // //General approach
    // it('LoginTest', () => {
    //     cy.visit("http://opensource-demo.orangehrmlive.com/")
    //     cy.get("input[placeholder='Username']").type("Admin")
    //     cy.get("input[placeholder='Password']").type("admin123")
    //     cy.get("button[type='submit']").click()
    //     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    // })
