import { useState, useRef } from "react";
import { FilePicker, FilePickerRef } from "../FilePicker";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

import { FileTypePicker, FileTypePickerRef } from "../LightComponents";

type FileUploadViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HELPTEXT = `Please upload relevant file(s) and select the corresponding tags`;

export const FileUploadView: React.FC<FileUploadViewProps> = ({
  isOpen,
  onClose,
}) => {
  const [files, setFiles] = useState<FileList | null>();
  const [fileType, setFileType] = useState<string | null>(null);

  const filePickerRef = useRef<FilePickerRef>(null);
  const fileTypePickerRef = useRef<FileTypePickerRef>(null);

  const onTypeFileTypeSelection = (fileType: string) => {
    setFileType(fileType);
  };

  const onSubmit = () => {
    if (files && fileType) {
      const payload = {
        files: files,
        fileType: fileType,
      };
      try {
        console.log(payload);
      } catch (e) {
        console.log(e);
      }
      resetFormValues();
    }
  };

  const resetFormValues = () => {
    setFiles(null);
    setFileType("");
    filePickerRef?.current?.clearFilePicker();
    fileTypePickerRef?.current?.resetPicker();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
          <DialogDescription>{HELPTEXT}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              {`File(s)`}
            </Label>
            <FilePicker
              ref={filePickerRef}
              onChange={(e) => {
                setFiles(e);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <FileTypePicker
              ref={fileTypePickerRef}
              onValueChange={onTypeFileTypeSelection}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default FileUploadView;
