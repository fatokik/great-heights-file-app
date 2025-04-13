"use client";

import { useState } from "react";
import moment from "moment";
import { Input } from "@/src/components/ui/input";
import Page from "@/src/components/Page/Page";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";

import { FileUploadView } from "./FileUploadView";
import { FileCatalogueTable } from "./FileCatalogueTable";
import { FileTypePicker } from "@/src/components/LightComponents";

import { getDummyFileData } from "./mock-data";

import { UploadIcon } from "@radix-ui/react-icons";

export const FileCatalogue: React.FC = () => {
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);
  //consider putting all filters in one object
  const [fileNameFilter, setFileNameFilter] = useState("");
  const [fileTypeFilter, setFileTypeFilter] = useState("");
  const [dateUploadedFilter, setDateUploadedFilter] = useState<moment.Moment>();

  const dummyfileData = getDummyFileData();

  const onSearchClick = () => {};

  return (
    <Page title="File Catalogue">
      <FileUploadView
        isOpen={isFileDialogOpen}
        onClose={() => setIsFileDialogOpen(!isFileDialogOpen)}
      />
      <div className="flex flex-row justify-center gap-x-8 pb-8">
        <div>
          <Label htmlFor="fileName">File Name</Label>
          <Input id="fileName" placeholder="Filter by file name" />
        </div>
        <div>
          <FileTypePicker onValueChange={(e) => {}} />
        </div>
        <div>
          <Label htmlFor="fileDate">Date</Label>
          <Input id="fileDate" placeholder="Filter by file name" type="date" />
        </div>

        <div className="flex items-end ">
          <Button onClick={onSearchClick}>Search</Button>
        </div>

        <div className="flex items-end ">
          <Button onClick={() => setIsFileDialogOpen(!isFileDialogOpen)}>
            Upload Files
            <UploadIcon className="ml-2" />
          </Button>
        </div>
      </div>
      <FileCatalogueTable files={dummyfileData} />
    </Page>
  );
};
export default FileCatalogue;
