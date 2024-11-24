# Reservation-App-React-Native
==========================
Status - In development

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



# Backend

The backend is built with Node.js and Express.js. It uses a MongoDB database to store reservations.
Includes 
- crud applications
    fetch, post, forms, files.

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

#### Hostel Data
For pre-entered Room information 
Open your terminal and navigate to the root directory of your project.
Run the script using Node.js:

```
node scripts/importData.js
```

After running the script, you should see a message indicating that the data was imported successfully. You can verify the data in your MongoDB database using a MongoDB client (like MongoDB Compass) or by querying the database through your application.

This data can by customized in `data/hostelData.json`

# Frontend

The frontend is built with React Native. It uses the Expo framework to manage dependencies and build the app
Styling 
- NativeWind
- Custom Stylesheet

## Setup
Ensure the `package.json` is setup to use the same port you setup in your `backend/.env` as the server.js by changing 
```
"proxy" : "http://localhost:5000/"
```

# References

https://www.youtube.com/watch?v=ZBCUegTZF7M

https://youtu.be/Y0Xep9cnxyY?si=RxO1qDYmfjbTS7Kp



Images
https://www.pexels.com


Styling
https://www.youtube.com/watch?v=TtmWw0NfsQk