import { useState } from "react";

import Header from "./components/ui/Header";
import QrControls from "./components/ui/QrControls";
import QrViewer from "./components/ui/QrViewer";
import { QrProperties } from "./models/qr-viewer";
import useIsValidUrl from "./hooks/useIsValidUrl";
import handleDownloadCode from "./lib/download";
import QrLayout from "./components/layouts/QrLayout";
import RootLayout from "./components/layouts/RootLayout";

function App() {
  const [url, setUrl] = useState("");
  const isValidUrl = useIsValidUrl(url);
  const [attributes, setQrAttributes] = useState<QrProperties>({
    bgColor: "#fff",
    foreColor: "#000",
    size: 300
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

  return (
    <RootLayout>
      <Header />
      <QrLayout>
        <QrViewer
          className="lg:w-2/4 md:w-2/4 h-full flex items-center justify-center"
          url={url}
          isValidUrl={isValidUrl}
          qrAttributes={attributes}
        />
        <QrControls
          className="lg:w-2/4 md:w-2/4 h-full flex items-center justify-center px-2"
          dispatcher={setUrl}
          bgColorDispatcher={handleBackground}
          foreColorDispatcher={handleForeColor}
          sizeDispatcher={handleSize}
          fn={() => handleDownloadCode("qr-result")}
          urlStatus={isValidUrl}
        />
      </QrLayout>
    </RootLayout>
  );
}

export default App;
