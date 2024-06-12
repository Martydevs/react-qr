import { useState } from "react";
import { QrProperties } from "../types/qr-viewer";

interface QrHandlers {
  handleBackground: (hexColor: string) => void;
  handleForeColor: (hexColor: string) => void;
  handleSize: (size: number) => void;
  attributes: QrProperties;
}

export default function useQrAttributes({ bgColor, foreColor, size }: QrProperties): QrHandlers {
  const [attributes, setQrAttributes] = useState<QrProperties>({
    bgColor,
    foreColor,
    size,
  });

  const handleBackground = (hexColor: string) => {
    setQrAttributes({
      ...attributes,
      bgColor: hexColor,
    });
  };

  const handleForeColor = (hexColor: string) => {
    setQrAttributes({
      ...attributes,
      foreColor: hexColor,
    });
  };

  const handleSize = (value: number) => {
    setQrAttributes({
      ...attributes,
      size: value,
    });
  }

  return { handleBackground, handleForeColor, handleSize, attributes }
}