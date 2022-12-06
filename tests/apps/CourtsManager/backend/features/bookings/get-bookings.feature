Feature: Get bookings
  As a user with permissions
  I want to get bookings

  Scenario: All existing bookings
    When I send a GET request to "/bookings"
    Then the response status code should be 200
