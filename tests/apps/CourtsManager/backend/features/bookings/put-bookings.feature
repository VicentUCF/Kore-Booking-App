Feature: Create a new course
  In order to have courses in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing booking
    Given I send a PUT request to "/bookings/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
      """
      {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "courtId": "8c900b20-e04a-4777-9183-32faab6d2fb5",
        "date": "2019-08-08T08:37:32+00:00"
      }
      """
    Then the response status code should be 201
    And the response should be empty


