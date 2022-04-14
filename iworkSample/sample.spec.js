describe('Home Tests',()=>{
    it("open the home page and verify the url and the title",()=>{
    //open the home page
cy.visit('https://www.iworkplc.com/')

//assert the url
cy.url().should("include","iworkplc")
cy.title().should("eq","iWork Technologies | Cloud | Applications | Denver")

});
it('clicks the career button and asserts the value',()=>{
    //get the button and click
    cy.xpath('//p[@id="comp-l1uyxbgg4label"]').click();
    //assert the url
    cy.url().should("include","careers");
})




it('verifies the length and the text of all the menu link items',()=>{
    const menuLinkText=[
        "Software",
        "Pricing",
        "Blog",
        "About",
        "Careers",
        "Contact",
         "More"
     ];
       //this array should match exactly what we are getting back from out test
    

cy.get("#comp-l1uyxbggitemsContainer [id$=label")
.should('have.length',7)
.each(((item,index,list)=>{
    
   
     //we change the item to cypress element by using wrap
     cy.wrap(item).should('contain.text',menuLinkText[index])
     //other option to do this
     expect(Cypress.$(item).text()).to.eq(menuLinkText[index])

     }))


})
})