import { OfficeFile } from "./FileCatalogueTable";

export const getDummyFileData = (): OfficeFile[] => [
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
