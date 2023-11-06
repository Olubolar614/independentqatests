import { Given , Then , When} from 'cypress-cucumber-preprocessor/steps';

import Independenttests2Page from '../PageObjects/Independenttests2Page';

import '../support/commands';

const independenttests2Page = new Independenttests2Page();

//test steps 
Given('I am on the Independent newspaper website ', () => {
    cy.visitUrl2();
});

When ('I click the green agree button in the privacy options prompt', () => {
    independenttests2Page.clickGreenAgreeButton();
})

When ('I click on Log In and Register in the top right corner', () => {
    independenttests2Page.clickLoginAndRegister();
})

When ('I click the register button', () => {
    independenttests2Page.clickRegisterButton();
})

When ('I click on my truncated name in the top right corner', () => {
    independenttests2Page.clickTopRightCornerTruncatedName();
})

When ('I am redirected to the login page', () => {
    independenttests2Page.verifyLoginPage();
})

When ('I am redirected to the profile page', () => {
    independenttests2Page.verifyProfilePage();
})

When ('I am redirected to the home page', () => {
    independenttests2Page.verifyHomePage();
})

When('user populates the username and password fields', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputUsername().type(row.Username);
    independenttests2Page.getInputPassword().type(row.Password);
 })
})

When('user populates with invalid username and correct password', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputUsername().type(row.Username);
    independenttests2Page.getInputPassword().type(row.Password);
 })
})

When('user populates with valid username and incorrect password', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputUsername().type(row.Username);
    independenttests2Page.getInputPassword().type(row.Password);
 })
})

When('user populates the field with invalid email', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterEmail().type(row.Email);
 })
})

When('user populates the field with invalid email', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterEmail().type(row.Email);
 })
})

When('user adds a special character to firstname', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterFirstname().type(row.Firstname);
 })
})

When('user adds a special character to lastname', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterLastnamel().type(row.Lastname);
 })
})

When('user adds password with lower case letters', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with upper case letters', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with only numbers', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with less than six characters', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds existing email', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterEmail().type(row.Email);
 })
})

When('user populates all the mandatory fields', datatable => {
    datatable.hashes().forEach(row => {
    independenttests2Page.getInputRegisterEmail().type(row.Email);
    independenttests2Page.getInputRegisterFirstname ().type(row.Firstname);
    independenttests2Page.getInputRegisterLastname().type(row.Lastname);
    independenttests2Page.getInputRegisterPassword().type(row.Password);
 })
})

When ('I click the login button', () => {
    independenttests2Page.clickLoginButton();
})

When ('I select year of birth', () => {
    independenttests2Page.selectYearofBirth();
})

When ('I tick receive offer checkbox', () => {
    independenttests2Page.checkReceiveOfferBox();
})

When ('I click to open the opt-out policy', () => {
    independenttests2Page.clickOptOutPolicyToOpen();
})

When ('I click to close the opt-out policy', () => {
    independenttests2Page.clickOptOutPolicyToClose();
})

When ('I click create my account button', () => {
    independenttests2Page.clickCreateAccountButton();
})

When ('I click the logout button at the bottom of the left menu', () => {
    independenttests2Page.clickLogoutButton();
})

Then ('I should be automatically returned to the article page', () => {
    independenttests2Page.verifyArticlePage();
})

Then ('I check successful registration confirmation message', () => {
    independenttests2Page.verifyRegistrationSuccessMessage();
})

Then ('I should be redirected to the thank you page', () => {
    independenttests2Page.verifyThankyouPage();
})

Then ('I should see correct email field error message', () => {
    independenttests2Page.verifyEmailLoginPageErrorMessage();
})

Then ('I should see correct password error message', () => {
    independenttests2Page.verifyPasswordLoginPageErrorMessage();
})

Then ('I should see correct registration page email field error message', () => {
    independenttests2Page.verifyEmailRegisterPageErrorMessage();
})

Then ('I should see correct registration page firstname field error message', () => {
    independenttests2Page.verifyFirstnameRegisterPageErrorMessage();
})

Then ('I should see correct registration page lastname field error message', () => {
    independenttests2Page.verifyLastnameRegisterPageErrorMessage();
})

Then ('I should see correct registration page email already exist error message', () => {
    independenttests2Page.verifyEmailExistRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests2Page.verifyLessThanSixCharactersPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests2Page.verifyNumbersOnlyPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests2Page.verifyUpperLettersPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests2Page.verifyLowerLettersPasswordRegisterPageErrorMessage();
})

Then ('I clear the data', () => {
    independenttests2Page.deleteData();
})

Then ('I clear cookies', () => {
    independenttests2Page.deleteCookies();
})

When ('the Log In and Register button should be replaced with my truncated name', () => {
    independenttests2Page.verifyLoginAndRegisterButton();
})

When ('my truncated name should be replaced with the Log in and Register button', () => {
    independenttests2Page.verifyLoginAndRegisterButtonTruncatedName();
})

When ('the loggedIn cookie should be set to true', () => {
    independenttests2Page.verifyLoggedInCookie();
})
