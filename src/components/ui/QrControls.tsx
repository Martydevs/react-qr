import { ComponentPropsWithoutRef, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { toast } from 'sonner';

import { CheckIcon, ColorPaletteIcon, DownloadIcon } from "../icons/Icons";

import BorderedEntry from "./BorderedEntry";
import Button from "./Button";

interface QrControlsProps extends ComponentPropsWithoutRef<"section"> {
  dispatcher: Dispatch<SetStateAction<string>>;
  bgColorDispatcher: (e: string) => void;
  foreColorDispatcher: (e: string) => void;
  urlStatus: boolean;
  fn: () => void;
}

function QrControls({ dispatcher, fn, bgColorDispatcher, foreColorDispatcher, urlStatus, ...props }: QrControlsProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validUrl = URL.canParse(value)

    if (value === "" || !validUrl) {
      toast.error("Ocurrió un error, URL inválida")
    } else {
      toast.success("QR Generado exitosamente!")
      dispatcher(value);
    }
  };

  return (
    <section {...props}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        autoComplete={"off"}
        className="flex flex-col items-center justify-center gap-3 h-full w-full mx-1"
      >
        <BorderedEntry
          placeholder="Ingrese la url aqui.."
          type="text"
          name="data-url"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">
          <CheckIcon size="1.5em" />
          <p>Generar</p>
        </Button>
        <Button type="button" onClick={fn} disabled={!urlStatus}>
          <DownloadIcon size="1.5em" />
          <p>Descargar</p>
        </Button>

        {urlStatus && (
          <fieldset className="border border-slate-800 rounded-md w-full flex flex-row justify-evenly items-center p-2 max-h-72 md:flex-row sm:flex-col">
            <legend className="font-sans font-bold flex gap-2">
              <ColorPaletteIcon size="1.5em" />
              Personalizar código
            </legend>
            <HexColorPicker onChange={bgColorDispatcher} className="max-h-full" />
            <HexColorPicker onChange={foreColorDispatcher} className="max-h-full" />
          </fieldset>
        )}
      </form>
    </section>
  );
}

export default QrControls
