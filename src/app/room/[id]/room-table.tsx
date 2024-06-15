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

const tasks = [
  {
    id: 1,
    description: "Create a new project",
    createdAt: "2021-09-01",
  },
  {
    id: 2,
    description: "Update the project",
    createdAt: "2021-09-02",
  },
  {
    id: 3,
    description: "Delete the project",
    createdAt: "2021-09-03",
  },
];

export default function RoomTable() {
  return (
    <div className={`mt-8`}>
      <div className={`flex items-center justify-between`}>
        <Input placeholder="Add a new task" />
        <Button className="ml-2">Add Task</Button>
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
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}.</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.createdAt}</TableCell>
              <TableCell className="text-right">
                <button className="text-primary">Edit</button>
                <button className="ml-2 text-red-500">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
