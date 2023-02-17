import loginPage from "../pages/loginPage";
import transactionPage from "../pages/transactionPage";

describe('Use Page Object Model Pattern in Cypress for Home Page Test', () =>{
  //แบบที่ 1 ใช้ fixture นำเข้าข้อมูลผู้ใช้งานจาก file .json 
  it('TC1-Open Home Page - Check Basket - Select Product - Login and Ordered', () => {
      cy.visit("/")
      transactionPage.home();
      transactionPage.elements.verifyHomePage();
      transactionPage.basket();
      transactionPage.elements.checkBasket();
      transactionPage.allProduct();
      transactionPage.elements.clickAllproduct();
      //ส่วนนี้ยัง hard code อยู่
      transactionPage.addProductToBasket();
      transactionPage.elements.addToBasket();
      transactionPage.viewBasket();
      transactionPage.elements.clickViewBasket();
      // Login
      const ln = new loginPage();
      ln.inputUser("user1")
      ln.inputPassword("pass")
      transactionPage.loginToView();
      transactionPage.elements.clickLoginToView();
      transactionPage.cartOverview();
      transactionPage.elements.checkCartTotal();
      transactionPage.addQty();
      transactionPage.elements.addQuantity();
      transactionPage.verifyQtyTotal();
      transactionPage.elements.checkQuantityTotal();
      transactionPage.checkOut();
      transactionPage.elements.checkOutCart();
      // Verify Order Status
      transactionPage.orderStatus();
      transactionPage.elements.orderComplete();
      })

  it('TC2-Open Home Page - Check Basket - Select Product - Login and Clear Carted', () => {
        cy.visit("/")
        transactionPage.home();
        transactionPage.elements.verifyHomePage();
        transactionPage.basket();
        transactionPage.elements.checkBasket();
        transactionPage.allProduct();
        transactionPage.elements.clickAllproduct();
        //ส่วนนี้ยัง hard code อยู่
        transactionPage.addProductToBasket();
        transactionPage.elements.addToBasket();
        transactionPage.viewBasket();
        transactionPage.elements.clickViewBasket();
        // Login
        const ln = new loginPage();
        ln.inputUser("user1")
        ln.inputPassword("pass")
        transactionPage.loginToView();
        transactionPage.elements.clickLoginToView();
        transactionPage.cartOverview();
        transactionPage.elements.checkCartTotal();
        transactionPage.clearCart();
        transactionPage.elements.clearCartOverview();
        // Verify Basket
        transactionPage.basket();
        transactionPage.elements.checkBasket();
      })
  })