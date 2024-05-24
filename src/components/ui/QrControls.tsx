import { ComponentPropsWithoutRef, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { toast } from 'sonner';

import { CheckIcon, ColorPaletteIcon, DownloadIcon } from "../icons/Icons";

import BorderedEntry from "./BorderedEntry";
import Button from "./Button";

interface QrControlsProps extends ComponentPropsWithoutRef<"section"> {
  dispatcher: Dispatch<SetStateAction<string>>;
  fn: () => void;
}

function QrControls({ dispatcher, fn, ...props }: QrControlsProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === "") {
      toast.error("Ocurrió un error, URL inválida")
    } else {
      toast.success("QR Generado exitosamente!")
      dispatcher(value);
    }
  };

  return (
    <section {...props}>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete={"off"} className="flex flex-col items-center justify-center gap-3 h-full w-full">
        <BorderedEntry placeholder="Ingrese la url aqui.." type="text" name="data-url" onChange={(e) => setValue(e.target.value)} />
        <Button type="submit">
          <CheckIcon size="1.5em" />
          <p>Generar</p>
        </Button>
        <Button type="button" onClick={fn}>
          <DownloadIcon size="1.5em" />
          <p>Descargar</p>
        </Button>

        <fieldset className="border border-slate-800 rounded-md w-full flex justify-center px-2 py-4">
          <legend className="font-sans font-bold flex gap-2">
            <ColorPaletteIcon size="1.5em" />
            Personalizar código
          </legend>
          <HexColorPicker />
        </fieldset>
      </form>
    </section>
  );
}

export default QrControls;
