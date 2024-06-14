<div>
<img src="assets/1.png" alt="Logo">
<h1 align="center">Sahayog</h1>
</div>

Aim: use opal to create a very simple policy. there are rooms with one task board various users can work on. all the rooms are publically available to be seen by everyone. but only a user with writer access can access it. creator of a board is ofcourse the writer of the board. rest of the users need to be granted access by the writer.

![Rooms](assets/2.png)

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

- Start your OPAL server. I like to clone the `opal-cedar`  repository and run the server from there. 
    ```bash
    cd .. # go back to the parent directory
    git clone https://github.com/permitio/opal-cedar
    cd opal-cedar
    docker-compose -f docker-compose.yml up
    ```

- Start the development server
    ```bash
    npm run dev # or pnpm dev
    ```
  
- Open your browser and go to `http://localhost:3000`
