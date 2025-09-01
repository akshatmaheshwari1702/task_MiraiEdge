import * as XLSX from "xlsx";
import { Button } from "@chakra-ui/react";
import type { ReportPoint } from "../types";

export default function ExportReports({ data }: { data: ReportPoint[] }) {
  const handleExport = () => {
    if (!data || data.length === 0) return;
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reports");
    XLSX.writeFile(wb, "reports.xlsx");
  };
  return <Button onClick={handleExport}>Download Report</Button>;
}
