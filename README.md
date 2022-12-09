## CourtsManager

CourtsManager is a web application that allows you to manage your padel courts.

### Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create docker containers with `docker-compose up -d`
4. Create rabbitmq queues with `npm run command:courts_manager:rabbitmq`
5. Test the application with `npm run test`
6. Create bundle with `npm run build`
7. Start the application with `npm run start`

### Development

1. Create integration tests with cucumber to test endpoint works, in `tests/apps/CourtsManager/backend/features` folder you can find some examples of integration tests with cucumber and jest to test endpoint works.

* Create new test with name (get, post, put, delete) + "-"  + (resource).feature

* In folder `steps_definition` you can find the steps to test the endpoint works

2. Create unit tests with jest to test business logic

