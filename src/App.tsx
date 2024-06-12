import { useState } from "react";

import Header from "./components/ui/Header";
import QrControls from "./components/ui/QrControls";
import QrViewer from "./components/ui/QrViewer";
import useIsValidUrl from "./hooks/useIsValidUrl";
import QrLayout from "./components/layouts/QrLayout";
import RootLayout from "./components/layouts/RootLayout";
import useQrAttributes from "./hooks/useQrAttributes";
import QrParameters from "./components/ui/QrParameters";

function App() {
  const [url, setUrl] = useState("");
  const isValidUrl = useIsValidUrl(url);
  const { handleBackground, handleForeColor, handleSize, attributes } = useQrAttributes({
    bgColor: "#fff",
    foreColor: "#000",
    size: 300 
  });

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
          urlDispatcher={setUrl}
          urlStatus={isValidUrl}
        >
          <QrParameters
            bgColorDispatcher={handleBackground}
            foreColorDispatcher={handleForeColor}
            sizeDispatcher={handleSize}
          />
        </QrControls>
      </QrLayout>
    </RootLayout>
  );
}

export default App;
