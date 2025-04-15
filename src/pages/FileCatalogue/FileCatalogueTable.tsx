import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Badge } from "@/src/components/ui/badge";

export type OfficeFile = {
  id: number;
  file_name: string;
  file_type: string;
  date_uploaded: string;
};

export type FileCatalogueTableProps = {
  files: OfficeFile[];
};

export const FileCatalogueTable: React.FC<FileCatalogueTableProps> = ({
  files,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>File Name</TableHead>
          <TableHead>File Type</TableHead>
          <TableHead>Date Uploaded</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.id}>
            <TableCell className="font-medium">{file.file_name}</TableCell>
            <TableCell>
              <Badge variant="secondary">{file.file_type}</Badge>
            </TableCell>
            <TableCell>{file.date_uploaded}</TableCell>
            <TableCell className="flex justify-end">
              <DotsHorizontalIcon className="h-4 w-4" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
      <TableCaption>Collection of important files.</TableCaption>
    </Table>
  );
};
export default FileCatalogueTable;
