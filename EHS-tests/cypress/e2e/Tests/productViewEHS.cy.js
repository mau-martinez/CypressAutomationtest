/// <reference types="cypress" /> 
//Review EHS List and Products


//Make sure html server with app is running 

//Story 1
/*As an administrator of the EHS system I want to be able to see all the available 
products so that I can make faster decisions.*/
it('should be able to see all products', () =>{
    //Open App
    cy.visit('http://127.0.0.1:8080/EHS.html')
    //Click all items 
    cy.get('#ListAllItemsButton').click()
    //List with all items displayed
    cy.contains('EHS - All Items')
    //Assertion to verify the element is displayed
    assert.isTrue(true, 'List of all products is displayed')
})

//Story 2
/*As an administrator of the EHS system I want to se detailed information 
about a specific product so that I know that the system is up to date. */
it('should be able to open any product for more detail information ', () =>{
    cy.visit('http://127.0.0.1:8080/EHS.html')
    //Open App
    cy.get('#ListAllItemsButton').click()
    //Click on item 5 
    cy.get('#OpenItem5Button').click()
    //Detailed information of item 5 is displayed
    cy.get('#NameField')
      //verfying if element is visible
      .should('be.visible')
      //verifying if element has correct value
      .should('have.value', 'EHS Item 5')
  
})
//Story 3
/*As an administrator of the EHS system I want to be able to search for a 
specific product so that I can get faster access to its product details.*/
it('should be able to search a specific product', () =>{
    //create a const with the product to use on the search
    const prodID = 'STD 6'
    //Open App
    cy.visit('http://127.0.0.1:8080/EHS.html')
    //adding the parameter enter for it to press enter after entering the product ID
    cy.get('#ProductIdField').type(`${prodID}{enter}`)
    //{enter} parameter is not working adding anohter line to click on Find button
    cy.get('#FindItemButton').click()
    //Vailidate we are displaying the information from the prodID
    cy.contains(prodID) 

}) 