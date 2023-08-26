Feature: Addition
  In order to verify that addition works correctly
  As a developer
  I want to test the addition function

  Scenario: Add two positive numbers
    Given I have entered 5 into the calculator
    And I have entered 3 into the calculator
    When I press add
    Then the result should be 8 on the screen

  Scenario: Add positive and negative numbers
    Given I have entered 10 into the calculator
    And I have entered -7 into the calculator
    When I press add
    Then the result should be 3 on the screen
