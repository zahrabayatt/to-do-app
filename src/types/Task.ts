export default interface Task {
  id: string;
  name: string;
  createdOn: string;
  isCompleted: boolean;
  isImportant: boolean;
  categoryId: string | null;
}
