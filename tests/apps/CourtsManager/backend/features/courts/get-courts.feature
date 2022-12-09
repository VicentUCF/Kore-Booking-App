Feature: Get Courts
  As a user with permissions
  I want to get courts

  Scenario: All existing courts
    When I send a GET request to "/courts"
    Then the response status code should be 200
