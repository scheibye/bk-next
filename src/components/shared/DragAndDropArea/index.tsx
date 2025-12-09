import { Upload, X } from "lucide-react";
import { ChangeEvent, useCallback, useState } from "react";
import { cn } from "tailwind-variants";

interface Props {
  files: File[];
  onChange: (files: File[]) => void;
}

export function DragAndDropArea({ files, onChange }: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFiles = Array.from(e.dataTransfer.files);
      onChange([...files, ...droppedFiles]);
    },
    [files, onChange]
  );

  const handleFileSelect = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files);
        onChange([...files, ...selectedFiles]);
      }
    },
    [files, onChange]
  );

  const removeFile = useCallback(
    (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      onChange(newFiles);
    },
    [files, onChange]
  );

  return (
    <div className="space-y-3">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative rounded-lg border-2 border-border border-dashed p-6 text-center transition-colors",
          isDragging ? "bg-gray-50" : "bg-gray-50 hover:bg-gray-100"
        )}
      >
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
        <Upload className="mx-auto size-8 text-secondary-foreground/50" />
        <p className="mt-2 text-sm text-secondary-foreground/70">
          Træk og slip filer her, eller {" "}
          <span className="text-secondary-foreground underline">klik for at vælge</span>
        </p>
      </div>

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-md bg-white/10 px-3 py-2 text-sm"
            >
              <span className="truncate text-secondary-foreground">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-2 text-secondary-foreground/60 hover:text-secondary-foreground"
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
