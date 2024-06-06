import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedOut, SignInButton } from "@clerk/nextjs";

export default async function HomePage() {
  //  curl -X POST "http://localhost:8180/v1/is_authorized" \
  // -H "Accept: application/json" \
  // -H "Content-Type: application/json" \
  // -d '{"principal":"User::\"writer@blog.app\"","action":"Action::\"post\"","resource":"Resource::\"article\""}'
  // await fetch("http://localhost:8180/v1/is_authorized", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     principal: 'User::"writer@blog.app"',
  //     action: 'Action::"post"',
  //     resource: 'Resource::"article"',
  //   }),
  // }).then((res) => res.json());
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
            <Button>
              <SignInButton mode={`modal`} />
            </Button>
          </SignedOut>
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
          <Button>Create Room</Button>
        </div>
        <div className={"flex h-[50vh] items-center justify-center"}>
          <p className={`font-light`}>
            No room available. Create a room to get started.
          </p>
        </div>
      </div>
    </main>
  );
}
