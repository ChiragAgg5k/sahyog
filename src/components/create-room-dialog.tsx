"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function CreateRoomDialog() {
  const clerk = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("Default Room");

  const handleSubmit = async () => {
    if (!clerk.user) {
      return;
    }
    setLoading(true);

    await fetch("/api/room/create", {
      method: "POST",
      body: JSON.stringify({ name: name, userId: clerk.user.id }),
    }).then(async (res) => {
      if (res.ok) {
        router.refresh();
        setOpen(false);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Room</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Room</DialogTitle>
          <DialogDescription>
            {clerk.isSignedIn
              ? "Create a new room for you and your team to collaborate in."
              : "You need to be signed in to create a room."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Room Name
            </Label>
            <Input
              onChange={(event) => setName(event.target.value)}
              value={name}
              id="name"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={!clerk.isSignedIn || loading}
            onClick={handleSubmit}
            type="submit"
          >
            Create Room
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
