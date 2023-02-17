class transactionPage{
    elements ={
        verifyHomePage:() => cy.get('h1'),
        checkBasket:() => cy.get('.cart > p'),
        clickAllproduct:() => cy.get('.list-group > :nth-child(1) > .nav-link'),
        addToBasket:() => cy.get(':nth-child(9) > [style="position: relative"] > p > .btn'),
        clickViewBasket:() => cy.get(':nth-child(3) > .btn-success'),
        clickLoginToView:() => cy.get('form > .btn'),
        checkCartTotal:() => cy.get('.col-8'),
        addQuantity:() => cy.get(':nth-child(3) > .btn-success'),
        checkQuantityTotal:() => cy.get('tbody > :nth-child(2) > :nth-child(3)'),
        checkOutCart:() => cy.get('.text-right > .btn'),
        orderComplete:() => cy.get('.col-6'),
        clearCartOverview:() => cy.get(':nth-child(1) > .btn'),
    }
    home (){
        this.elements.verifyHomePage().should('contain', 'Ace Toys Online Store')
    }
    basket(){
        this.elements.checkBasket().should('contain', 'Your cart is empty.')
    }
    allProduct(){
        this.elements.clickAllproduct().click();
    }
    addProductToBasket(){
        this.elements.addToBasket().click();
    }
    viewBasket(){
        this.elements.clickViewBasket().click();
    }
    loginToView(){
        this.elements.clickLoginToView().click();
    }
    cartOverview(){
        this.elements.checkCartTotal().should('contain', 'Cart Overview')
        this.elements.checkCartTotal().should('contain', 'Rabbit Model')
    }
    addQty(){
        this.elements.addQuantity().click();
        this.elements.addQuantity().click();
        this.elements.addQuantity().click();
    }
    verifyQtyTotal(){
        this.elements.checkCartTotal().should('contain', 'Cart Overview')
        this.elements.checkCartTotal().should('contain', 'Rabbit Model')
        this.elements.checkQuantityTotal().should('contain', '4')
    }
    checkOut(){
        this.elements.checkOutCart().click();
    }
    orderStatus(){
        this.elements.orderComplete().should('contain', 'Order complete!')
        this.elements.orderComplete().should('contain', 'Your products are on their way to you now!!')
    }
    clearCart(){
        this.elements.clearCartOverview().click();
    }
}
//export default transactionPage; 
module.exports = new transactionPage;
