import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Label } from "@/src/components/ui/label";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";

type FileTypePickerProps = {
  onValueChange: (value: string) => void;
};
export interface FileTypePickerRef {
  resetPicker: () => void;
}
export const FileTypePicker = forwardRef(function FileTypePicker(
  props: FileTypePickerProps,
  ref
) {
  const [value, setValue] = useState<string>("");
  const handleValueChange = (e: string) => {
    setValue(e);
    props.onValueChange(e);
  };

  useImperativeHandle(
    ref,
    () => ({
      resetPicker,
    }),
    []
  );

  const resetPicker = () => {
    setValue("");
  };

  return (
    <>
      <Label htmlFor="name" className="text-right">
        File Type
      </Label>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
});

// export const FileTypePicker: React.FC<FileTypePickerProps> = ({
//   onValueChange,
// }) => {
//   const [value, setValue] = useState<string>("");
//   const handleValueChange = (e: string) => {
//     setValue(e);
//     onValueChange(e);
//   };

// return (
//   <>
//     <Label htmlFor="name" className="text-right">
//       File Type
//     </Label>
//     <Select value={value} onValueChange={handleValueChange}>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select an option" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="light">Light</SelectItem>
//         <SelectItem value="dark">Dark</SelectItem>
//         <SelectItem value="system">System</SelectItem>
//       </SelectContent>
//     </Select>
//   </>
//   );
// };
