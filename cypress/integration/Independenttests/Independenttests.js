import { Given , Then , When} from 'cypress-cucumber-preprocessor/steps';

import IndependenttestsPage from '../PageObjects/IndependenttestsPage';

const independenttestsPage = new IndependenttestsPage();

//test steps 
Given('I am on the article page', () => {
    cy.visitUrl1();
});

When ('I click the green agree button in the privacy options prompt', () => {
    independenttestsPage.clickGreenAgreeButton();
})

When ('I click on Log In and Register in the top right corner', () => {
    independenttestsPage.clickLoginAndRegister();
})

When ('I click the register button', () => {
    independenttestsPage.clickRegisterButton();
})

When ('I click on my truncated name in the top right corner', () => {
    independenttestsPage.clickTopRightCornerTruncatedName();
})

When ('I am redirected to the login page', () => {
    independenttestsPage.verifyLoginPage();
})

When ('I am redirected to the profile page', () => {
    independenttestsPage.verifyProfilePage();
})

When ('I am redirected to the home page', () => {
    independenttestsPage.verifyHomePage();
})

When('user populates the username and password fields', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputUsername().type(row.Username);
    independenttestsPage.getInputPassword().type(row.Password);
 })
})

When('user populates with invalid username and correct password', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputUsername().type(row.Username);
    independenttestsPage.getInputPassword().type(row.Password);
 })
})

When('user populates with valid username and incorrect password', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputUsername().type(row.Username);
    independenttestsPage.getInputPassword().type(row.Password);
 })
})

When('user populates the field with invalid email', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterEmail().type(row.Email);
 })
})

When('user populates the field with invalid email', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterEmail().type(row.Email);
 })
})

When('user adds a special character to firstname', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterFirstname().type(row.Firstname);
 })
})

When('user adds a special character to lastname', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterLastnamel().type(row.Lastname);
 })
})

When('user adds password with lower case letters', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with upper case letters', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with only numbers', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds password with less than six characters', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterPassword().type(row.Password);
 })
})

When('user adds existing email', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterEmail().type(row.Email);
 })
})

When('user populates all the mandatory fields', datatable => {
    datatable.hashes().forEach(row => {
    independenttestsPage.getInputRegisterEmail().type(row.Email);
    independenttestsPage.getInputRegisterFirstname ().type(row.Firstname);
    independenttestsPage.getInputRegisterLastname().type(row.Lastname);
    independenttestsPage.getInputRegisterPassword().type(row.Password);
 })
})

When ('I click the login button', () => {
    independenttestsPage.clickLoginButton();
})

When ('I select year of birth', () => {
    independenttestsPage.selectYearofBirth();
})

When ('I tick receive offer checkbox', () => {
    independenttestsPage.checkReceiveOfferBox();
})

When ('I click to open the opt-out policy', () => {
    independenttestsPage.clickOptOutPolicyToOpen();
})

When ('I click to close the opt-out policy', () => {
    independenttestsPage.clickOptOutPolicyToClose();
})

When ('I click create my account button', () => {
    independenttestsPage.clickCreateAccountButton();
})

When ('user clears username input field', () => {
    independenttestsPage.clearInputUsername();
})

When ('user clears password input field', () => {
    independenttestsPage.clearInputPassword();
})

When ('I click the logout button at the bottom of the left menu', () => {
    independenttestsPage.clickLogoutButton();
})

Then ('I should be automatically returned to the article page', () => {
    independenttestsPage.verifyArticlePage();
})

Then ('I check successful registration confirmation message', () => {
    independenttestsPage.verifyRegistrationSuccessMessage();
})

Then ('I should be redirected to the thank you page', () => {
    independenttestsPage.verifyThankyouPage();
})

Then ('I should see correct email field error message', () => {
    independenttestsPage.verifyEmailLoginPageErrorMessage();
})

Then ('I should see correct password error message', () => {
    independenttestsPage.verifyPasswordLoginPageErrorMessage();
})

Then ('I should see correct registration page email field error message', () => {
    independenttestsPage.verifyEmailRegisterPageErrorMessage();
})

Then ('I should see correct registration page firstname field error message', () => {
    independenttestsPage.verifyFirstnameRegisterPageErrorMessage();
})

Then ('I should see correct registration page lastname field error message', () => {
    independenttestsPage.verifyLastnameRegisterPageErrorMessage();
})

Then ('I should see correct registration page email already exist error message', () => {
    independenttestsPage.verifyEmailExistRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttestsPage.verifyLessThanSixCharactersPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttestsPage.verifyNumbersOnlyPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttestsPage.verifyUpperLettersPasswordRegisterPageErrorMessage();
})

Then ('I should see correct registration page password field error message', () => {
    independenttestsPage.verifyLowerLettersPasswordRegisterPageErrorMessage();
})

Then ('I clear the data', () => {
    independenttestsPage.deleteData();
})

Then ('I clear cookies', () => {
    independenttestsPage.deleteCookies();
})

When ('the Log In and Register button should be replaced with my truncated name', () => {
    independenttestsPage.verifyLoginAndRegisterButton();
})

When ('my truncated name should be replaced with the Log in and Register button', () => {
    independenttestsPage.verifyLoginAndRegisterButtonTruncatedName();
})

When ('the loggedIn cookie should be set to true', () => {
    independenttestsPage.verifyLoggedInCookie();
})
