import { db } from "@/server/db";
import RoomTable from "@/app/room/[id]/room-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

export default async function RoomPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const room = await db.room.findUnique({
    where: {
      id: params.id,
    },
  });
  const user = await currentUser();

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <main className={"p-10"}>
      <div className={`flex items-center justify-between`}>
        <h1 className={"mb-4 text-center text-3xl font-extrabold text-primary"}>
          Room - {room.name}
        </h1>
        <Link href={`/`}>
          <Button variant={`outline`}>Back to Homepage</Button>
        </Link>
      </div>
      <p>
        Do you have access to this room?{" "}
        <span className={"ml-1  font-semibold"}>
          {user !== null
            ? room.allowedUsers.includes(user.id)
              ? "Yes"
              : "No"
            : "You are not logged in."}
        </span>
      </p>
      <RoomTable />
    </main>
  );
}
