import { useState } from "react";

import Header from "./components/ui/Header";
import QrControls from "./components/ui/QrControls";
import QrViewer from "./components/ui/QrViewer";
import { QrColors } from "./models/qr-viewer";
import useIsValidUrl from "./hooks/useIsValidUrl";
import handleDownloadCode from "./lib/download";
import QrContainer from "./components/layouts/QrContainer";

function App() {
  const [url, setUrl] = useState("");
  const isValidUrl = useIsValidUrl(url);
  const [qrColors, setQrColors] = useState<QrColors>({
    bgColor: "#fff",
    foreColor: "#000",
  });

  const handleBackground = (hexColor: string) => {
    setQrColors({
      ...qrColors,
      bgColor: hexColor,
    });
  };

  const handleForeColor = (hexColor: string) => {
    setQrColors({
      ...qrColors,
      foreColor: hexColor,
    });
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950">
      <Header />
      <QrContainer>
        <QrViewer
          className="lg:w-2/4 md:w-2/4 sm:w-screen h-full flex items-center justify-center"
          url={url}
          isValidUrl={isValidUrl}
          backgroundColor={qrColors}
        />
        <QrControls
          className="lg:w-2/4 md:w-2/4 sm:w-screen h-full flex items-center justify-center px-2"
          dispatcher={setUrl}
          bgColorDispatcher={handleBackground}
          foreColorDispatcher={handleForeColor}
          fn={() => handleDownloadCode("qr-result")}
          urlStatus={isValidUrl}
        />
      </QrContainer>
    </main>
  );
}

export default App;
