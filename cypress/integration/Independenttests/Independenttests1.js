import { Given , Then , When} from 'cypress-cucumber-preprocessor/steps';

import Independenttests1Page from '../PageObjects/Independenttests1Page';

import '../support/commands';

const independenttests1Page = new Independenttests1Page();

//test steps 
Given('I am on the Independent newspaper website ', () => {
    cy.visitUrl2();
});

When ('I click the green agree button in the privacy options prompt', () => {
    independenttests1Page.clickGreenAgreeButton();
})

When ('I click on Log In and Register in the top right corner', () => {
    independenttests1Page.clickLoginAndRegister();
})

When ('I click the register button', () => {
    independenttests1Page.clickRegisterButton();
})

When ('I click on my truncated name in the top right corner', () => {
    independenttests1Page.clickTopRightCornerTruncatedName();
})

When ('I am redirected to the login page', () => {
    independenttests1Page.verifyLoginPage();
})

When ('I am redirected to the profile page', () => {
    independenttests1Page.verifyProfilePage();
})

When ('I am redirected to the home page', () => {
    independenttests1Page.verifyHomePage();
})

When('user populates the username and password fields', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputUsername().type(row.Username);
    independenttests1Page.getInputPassword().type(row.Password);
 })
})

When('user populates with invalid username and correct password', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputUsername().type(row.Username);
    independenttests1Page.getInputPassword().type(row.Password);
 })
})

When('user populates with valid username and incorrect password', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputUsername().type(row.Username);
    independenttests1Page.getInputPassword().type(row.Password);
 })
})

When('user populates the field with invalid email', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterEmail().type(row.Email);
 })
})

When('user populates the field with invalid email', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterEmail().type(row.Email);
 })
})

When('user adds a special character to firstname', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterFirstname().type(row.Firstname);
 })
})

When('user adds a special character to lastname', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterLastnamel().type(row.Lastname);
 })
})

When('user adds password with lower case letters', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with upper case letters', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with only numbers', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with less than six characters', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds existing email', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterEmail().type(row.Email);
 })
})

When('user populates all the mandatory fields', datatable => {
    datatable.hashes().forEach(row => {
    independenttests1Page.getInputRegisterEmail().type(row.Email);
    independenttests1Page.getInputRegisterFirstname ().type(row.Firstname);
    independenttests1Page.getInputRegisterLastname().type(row.Lastname);
    independenttests1Page.getInputRegisterPassword().type(row.Password);
 })
})

When ('I click the login button', () => {
    independenttests1Page.clickLoginButton();
})

When ('I select year of birth', () => {
    independenttests1Page.selectYearofBirth();
})

When ('I tick receive offer checkbox', () => {
    independenttests1Page.checkReceiveOfferBox();
})

When ('I click to open the opt-out policy', () => {
    independenttests1Page.clickOptOutPolicyToOpen();
})

When ('I click to close the opt-out policy', () => {
    independenttests1Page.clickOptOutPolicyToClose();
})

When ('I click create my account button', () => {
    independenttests1Page.clickCreateAccountButton();
})

When ('I click the logout button at the bottom of the left menu', () => {
    independenttests1Page.clickLogoutButton();
})

Then ('I should be automatically returned to the article page', () => {
    independenttests1Page.verifyArticlePage();
})

Then ('I check successful registration confirmation message', () => {
    independenttests1Page.verifyRegistrationSuccessMessage();
})

Then ('I should be redirected to the thank you page', () => {
    independenttests1Page.verifyThankyouPage();
})

Then ('I should see correct email field error message', () => {
    independenttests1Page.verifyEmailLoginPageErrorMessage();
})

Then ('I should see correct password error message', () => {
    independenttests1Page.verifyPasswordLoginPageErrorMessage();
})

Then ('I should see correct registration page email field error message', () => {
    independenttests1Page.verifyEmailRegisterPageErrorMessage();
})

Then ('I should see correct registration page firstname field error message', () => {
    independenttests1Page.verifyFirstnameRegisterPageErrorMessage();
})

Then ('I should see correct registration page lastname field error message', () => {
    independenttests1Page.verifyLastnameRegisterPageErrorMessage();
})

Then ('I should see correct registration page email already exist error message', () => {
    independenttests1Page.verifyEmailExistRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests1Page.verifyLessThanSixCharactersPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests1Page.verifyNumbersOnlyPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests1Page.verifyUpperLettersPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttests1Page.verifyLowerLettersPasswordRegisterPageErrorMessage();
})

Then ('I clear the data', () => {
    independenttests1Page.deleteData();
})

Then ('I clear cookies', () => {
    independenttests1Page.deleteCookies();
})

When ('the Log In and Register button should be replaced with my truncated name', () => {
    independenttests1Page.verifyLoginAndRegisterButton();
})

When ('my truncated name should be replaced with the Log in and Register button', () => {
    independenttests1Page.verifyLoginAndRegisterButtonTruncatedName();
})

When ('the loggedIn cookie should be set to true', () => {
    independenttests1Page.verifyLoggedInCookie();
})
