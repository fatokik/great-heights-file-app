"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PinTopIcon } from "@radix-ui/react-icons";

interface FilePickerProps {
  onChange: (e: FileList | null) => void;
}

export const FilePicker: React.FC<FilePickerProps> = (
  props: FilePickerProps
) => {
  const [hover, setHover] = useState(false);
  const [fileText, setFileText] = useState("Select or drag and drop multiple ");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currFiles = event.target.files ? event.target.files : null;

    if (currFiles) {
      props.onChange(currFiles);
      currFiles.length === 1
        ? setFileText(`${currFiles.length} file selected`)
        : setFileText(`${currFiles.length} files selected`);
    }
  };

  const handleOnMouseEnter = () => {
    setHover(true);
  };
  const handleOnMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center border-2 border-dotted border-gray-500 rounded-lg",
        "min-h-[10vh] w-[250px]",
        hover && "bg-blue-50"
      )}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className="flex flex-col items-center">
        <Button
          //   as="label"
          variant={hover ? "default" : "outline"}
          className="flex flex-col items-center"
        >
          <input
            multiple
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <PinTopIcon />
        </Button>
        <p>{fileText}</p>
      </div>
    </div>
  );
};
export default FilePicker;
