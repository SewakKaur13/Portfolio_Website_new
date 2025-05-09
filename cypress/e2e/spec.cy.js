//^ True Test case
/*describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})*/



//^ False Test case
/*describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})*/


//^ Visit method help to visit the website 
/*describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})*/


//^ Contains method help to check the certain element or text  is present there not
/*describe('My First Test',()=>{
  it('finds the content "type"',()=>{
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})*/

//^ Click method help to click the element
/*describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})*/


//^ should method helps to see the the element contains it and include is the condition to check the element present in it
/*describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})*/

//^ Get method helps to element get serached by the Id or by tag name and the have.value is the condition that fills vakue in that element 
/*describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')
    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})*/


//^ Portfolio Website Test Cases
/*describe('Portfolio Website Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/frontend/index.html');
  });

  it('should load the homepage', () => {
    cy.contains('My Portfolio').should('exist');
  });

  it('should navigate to About section', () => {
    cy.get('a.footer__link').contains('About').click();
    cy.url().should('include', '#about');
  });

  it('should display recent works', () => {
    cy.get('#work').should('be.visible');
    cy.get('.work__card').its('length').should('be.gte', 1);
  });

  it('should filter projects by type', () => {
    cy.get("[data-filter='.web']").click();
    cy.get('.work__card.mix.web').should('be.visible');
  });

  it('should show contact info', () => {
    cy.get('#contact').scrollIntoView();
    cy.get('.contact__card-data').should('contain.text', '@'); 
  });
});*/

describe('AIP Aerzen - Telephone Book Search', () => {
  beforeEach(() => {
    cy.visit('https://aip.aerzen.com/phone/index');
  });

  it('should search by name in telephone index', () => {
    cy.get('#userNameTextbox').type('alex');
    cy.wait(2000);
    cy.get('.post-body').its('length').then((count) => {
      cy.log(`Number of cards: ${count}`);
    });
  });

  it('should search by telephone number in telephone index', () => {
    cy.get('#telephoneNumberTextbox').type('+91');
    cy.wait(2000);
    cy.get('.post-body').its('length').then((count) => {
      cy.log(`Number of cards: ${count}`);
    });
  });

  it('should search', () => {
    cy.get('[data-rd-navbar-toggle=".rd-navbar-search"]').click(); 
    cy.get('input[name="q"]').first().type('aerzen{enter}'); 
  });
  
});




