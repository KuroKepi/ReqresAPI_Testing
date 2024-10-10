Reqres API Testing

Project Overview
This project is a technical skills assessment focusing on testing various API endpoints provided by the Reqres API (https://reqres.in/). The API endpoints are tested using HTTP requests to validate different scenarios, including retrieving users, and testing registration functionalities.

Project Structure
The project is organized as follows:

1. scripts/reqresApiTests.mjs: This file contains the test scripts for the Reqres API.
2. package.json: This file contains the project dependencies and scripts.

API Endpoints Tested
The following scenarios are covered in this assessment:

1. Get User from Page 3: Retrieve a list of users on the third page.
2. Get Single User with ID 10: Fetch data for a specific user by ID.
3. Register Successful: Register a user with valid credentials.
4. Register Failed: Attempt to register a user without providing a password to simulate a failure scenario

Project Setup
Prerequisites
To run the tests, you will need:
1. Node.js and npm installed (for JavaScript testing)
2. Mocha and Chai installed (for testing framework and assertion library)

Installation
1. Clone the repository:
   git clone https://github.com/KuroKepi/reqres-api-testing.git
2. Navigate to the project directory:
   cd reqres-api-testing
3. Install dependencies:
   npm install
4. Run the tests:
   npx mocha scripts/reqresApiTests.mjs

Result
The tests will be executed, and the results will be displayed in the console.

Contributing
If you have any suggestions or improvements, please feel free to submit a pull request.

License
This project is licensed under the MIT License.

