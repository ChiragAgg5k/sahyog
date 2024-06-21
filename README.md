<div>
<img src="assets/1.png" alt="Logo">
<h1 align="center">Sahayog</h1>
</div>

Aim: use opal to create a very simple policy. there are rooms with one task board various users can work on. all the rooms are publically available to be seen by everyone. but only a user with writer access can access it. creator of a board is ofcourse the writer of the board. rest of the users need to be granted access by the writer.

![Rooms](assets/2.png)

## Demo Video

Check out the demo video here - https://youtu.be/GgHb1drMNyw

## Getting Started

You need to have the following installed on your machine:
1. Node.js
2. npm or yarn
3. Docker

- Clone the repository
    ```bash
    git clone
    ```
  
- Create `.env` file in the root of the project and add the following:
    ```bash
    DATABASE_URL=postgresql://postgres:password@localhost:5432/sahyog
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
    CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
    ```

- Install the dependencies
    ```bash
    npm install # or pnpm install
    ```

- Start your OPAL server. Clone the forked `sahayog-opal-cedar` repo from [here](https://github.com/ChiragAgg5k/sahyog-opal-cedar) and run the following commands:
    ```bash
    cd .. # go back to the parent directory
    git clone https://github.com/ChiragAgg5k/sahyog-opal-cedar.git
    cd opal-cedar
    docker-compose -f docker-compose.yml up
    ```
    
    This repo has the updated policy for the project, so make sure to clone this repo and not the original one.

- Start the development server
    ```bash
    npm run dev # or pnpm dev
    ```
  
- Open your browser and go to `http://localhost:3000`
