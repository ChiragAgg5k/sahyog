import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";

export async function POST(request: NextRequest) {
  const data = (await request.json()) as { name: string; userId: string };
  const { name, userId } = data;

  try {
    const res = await db.room.create({
      data: {
        name,
        ownerId: userId,
        allowedUsers: [userId],
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.error();
  }
}
