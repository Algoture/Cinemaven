# Pro Tip : If you couldn't see movie data on our application during your first visit, give it a refresh and the data will be visible now.

# Cinemaven

  

Cinemaven is an innovative OTT (Over-The-Top) platform designed to revolutionize your movie and entertainment experience. With a vast library of movies, TV shows, and original content, Cinemaven brings the cinematic experience directly to your fingertips.

  

## Features

  

- **Extensive Library:** Access a diverse collection of movies and TV shows across various genres.

- **User Profiles:** Create multiple user profiles to cater to different tastes within your household.

- **Search and Filter:** Easily search for content and filter by genre, release date, and more.

- **Secured Authentication System:** Ensure user data protection with multi-factor authentication and encryption.

- **Wish List:** Allow users to create a wish list of movies and TV shows they plan to watch later.

  

## Installation Instructions
## Check list

Before setting up the app, ensure you have:
- Node.js >= 18
- Firebase Account
- MongoDB Account
  

### Clone the Repository

  

Clone the Cinemaven repository to your local directory:

  

```bash

git clone https://github.com/Algoture/Cinemaven.git

```

  

### Client Setup

Navigate to the client folder:

```bash

cd Cinemaven/client

```

Install client dependencies:

```bash

npm install

```

  

#### Create a `.env` file in the `client` root directory with the following variables:

  

```
# Required: Your Firebase API Key
VITE_API_KEY =

# Required: Your Firebase auth domain
VITE_AUTH_DOMAIN =

# Required: Your firebase project id
VITE_PROJECT_ID = 

# Required: Your firebase messaging sender id
VITE_MESSAGING_SENDER_ID = 

# Required: Your firebase app id
VITE_APP_ID = 

# Required: Your firebase measurement id
VITE_MEASUREMENT_ID = 

```
Start the client application:

```bash

npm run dev

```


### Server Setup

Navigate to the server folder:

```bash

cd ../server

```

Install server dependencies:

```bash

npm install

```
#### Create a `.env` file in the `server` root directory with the following variables:

```
# Required: Assign any port number 
PORT=

# Required: Your MongoDB Cluster URI
MONGO_URI=

```

Start the server application:

```bash

npm start

```

  

## Usage

1. **Sign Up or Log In:**

- Create an account or log in to your existing account.

2. **Browse Content:**

- Explore the vast library of movies and TV shows.

3. **Add to Wish List:**

- Save your favorite movies to your wish list for easy access later.

4. **Watch Content:**

- Click on a title to start watching immediately.
