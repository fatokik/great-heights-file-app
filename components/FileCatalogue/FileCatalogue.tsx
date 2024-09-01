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
import { Badge } from "../ui/badge";

import { DotsHorizontalIcon, UploadIcon } from "@radix-ui/react-icons";

export const FileCatalogue: FC = () => {
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
    <Page title="File Catalogue">
      <div className="flex flex-row justify-center gap-x-8 pb-8">
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

        <div className="flex items-end ">
          <Button>Search</Button>
        </div>

        <div className="flex items-end ">
          <Button>
            Upload Files
            <UploadIcon className="ml-2" />
          </Button>
        </div>
      </div>
      <Table>
        <TableCaption>Collection of important files.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>File Name</TableHead>
            <TableHead>File Type</TableHead>
            <TableHead>Date Uploaded</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyfileData.map((file) => (
            <TableRow key={file.id}>
              <TableCell className="font-medium">{file.file_name}</TableCell>
              <TableCell>
                <Badge variant="secondary">{file.file_type}</Badge>
              </TableCell>
              <TableCell>{file.date_uploaded}</TableCell>
              <TableCell>
                <DotsHorizontalIcon className="h-4 w-4" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </Page>
  );
};
export default FileCatalogue;
