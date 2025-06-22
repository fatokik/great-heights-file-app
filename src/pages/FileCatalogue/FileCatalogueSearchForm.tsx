import { useState } from "react";

import moment from "moment";

import { FileTypePicker } from "@/src/components/LightComponents";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { UploadIcon } from "@radix-ui/react-icons";

export type SearchCritera = {
  fileName?: string;
  fileType?: string;
  dateUploaded?: moment.Moment;
};

type FileCatalogueSearchFormProps = {
  initialSearchCriteria: SearchCritera;
  onSearch: (searchCriteria: SearchCritera) => void;
  onUploadClick: () => void;
};

export const FileCatalogueSearchForm: React.FC<
  FileCatalogueSearchFormProps
> = ({ initialSearchCriteria, onSearch, onUploadClick }) => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCritera>(
    initialSearchCriteria
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex flex-row justify-center items-end gap-x-8 pb-8"
    >
      <div>
        <Label htmlFor="fileName">File Name</Label>
        <Input
          id="fileName"
          placeholder="Filter by file name"
          onChange={(e) =>
            setSearchCriteria({ ...searchCriteria, fileName: e.target.value })
          }
        />
      </div>
      <div>
        <FileTypePicker
          onValueChange={(value) =>
            setSearchCriteria({ ...searchCriteria, fileType: value })
          }
        />
      </div>
      <div>
        <Label htmlFor="fileDate">Date</Label>
        <Input
          id="fileDate"
          placeholder="Filter by file name"
          type="date"
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              dateUploaded: moment(e.target.value),
            })
          }
        />
      </div>
      <div className="flex items-end">
        <Button type="submit">Search</Button>
      </div>
      <div className="flex items-end">
        <Button onClick={onUploadClick}>
          Upload Files
          <UploadIcon className="ml-2" />
        </Button>
      </div>
    </form>
  );
};
export default FileCatalogueSearchForm;
