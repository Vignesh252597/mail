@f0
Feature: Login
  user wants to login

  Background: User is at homepage trying to login
    Given user is on homepage

  @f0n
  Scenario Outline: user tries invalid login
    When user provides invalid credentials "<uname>" "<upass>"
    And user clicks on login button
    Then validation messege appears

    Examples: 
      | uname | upass   |
      | abcde | pass12  |
      | abcfe | pass123 |

  @f0p
  Scenario Outline: user tries valid login
    When user provides valid credentials "<uname>" "<upass>"
    And user clicks on login button
    Then user navigates to profile "<profile>" homepage

    Examples: 
      | uname | upass   | profile     |
      | new0  | pass123 | New Learner |
