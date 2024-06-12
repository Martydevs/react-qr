import {
  ComponentPropsWithoutRef,
  FormEvent,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";

import { CheckIcon, DownloadIcon } from "../icons/Icons";

import handleDownloadCode from "../../lib/download";
import BorderedEntry from "./BorderedEntry";
import Button from "./Button";

interface QrControlsProps extends ComponentPropsWithoutRef<"section"> {
  urlDispatcher: (value: string) => void;
  urlStatus: boolean;
}

function QrControls({
  urlDispatcher,
  urlStatus,
  children,
  ...props
}: QrControlsProps) {
  const [value, setValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValidUrl = URL.canParse(value);

    if (isValidUrl) {
      toast.success("QR Generado exitosamente!");
      urlDispatcher(value);
      formRef.current?.reset();
    }
  };

  return (
    <section {...props}>
      <form
        id="qr-form"
        onSubmit={handleSubmit}
        autoComplete={"off"}
        className="flex flex-col items-center justify-center gap-3 h-full mx-1 w-full"
        ref={formRef}
      >
        <BorderedEntry
          placeholder="Ingrese la url aqui.."
          type="text"
          id="data-url"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">
          <CheckIcon size="1.5em" />
          <p>Generar</p>
        </Button>
        <Button type="button" onClick={() => handleDownloadCode("qr-result")} disabled={!urlStatus}>
          <DownloadIcon size="1.5em" />
          <p>Descargar</p>
        </Button>

        { urlStatus && children }
      </form>
    </section>
  );
}

export default QrControls;
