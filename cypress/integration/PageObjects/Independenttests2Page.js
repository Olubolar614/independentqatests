import "cypress-iframe"


export default class Independenttests2Page {
   
    getInputUsername () {
        return cy.get('#login-form-email');
    }
    
    getInputPassword () {
        return cy.get('#login-form-password');
    }

    getInputRegisterEmail () {
        return cy.get('input[data-tracking-name="Email"]');
    }

    getInputRegisterFirstname () {
        return cy.get('input[data-tracking-name="First Name"]')
    }

    getInputRegisterLastname () {
        return cy.get('input[data-tracking-name="Last Name"]');
    }

    getInputRegisterPassword () {
        return cy.get('input[data-tracking-name="Password"]');
    }

    clickGreenAgreeButton () {
       return cy.iframe('#sp_message_iframe_849879').find('button[title="AGREE"][aria-label="AGREE"]').should('be.visible').click()
    }

    clickLoginAndRegister () {
        return cy.contains('Log in / Register').click();
    }

    clickTopRightCornerTruncatedName () {
        return cy.contains('div', 'A. QA Test').click();
    }
    
    verifyLoginPage () {
        return cy.url().should('eq', 'https://www.independent.co.uk/login?regSourceMethod=login%20overlay'); 
    }

    verifyProfilePage () {
        return cy.url().should('eq', 'https://www.independent.co.uk/profile'); 
    }

    verifyHomePage () {
        return cy.url().should('eq', 'https://www.independent.co.uk/'); 
    }

    clickLoginButton () {
        return cy.get('span.btn-text').should('contain', 'Submit').click().wait(3000);
    }

    clickLogoutButton () {
        return  cy.get('#Logout').click().wait(3000);   
    }

    clickRegisterButton () {
        return cy.get('a#registerLink:contains("Register")').click().wait(3000);   
    }

    clickCreateAccountButton () {
        return cy.get('button[name="register-form-submit"][type="button"]').contains('Create my account').click();
    }

    verifyArticlePage () {
        return cy.url().should('eq', 'https://www.independent.co.uk/extras/indybest/gadgets-tech/video-games-consoles/nintendo-switch-2-price-release-date-rumours-b2386412.html?loginSuccessful');
    }

    verifyLoginAndRegisterButton () {
        return cy.get('div[amp-access-template=""]').should('contain', 'A. QA Test');    
    }

    verifyLoginAndRegisterButtonTruncatedName () {
        return cy.contains('Log in / Register').should('be.visible');    
    }  

    verifyLoggedInCookie () {
        return cy.getCookie('loggedIn').should('have.property', 'value', 'true');
    }

    deleteCookies () {
        return cy.clearCookies();
    }

    deleteData () {
        return cy.clearLocalStorage()
    }

    verifyRegistrationSuccessMessage () {
        return cy.get('h1.sc-1i8gkbd-1.dVJPqB').should('contain.text', 'Thanks');
    }

    verifyEmailLoginPageErrorMessage () {
        return cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain.text', 'Please enter a valid email address');
    }

    verifyEmailRegisterPageErrorMessage () {
        return cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain.text', 'Please enter a valid email address'); 
    }

    verifyFirstnameRegisterPageErrorMessage () {
         return cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain', "Special characters aren't allowed");
    }

    verifyLastnameRegisterPageErrorMessage () {
        return cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain', "Special characters aren't allowed"); 
    }

    verifyPasswordRegisterPageErrorMessage () {
        return cy.get('p.sc-slrdna-2.cOkjCJ').should('contain.text', "Email and password don't match");  
    }

    verifyEmailExistRegisterPageErrorMessage () {
        cy.get('p.sc-1097j05-0.bgpAYU').should('contain.text', 'This account already exists. Please enter your password to log in.');
    }

    verifyLessThanSixCharactersPasswordRegisterPageErrorMessage () {
        cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain.text', 'Must be at least 6 characters, include an upper and lower case character and a number');
    }

    verifyNumbersOnlyPasswordRegisterPageErrorMessage () {
        cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain.text', 'Must be at least 6 characters, include an upper and lower case character and a number');
    }

    verifyUpperLettersPasswordRegisterPageErrorMessage () {
        cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain.text', 'Must be at least 6 characters, include an upper and lower case character and a number');
    }

    verifyLowerLettersPasswordRegisterPageErrorMessage () {
        cy.get('p.sc-1letmz5-0.iEAXbK.csr-error-message').should('contain.text', 'Must be at least 6 characters, include an upper and lower case character and a number');
    }

    verifyThankyouPage () {
        return cy.url().should('eq', 'https://www.independent.co.uk/thank-you');
    }

    selectYearofBirth () {
        return cy.get('select[id="reg-form-birthYear"]').select('1992');
    }

    checkReceiveOfferBox () {
        return cy.get('input[type="checkbox"][id="form-receive-offer"]').check();
    }
   
    clickOptOutPolicyToOpen () {
        return cy.get('svg.sc-1xhotay-0.sc-avn6pc-0.dGXKTm').find('path[fill="#7A7A7A"][fill-rule="nonzero"]').click();
    }

    clickOptOutPolicyToClose () {
        return cy.get('svg.sc-1xhotay-0.sc-avn6pc-0.dGXKTm.liHeac').find('path[fill="#7A7A7A"][fill-rule="nonzero"]').click()
    }

}
