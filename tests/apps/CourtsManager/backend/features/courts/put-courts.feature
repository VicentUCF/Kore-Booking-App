Feature: Create a new Court
  In order to have Courts in the platform
  As a user with admin permissions
  I want to create a new Court

  Scenario: A valid non existing court
    Given I send a PUT request to "/courts" with body:
      """
      {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "name": "Naranja",
        "schedule": "Lunes a Viernes de 8:00 a 22:00"
      }
      """
    Then the response status code should be 201
    And the response should be empty


