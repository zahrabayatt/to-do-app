import Task from "./Task";

export default interface Category {
  id: string;
  name: string;
  tasks: Task[];
}
