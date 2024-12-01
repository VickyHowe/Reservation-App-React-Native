# Reservation-App-React-Native

Overview
------------
This is a simple reservation app built with React Native. It allows users to create, read, update
and delete reservations.


Robust Fullstack Mobile Application Including;
- signin
- signup


- reservation screen
    - reservation list
    - reservation details
    - reservation update
    - reservation delete
- user profile screen
    - user update
    - user delete
- full text search capability
- tab navigation for seamless browsing


## Setup


    - Clone the repository
    - cd into the backend
    - Install the required packages by running npm install in the project directory

```
npm install
```

- Create a `.env file` in the main project `backend` folder.

    for MONGODB_URI = mongodb://localhost:27017/yourdatabasehere As we are using a local database no password is required. Replace 'yourdatabasehere' with database name of choice.

    Fill in a Port for the project to run



MONGODB_URI = mongodb://localhost:27017/yourdatabasehere

PORT= REPLACE THIS WITH A PORT

#### Hostel Data
For pre-entered Room information 
Open your terminal and navigate to the root directory of your project.
Run the script using Node.js:

```
node scripts/importData.js
```

After running the script, you should see a message indicating that the data was imported successfully. You can verify the data in your MongoDB database using a MongoDB client (like MongoDB Compass) or by querying the database through your application.

This data can by customized in `data/hostelData.json`

#### Running the program

    Run npm start in the project directory/backend to start the server
```
npm start
```

    - cd into the frontend
    - Install the required packages by running npm install in the project directory

```
npm install
```
Create .env and place another .env and place it in the `frontend` folder

Get your IP address it should look like,

- For Android emulators, use http://10.0.2.2:5000/ to access your local server.
- For iOS simulators, you can use http://localhost:5000/.
- For physical devices, use your machine's local IP address (e.g., http://192.168.1.100:5000/).

Be sure the port matches the port chosen for the backend, default is set to 5000.

.env 
```
API_URL=<replace with IP address>:5000
```
    Run npm start in the project directory/frontend to start the server
```
npm start
```



# Backend


The backend is built with Node.js and Express.js. It uses a MongoDB database to store reservations.
Includes 
- crud applications
    fetch, post, forms, files.

#### For retrieving all rooms:

Route: /api/rooms/allRooms
Purpose: Fetches a list of all available rooms.

#### For retrieving a room by ID:

Route: /api/rooms/:id
Purpose: Fetches a specific room based on the provided ID.

#### For user registration:

Route: /api/users/register
Purpose: Allows new users to register.

#### For user login:

Route: /api/users/login
Purpose: Authenticates users and provides a session or token.

#### For creating a reservation:

Route: /api/reservations
Purpose: Allows users to create a new reservation.

#### For fetching reservations by user:

Route: /api/users/:userId/reservations
Purpose: Retrieves all reservations associated with a specific user.

## Scheema Overview

### roomSchema

#### Fields

- **room_name**: `String` (required) - The name of the room.
- **availability**: `Number` (required) - Number of available rooms.
- **description**: `String` (required) - A description of the room.
- **cost_per_night**: `Number` (required) - Cost of the room per night.
- **capacity**: `Number` (required) - Maximum number of occupants.
- **type**: `String` (required) - Type of room (e.g., semi-rivate, shared-dorm).
- **image_url**: `Array` - List of image URLs for the room.
- **current_bookings**: `Array` - List of current bookings for the room.



# Frontend

The frontend is built with React Native. It uses the Expo framework to manage dependencies and build the app
Styling 
- NativeWind






# Challenges
API communication between localhost and frontend
Time Management - this project took alot longer than the time I allotted, I will take this into consideration for future React Native Projects.





# References

https://www.youtube.com/watch?v=ZBCUegTZF7M

https://youtu.be/Y0Xep9cnxyY?si=RxO1qDYmfjbTS7Kp



Images
https://www.pexels.com


Styling
https://www.youtube.com/watch?v=TtmWw0NfsQk



