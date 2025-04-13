import { useState } from "react";

import moment from "moment";

import { FileTypePicker } from "@/src/components/LightComponents";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

export type SearchCritera = {
  fileName?: string;
  fileType?: string;
  dateUploaded?: moment.Moment;
};

type FileCatalogueSearchFormProps = {
  initialSearchCriteria: SearchCritera;
  onSearch: () => void;
};

export const FileCatalogueSearchForm: React.FC<
  FileCatalogueSearchFormProps
> = ({ initialSearchCriteria, onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCritera>(
    initialSearchCriteria
  );
  const [fileNameFilter, setFileNameFilter] = useState("");
  const [fileTypeFilter, setFileTypeFilter] = useState("");
  const [dateUploadedFilter, setDateUploadedFilter] = useState<moment.Moment>();

  const onSearchClick = () => {};

  return (
    <div className="flex flex-row justify-center gap-x-8 pb-8">
      <div>
        <Label htmlFor="fileName">File Name</Label>
        <Input
          id="fileName"
          placeholder="Filter by file name"
          onChange={(e) => {}}
        />
      </div>
      <div>
        <FileTypePicker onValueChange={(e) => {}} />
      </div>
      <div>
        <Label htmlFor="fileDate">Date</Label>
        <Input
          id="fileDate"
          placeholder="Filter by file name"
          type="date"
          onSelect={(e) => console.log(e)}
        />
      </div>

      <div className="flex items-end ">
        <Button onClick={onSearchClick}>Search</Button>
      </div>
    </div>
  );
};
export default FileCatalogueSearchForm;
