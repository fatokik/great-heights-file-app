"use client";

import { useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PinTopIcon, TrashIcon } from "@radix-ui/react-icons";

interface FilePickerProps {
  onChange: (e: FileList | null) => void;
}

export const FilePicker: React.FC<FilePickerProps> = (
  props: FilePickerProps
) => {
  const [hover, setHover] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [fileText, setFileText] = useState(
    "Select or drag and drop multiple files"
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currFiles = event.target.files ? event.target.files : null;

    if (currFiles && currFiles.length > 0) {
      props.onChange(currFiles);

      setFiles(currFiles);
      if (files) {
        files.length === 1
          ? setFileText(`${files.length} file selected`)
          : setFileText(`${files.length} files selected`);
      } else {
        setFileText("Select or drag and drop multiple files");
      }
    } else {
      clearFilePicker();
    }
  };

  const clearFilePicker = () => {
    setFiles(null);
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHover(true);
  };

  const handleDragLeave = () => {
    setHover(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHover(false);

    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles) {
      props.onChange(droppedFiles);
      droppedFiles.length === 1
        ? setFileText(`${droppedFiles.length} file selected`)
        : setFileText(`${droppedFiles.length} files selected`);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center border-2 border-dotted border-gray-500 rounded-lg",
        "min-h-[10vh] w-[250px]",
        hover && "bg-blue-50"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleFileClick}
    >
      <div className="flex flex-col items-center">
        <Button variant={"ghost"} className="flex flex-col items-center">
          <input
            ref={fileInputRef}
            multiple
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <PinTopIcon />
        </Button>
        <p className="text-xs">{fileText}</p>
        {files && (
          <>
            <Button variant={"ghost"} size={"sm"} onClick={clearFilePicker}>
              <TrashIcon />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default FilePicker;
