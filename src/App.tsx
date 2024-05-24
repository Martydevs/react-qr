import { useEffect, useState } from "react";
import download from "downloadjs";

import Header from "./components/ui/Header";
import QrControls from "./components/ui/QrControls";
import QrViewer from "./components/ui/QrViewer";
import { DownArrowIcon } from "./components/icons/Icons";
import BorderedButton from "./components/ui/BorderedButton";

function App() {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);

  const handleDownloadCode = () => {
    const qr = document.getElementById("qr-result") as HTMLImageElement;
    const dataUrl = qr.src;
    download(dataUrl, "qrcode.png", "image/png");
  };

  useEffect(() => {
    setIsValidUrl(URL.canParse(url));
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
      <section id="content" className="flex flex-col justify-center items-center h-screen w-full">
        <section className={"w-3/4 flex items-center justify-between h-full flex-wrap"}>
          <QrViewer url={url} isValidUrl={isValidUrl} className="w-2/4 h-full flex items-center justify-center" />
          <QrControls dispatcher={setUrl} fn={handleDownloadCode} className="w-2/4 h-full flex items-center justify-center" />
        </section>
      </section>
    </main>
  );
}

export default App;
