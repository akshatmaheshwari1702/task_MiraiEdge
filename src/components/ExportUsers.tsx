import * as XLSX from "xlsx";
import { Button } from "@chakra-ui/react";
import type { User } from "../types";

export default function ExportUsers({ users }: { users: User[] }) {
  const handleExport = () => {
    if (!users || users.length === 0) return;
    const rows = users.map(u => ({
      ID: u.id,
      Name: `${u.first_name} ${u.last_name}`,
      Email: u.email,
      Avatar: u.avatar
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };
  return <Button onClick={handleExport}>Export Users</Button>;
}
