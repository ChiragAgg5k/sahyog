<div>
<img src="assets/1.png" alt="Thumbnail">
<h1 align="center">Sahayog</h1>
</div>

Sahayog is a platform for you and your team to collaborate, communicate, and get things done in public. Now what does that mean? It means you can create spaces that anyone can see, join, and participate in.

Think of it as like a glass-walled conference room. You can see what's going on inside from the outside, but only those with permission can enter and participate.

![Rooms](assets/2.png)

## Demo Video

https://github.com/ChiragAgg5k/sahyog/assets/110609663/62ef0258-ba84-47f9-827c-6134a3dd0dd5

Or check it out on YouTube - https://youtu.be/GgHb1drMNyw

## Getting Started

You need to have the following installed on your machine:

1. Node.js
2. npm or yarn
3. Docker

- Clone the repository
    ```bash
    git clone https://github.com/ChiragAgg5k/sahyog
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

- Start your OPAL server. Clone the forked `sahayog-opal-cedar` repo
  from [here](https://github.com/ChiragAgg5k/sahyog-opal-cedar) and run the following commands:
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

## Built With

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.dev/) - User authentication
- [Prisma](https://www.prisma.io/) - Database ORM
- [PostgreSQL](https://www.postgresql.org/) - Database
- [OPAL](https://opal.ac/) - Policy language
- [Docker](https://www.docker.com/) - Containerization
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
