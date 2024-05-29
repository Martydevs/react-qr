import {
  ComponentPropsWithoutRef,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { toast } from "sonner";

import { CheckIcon, ColorPaletteIcon, DownloadIcon } from "../icons/Icons";

import BorderedEntry from "./BorderedEntry";
import Button from "./Button";
import RadioButton from "./RadioButton";
import ColorPicker from "./ColorPicker";

interface QrControlsProps extends ComponentPropsWithoutRef<"section"> {
  dispatcher: Dispatch<SetStateAction<string>>;
  bgColorDispatcher: (e: string) => void;
  foreColorDispatcher: (e: string) => void;
  sizeDispatcher: (e: number) => void;
  urlStatus: boolean;
  fn: () => void;
}

function QrControls({
  dispatcher,
  fn,
  bgColorDispatcher,
  foreColorDispatcher,
  sizeDispatcher,
  urlStatus,
  ...props
}: QrControlsProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validUrl = URL.canParse(value);

    if (value === "" || !validUrl) {
      toast.error("Ocurrió un error, URL inválida");
    } else {
      toast.success("QR Generado exitosamente!");
      dispatcher(value);
    }
  };

  return (
    <section {...props}>
      <form
        id="qr-form"
        onSubmit={(e) => handleSubmit(e)}
        autoComplete={"off"}
        className="flex flex-col items-center justify-center gap-3 h-full mx-1 w-full"
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
        <Button type="button" onClick={fn} disabled={!urlStatus}>
          <DownloadIcon size="1.5em" />
          <p>Descargar</p>
        </Button>

        {urlStatus && (
          <>
            <fieldset className="border border-slate-800 rounded-md w-full flex flex-col sm:flex-col p-4">
              <legend className="font-sans font-bold flex gap-2">
                <ColorPaletteIcon size="1.5em" />
                Personalizar código
              </legend>
              <div className="w-full flex items-center justify-evenly">
                <label className="font-mono font-bold" htmlFor="primary-picker">
                  Color Primario
                  <ColorPicker
                    dispatcher={bgColorDispatcher}
                    pickerId="primary-bg-picker"
                    inputId="primary-bg-input"
                  />
                </label>
                <label
                  className="font-mono font-bold"
                  htmlFor="secondary-picker"
                >
                  Color secundario
                  <ColorPicker
                    dispatcher={foreColorDispatcher}
                    pickerId="secondary-fore-picker"
                    inputId="secondary-fore-input"
                  />
                </label>
              </div>
              <div className="w-full mb-2 flex flex-col items-center py-2">
                <h5 className="font-mono font-bold">Tamaño</h5>
                <section className="min-w-full flex items-center justify-evenly py-2">
                  <RadioButton
                    formId="qr-form"
                    id="radio-small"
                    label="120 x 120"
                    value={120}
                    onChange={(e) => sizeDispatcher(Number(e.target.value))}
                  />
                  <RadioButton
                    formId="qr-form"
                    id="radio-medium"
                    label="200 x 200"
                    value={200}
                    onChange={(e) => sizeDispatcher(Number(e.target.value))}
                  />
                  <RadioButton
                    formId="qr-form"
                    id="radio-large"
                    label="300 x 300"
                    value={300}
                    onChange={(e) => sizeDispatcher(Number(e.target.value))}
                  />
                </section>
              </div>
            </fieldset>
          </>
        )}
      </form>
    </section>
  );
}

export default QrControls;
