Feature: Create a new course
  In order to have courses in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing booking
    Given I send a PUT request to "/bookings" with body:
      """
      {
        "id": "d1d69c48-d202-42ab-a3b1-8598703a1b42",
        "user": {
          "id": "6d429106-50b8-49a2-8f6c-db2e946632a8",
          "name": "Paco",
          "email": "paco@gmail.com",
          "level": 3
        },
        "court": {
          "id": "92a5eb70-763c-4941-8c0c-2531fe175c58",
          "name": "Infilev",
          "schedule": "de mati"
        },
"date": "2019-08-08T08:37:32+00:00"
      }
      """
    Then the response status code should be 201
    And the response should be empty


