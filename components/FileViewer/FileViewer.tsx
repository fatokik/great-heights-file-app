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
import { Input } from "../ui/input";
import Page from "../Page/Page";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export const FileViewer: FC = () => {
  const dummyfileData = [
    {
      id: 1,
      file_name: "test_file1.pdf",
      file_type: "medical",
      date_uploaded: "06/2/2024",
    },
    {
      id: 2,
      file_name: "test_file2.pdf",
      file_type: "immigration",
      date_uploaded: "07/5/2024",
    },
    {
      id: 3,
      file_name: "test_file3.pdf",
      file_type: "private",
      date_uploaded: "08/2/2024",
    },
    {
      id: 4,
      file_name: "test_file4.pdf",
      file_type: "medical",
      date_uploaded: "08/23/2024",
    },
  ];
  return (
    <Page title="File Viewer">
      <div className="flex flex-row gap-x-8">
        <div>
          <Label htmlFor="fileName">File Name</Label>
          <Input id="fileName" placeholder="Filter by file name" />
        </div>
        <div>
          <Label htmlFor="fileType">File Type</Label>
          <Input id="fileType" placeholder="Filter by file type" />
        </div>
        <div>
          <Label htmlFor="fileDate">Date</Label>
          <Input id="fileDate" placeholder="Filter by file name" type="date" />
        </div>

        <div>
          <Button>Search</Button>
        </div>
      </div>
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
          {dummyfileData.map((file) => (
            <TableRow key={file.id}>
              <TableCell className="font-medium">{file.file_name}</TableCell>
              <TableCell>{file.file_type}</TableCell>
              <TableCell>{file.file_name}</TableCell>
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
    </Page>
  );
};
export default FileViewer;
