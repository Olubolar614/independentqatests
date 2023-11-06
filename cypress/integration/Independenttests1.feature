Feature: Independent website e2e tests

Scenario: User logs out on independent newspaper website
Given I am on the Independent newspaper website 
When I click the green agree button in the privacy options prompt
And user populates the username and password fields
| Username              |Password     |
| cypress.test@gmail.com| Qwerty12345 |
And I click on my truncated name in the top right corner
And I am redirected to the profile page 
And I click the logout button at the bottom of the left menu
Then I should be redirected to the home page 
And my truncated name should be replaced with the Log in and Register button
Then I clear cookies
