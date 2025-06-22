"use client";

import { useState } from "react";

import { Input } from "@/src/components/ui/input";
import Page from "@/src/components/Page/Page";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";

import { FileUploadView } from "./FileUploadView";
import { FileCatalogueTable } from "./FileCatalogueTable";
import { FileCatalogueSearchForm } from "./FileCatalogueSearchForm";

import { getDummyFileData } from "./mock-data";

export const FileCatalogue: React.FC = () => {
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);

  const initialSearchCriteria = {
    fileName: undefined,
    fileType: undefined,
    dateUploaded: undefined,
  };

  const dummyfileData = getDummyFileData();

  return (
    <Page title="File Catalogue">
      <FileUploadView
        isOpen={isFileDialogOpen}
        onClose={() => setIsFileDialogOpen(!isFileDialogOpen)}
      />

      <FileCatalogueSearchForm
        initialSearchCriteria={initialSearchCriteria}
        onSearch={(form) => console.log(form)}
        onUploadClick={() => setIsFileDialogOpen(!isFileDialogOpen)}
      />
      <FileCatalogueTable files={dummyfileData} />
    </Page>
  );
};
export default FileCatalogue;
