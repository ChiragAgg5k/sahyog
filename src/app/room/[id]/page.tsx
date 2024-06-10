import { db } from "@/server/db";

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

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div>
      <h1>{room.name}</h1>
    </div>
  );
}
