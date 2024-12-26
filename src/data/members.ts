export type Member = {
  id: string;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  joinDate: string;
  licenseType: string;
  lastFlight: string;
};

export const members: Member[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    joinDate: "2023-01-15",
    licenseType: "PPL",
    lastFlight: "2024-03-10",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Active",
    joinDate: "2023-02-20",
    licenseType: "CPL",
    lastFlight: "2024-03-15",
  },
  // Add more dummy data as needed
]; 