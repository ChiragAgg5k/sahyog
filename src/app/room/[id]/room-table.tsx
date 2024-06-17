"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Task = {
  id: number;
  description: string;
  createdAt: string;
};

export default function RoomTable({
  allowedAccess,
}: {
  allowedAccess: boolean;
}) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>("");

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks) as Task[]);
    }
  }, []);

  return (
    <div className={`mt-8`}>
      <div className={`flex items-center justify-between`}>
        <Input
          disabled={!allowedAccess}
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          placeholder="Add a new task"
        />
        <Button
          disabled={!allowedAccess}
          onClick={() => {
            setTasks([
              ...tasks,
              {
                id: tasks.length + 1,
                description: taskDescription,
                createdAt: new Date().toLocaleDateString(),
              },
            ]);
            localStorage.setItem(
              "tasks",
              JSON.stringify([
                ...tasks,
                {
                  id: tasks.length + 1,
                  description: taskDescription,
                  createdAt: new Date().toLocaleDateString(),
                },
              ]),
            );

            setTaskDescription("");
          }}
          className="ml-2"
        >
          Add Task
        </Button>
      </div>
      <Table className={`mt-6`}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Task Description</TableHead>
            <TableHead className="w-[150px]">Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="py-8 text-center">
                No tasks available. Add a task to get started.
              </TableCell>
            </TableRow>
          )}
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}.</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.createdAt}</TableCell>
              <TableCell className="text-right">
                <button className="font-semibold text-primary">Edit</button>
                <button
                  disabled={!allowedAccess}
                  onClick={() => {
                    setTasks(tasks.filter((t) => t.id !== task.id));
                    localStorage.setItem(
                      "tasks",
                      JSON.stringify(tasks.filter((t) => t.id !== task.id)),
                    );
                  }}
                  className="ml-2 font-semibold text-red-500"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
