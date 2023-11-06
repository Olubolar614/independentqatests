Feature: Independent website e2e tests

Scenario: User Registration on Independent Newspaper Website
Given I am on the Independent newspaper website 
When I click the green agree button in the privacy options prompt
And I click on Log in and Register in the top right corner
And I am redirected to the login page 
And I click the register button
And user populates all the mandatory fields
| Email                 |Firstname     |Lastname | Password      |
| shet14test@gmail      | Fenrhk       |  Adeqrin|    Hed@vrp82  |  
And I select year of birth       
And I tick receive offer checkbox
And I click to open the opt-out policy
And I click to close the opt-out policy
And I click create my account button
Then I check successful registration confirmation message
Then I should be redirected to the thank you page
Then I clear the data

Scenario: User registration unhappy path test 1
And user populates the field with invalid email
| Email                 |Firstname     |Lastname | Password      |
| kty@                  |              |         |               |
Then I should see correct registration page email field error message
Then I clear cookies

Scenario: User registration unhappy path test 2
And user adds a special character to firstname
| Email                 |Firstname     |Lastname | Password      |
|                       | Ad@rin       |         |               |  
Then I should see correct registration page firstname field error message
Then I clear cookies

Scenario: User registration unhappy path test 3
And user adds a special character to lastname
| Email                 |Firstname     |Lastname | Password      |
|                       |              |  Vde!gey|               |  
Then I should see correct registration page lastname field error message
Then I clear cookies

Scenario: User registration unhappy path test 4
And user adds password with lower case letters
| Email                 |Firstname     |Lastname | Password      |
|                       |              |         |    trekrindw  | 
Then I should see correct registration page password field error message
Then I clear cookies

Scenario: User registration unhappy path test 5
And user adds password with upper case letters
| Email                 |Firstname     |Lastname | Password      |
|                       |              |         |    DKWQNZYU   | 
Then I should see correct registration page password field error message
Then I clear cookies

Scenario: User registration unhappy path test 6
And user adds password with only numbers
| Email                 |Firstname     |Lastname | Password      |
|                       |              |         |  6154739      | 
Then I should see correct registration page password field error message
Then I clear cookies

Scenario: User registration unhappy path test 7
And user adds password with less than six characters
| Email                 |Firstname     |Lastname | Password      |
|                       |              |         |  Qwer2        | 
Then I should see correct registration page password field error message
Then I clear cookies

Scenario: User registration unhappy path test 8
And user adds existing email
| Email                   |Firstname     |Lastname | Password      |
| cypress.test@gmail.com  |              |         |               | 
Then I should see correct registration page email already exist error message
Then I clear cookies
