import download from "downloadjs";

const handleDownloadCode = (selector: string) => {
  const qr = document.getElementById(selector) as HTMLImageElement;
  const dataUrl = qr.src;
  download(dataUrl, "qrcode.png", "image/png");
};

export default handleDownloadCode