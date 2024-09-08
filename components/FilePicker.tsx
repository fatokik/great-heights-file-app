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
  const [fileDivhover, setFileDivHover] = useState(false);
  const [deleteFileHover, setDeleteFileHover] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [fileText, setFileText] = useState(
    "Select or drag and drop multiple files"
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      if (files.length > 0) {
        props.onChange(files);
        setFiles(files);

        files.length === 1
          ? setFileText(`${files.length} file selected`)
          : setFileText(`${files.length} files selected`);
      } else {
        clearFilePicker();
        props.onChange(null);
      }
    } else {
      clearFilePicker();
      props.onChange(null);
    }
  };

  const onFileDivClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currFiles = event.target.files;
    handleFileChange(currFiles);
  };

  const clearFilePicker = () => {
    setFiles(null);
    setFileText("Select or drag and drop multiple files");

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    clearFilePicker();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileDivHover(true);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileDivHover(false);

    const droppedFiles = event.dataTransfer.files;
    handleFileChange(droppedFiles);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center border-2 border-dotted border-gray-500 rounded-lg",
        "min-h-[10vh] w-[250px]",
        fileDivhover && "bg-blue-50"
      )}
      onMouseEnter={() => setFileDivHover(true)}
      onMouseLeave={() => setFileDivHover(false)}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={() => setFileDivHover(false)}
      onDrop={handleDrop}
      onClick={handleFileClick}
    >
      <div className="flex flex-col items-center">
        <Button variant={"ghost"} className="flex flex-col items-center">
          <input
            ref={fileInputRef}
            multiple
            type="file"
            onChange={onFileDivClick}
            className="hidden"
          />
          <PinTopIcon />
        </Button>
        <p className="text-xs">{fileText}</p>
        {files && (
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={handleDeleteButtonClick}
            onMouseEnter={() => setDeleteFileHover(true)}
            onMouseLeave={() => setDeleteFileHover(false)}
          >
            <TrashIcon className={cn(deleteFileHover && "text-red-500")} />
          </Button>
        )}
      </div>
    </div>
  );
};
export default FilePicker;
