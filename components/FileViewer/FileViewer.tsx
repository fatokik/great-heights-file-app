import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const FileViewer: FC = () => {
  const invoices = [
    {
      id: 999,
      file_name: "INV007",
      file_type: "Unpaid",
      date_uploaded: "$300.00",
    },
    {
      id: 999,
      file_name: "INV007",
      file_type: "Unpaid",
      date_uploaded: "$300.00",
    },
    {
      id: 999,
      file_name: "INV007",
      file_type: "Unpaid",
      date_uploaded: "$300.00",
    },
    {
      id: 999,
      file_name: "INV007",
      file_type: "Unpaid",
      date_uploaded: "$300.00",
    },
    {
      id: 999,
      file_name: "INV007",
      file_type: "Unpaid",
      date_uploaded: "$300.00",
    },
    {
      id: 999,
      file_name: "INV007",
      file_type: "Unpaid",
      date_uploaded: "$300.00",
    },
    {
      id: 999,
      file_name: "INV007",
      file_type: "Unpaid",
      date_uploaded: "$300.00",
    },
  ];
  return (
    <div className="px-3">
      <div className="">
        <h1 className="text-4xl">File Viewer</h1>
      </div>
      <div></div>
      <Table>
        <TableCaption>Collection of important files.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">File Name</TableHead>
            <TableHead>File Type</TableHead>
            <TableHead>Date Uploaded</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.file_name}</TableCell>
              <TableCell>{invoice.file_type}</TableCell>
              <TableCell>{invoice.file_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
export default FileViewer;
