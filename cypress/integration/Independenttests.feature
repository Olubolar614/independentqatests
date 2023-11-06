Feature: Independent website e2e tests

Scenario: Login journey tests
Given I am on the article page  
When I click the green agree button in the privacy options prompt
And I click on Log In and Register in the top right corner
And I am redirected to the login page 
And user populates the username and password fields
| Username              |Password     |
| cypress.test@gmail.com| Qwerty12345 |
And I click the login button
Then I should be automatically returned to the article page 
And the Log In and Register button should be replaced with my truncated name
And the loggedIn cookie should be set to true
Then I clear cookies

Scenario: Login journey unhappy path tests
Given I am on the article page  
When I click the green agree button in the privacy options prompt
And I click on Log In and Register in the top right corner
And I am redirected to the login page 
And user populates with invalid username and correct password
| Username    |Password     |
| cypress.test| Qwerty12345 |
Then I should see correct email field error message
And user clears username input field
And user clears password input field
And user populates with valid username and incorrect password
| Username              |Password     |
| cypress.test@gmail.com| Qwer        |
And I click the login button
Then I should see correct password error message
Then I clear cookies
