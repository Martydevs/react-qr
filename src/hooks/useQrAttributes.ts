import { useState } from "react";
import { QrProperties } from "../types/qr-viewer";

interface QrHandlers {
  handleBackground: (hexColor: string) => void;
  handleForeColor: (hexColor: string) => void;
  handleSize: (size: number) => void;
  attributes: QrProperties;
}

export default function useQrAttributes({ bgColor, foreColor, size }: QrProperties): QrHandlers {
  const [qrAttributes, setQrAttributes] = useState<QrProperties>({
    bgColor,
    foreColor,
    size,
  });

  const handleBackgroundColorChange = (newColor: string) => {
    setQrAttributes({ ...qrAttributes, bgColor: newColor });
  };

  const handleForegroundColorChange = (newColor: string) => {
    setQrAttributes({ ...qrAttributes, foreColor: newColor });
  };

  const handleSizeChange = (newSize: number) => {
    setQrAttributes({ ...qrAttributes, size: newSize });
  };

  return {
    handleBackground: handleBackgroundColorChange,
    handleForeColor: handleForegroundColorChange,
    handleSize: handleSizeChange,
    attributes: qrAttributes,
  };
}
