import { useEffect, useState } from "react";
import download from "downloadjs";

import Header from "./components/ui/Header";
import QrControls from "./components/ui/QrControls";
import QrViewer from "./components/ui/QrViewer";
import { DownArrowIcon } from "./components/icons/Icons";
import BorderedButton from "./components/ui/BorderedButton";
import { QrColors } from "./models/qr-viewer";

function App() {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [qrColors, setQrColors] = useState<QrColors>({ bgColor: "#fff", foreColor: "#000" })

  const handleDownloadCode = () => {
    const qr = document.getElementById("qr-result") as HTMLImageElement;
    const dataUrl = qr.src;
    download(dataUrl, "qrcode.png", "image/png");
  };

  const handleBackground = (hexColor: string) => {
    setQrColors({
      ...qrColors,
      bgColor: hexColor
    })
  }

  const handleForeColor = (hexColor: string) => {
    setQrColors({
      ...qrColors,
      foreColor: hexColor
    })
  }

  useEffect(() => {
    const validUrl = URL.canParse(url)
    setIsValidUrl(validUrl);
  }, [url]);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950">
      <Header>
        <h1 className="animate-fade-down animate-once animate-duration-[1500ms] inline-flex text-8xl font-extrabold bg-gradient-to-r from-gray-800 to-slate-300 bg-clip-text text-transparent">FastQR</h1>
        <p className="text-pretty text-xl animate-fade-down animate-once animate-duration-[2000ms]">
          A React application to generate reactive qr codes.
        </p>
        <a href="#content" className="animate-fade-down animate-once animate-duration-[2300ms]">
          <BorderedButton>
            <DownArrowIcon size="1.5em" />
            Empezar
          </BorderedButton>
        </a>
      </Header>
      <section id="content" className="flex flex-col justify-center items-center min-h-screen w-full">
        <section className={"w-4/5 flex items-center justify-between max-h-full lg:flex-row md:flex-row sm:flex-col"}>
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
            fn={handleDownloadCode}
            urlStatus={isValidUrl}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
