import {
  ComponentPropsWithoutRef,
  MouseEvent,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { QRious } from "react-qrious";
import throttle from "../../lib/throttle";
import { QrColors } from "../../models/qr-viewer";

interface QrViewerProps extends ComponentPropsWithoutRef<"section"> {
  url: string;
  isValidUrl: boolean;
  backgroundColor: QrColors;
}

function QrViewer({ url, isValidUrl, backgroundColor: { bgColor, foreColor }, ...props }: QrViewerProps) {
  return (
    <section {...props}>
      {url === "" ? (
        <p className="text-2xl">Ingrese una URL</p>
      ) : isValidUrl ? (
        <CardTilt>
          <QRious
            value={url} 
            size={300} 
            background={bgColor} 
            foreground={foreColor}
            className="hover:scale-150 hover:animate-jump"
            id="qr-result" 
          />
        </CardTilt>
      ) : (
        <p className="text-2xl">url inválida</p>
      )}
    </section>
  );
}

const CardTilt = ({ children }: { children: ReactNode }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className="card relative transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default QrViewer;
