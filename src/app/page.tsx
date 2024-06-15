import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { CreateRoomDialog } from "@/components/create-room-dialog";
import { clerkClient } from "@clerk/nextjs/server";
import { db } from "@/server/db";

export default async function HomePage() {
  //  curl -X POST "http://localhost:8180/v1/is_authorized" \
  // -H "Accept: application/json" \
  // -H "Content-Type: application/json" \
  // -d '{"principal":"User::\"writer@blog.app\"","action":"Action::\"post\"","resource":"Resource::\"article\""}'
  await fetch("http://localhost:8180/v1/is_authorized", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      principal: 'User::"writer@blog.app"',
      action: 'Action::"post"',
      resource: 'Resource::"article"',
    }),
  }).then(async (res) => {
    const data = await res.json();
    console.log(data);
  });

  const rooms = await db.room.findMany();

  return (
    <main>
      <div
        className={
          "flex min-h-screen flex-col items-center justify-center bg-background font-sans antialiased"
        }
      >
        <h1 className={"mb-4 text-center text-5xl font-bold text-primary"}>
          सहयोग
        </h1>
        <p className={"text-md mb-4 max-w-xl text-center font-semibold"}>
          Unlock the power of collaboration with Sahayog.
        </p>
        <p className={"text-md mb-4 max-w-xl text-center font-light"}>
          The ultimate platform for you and your team to collaborate,
          communicate, and get things done in public.
        </p>
        <div className={"flex space-x-4"}>
          <Link href={`/learn-more`}>
            <Button variant={`outline`}>Learn More</Button>
          </Link>
          <SignedOut>
            <SignInButton mode={`modal`}>
              <div
                className={
                  "grid cursor-pointer place-items-center rounded-lg bg-black px-4 text-white transition-all duration-200 ease-in-out hover:opacity-85"
                }
              >
                Sign In
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div
              className={
                "grid cursor-pointer place-items-center rounded-lg bg-black px-4 text-white transition-all duration-200 ease-in-out hover:opacity-85"
              }
            >
              <SignOutButton />
            </div>
          </SignedIn>
        </div>
      </div>
      <div className={"flex min-h-[75vh] flex-col p-8"}>
        <div
          className={
            "flex w-full flex-col items-end justify-between sm:flex-row sm:items-center"
          }
        >
          <div>
            <h2 className={"mb-2 text-2xl font-bold text-primary"}>
              Avaialble Rooms
            </h2>
            <p className={"text-md font-light"}>
              You can only edit rooms that you are authorized to access. Either
              ask for permission or create your own room.
            </p>
          </div>
          <CreateRoomDialog />
        </div>
        {rooms.length > 0 ? (
          <div className={`mt-8 grid grid-cols-3 gap-4`}>
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`flex items-center justify-between rounded-xl border p-4`}
              >
                <div>
                  <h3 className={`text-md font-semibold`}>{room.name}</h3>
                  <p className={`text-sm text-muted-foreground`}>
                    Created by{" "}
                    <span className={`font-semibold`}>
                      {clerkClient.users
                        .getUser(room.ownerId)
                        .then((user) => user.fullName)}
                    </span>
                  </p>
                </div>
                <Link href={`/room/${room.id}`}>
                  <Button variant={`outline`}>View Room</Button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className={`font-light`}>
            No room available. Create a room to get started.
          </p>
        )}
      </div>
    </main>
  );
}
