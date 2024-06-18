import RadioButton from "./RadioButton";
import ColorPicker from "./ColorPicker";
import { ColorPaletteIcon } from "../icons/Icons";

interface QrParametersProps {
  bgColorDispatcher: (hexColor: string) => void;
  foreColorDispatcher: (hexColor: string) => void;
  sizeDispatcher: (size: number) => void;
}

function QrParameters({
  bgColorDispatcher,
  foreColorDispatcher,
  sizeDispatcher
}: QrParametersProps) {
  const handleQrSize = (value: string) => {
    const size = Number(value)
    sizeDispatcher(size)
  }

  return (
    <fieldset className="border border-slate-800 rounded-md w-full flex flex-col-reverse sm:flex-col md:flex-col lg:flex-col p-4">
      <legend className="font-sans font-bold flex gap-2">
        <ColorPaletteIcon size="1.5em" />
        Personalizar código
      </legend>
      <div className="w-full flex flex-col items-center justify-evenly md:flex-row lg:flex-row">
        <label className="font-mono font-bold" htmlFor="primary-picker">
          Color Primario
          <ColorPicker
            dispatcher={bgColorDispatcher}
            pickerId="primary-bg-picker"
            inputId="primary-bg-input"
          />
        </label>
        <label className="font-mono font-bold" htmlFor="secondary-picker">
          Color secundario
          <ColorPicker
            dispatcher={foreColorDispatcher}
            pickerId="secondary-fore-picker"
            inputId="secondary-fore-input"
          />
        </label>
      </div>
      <div className="w-full mb-2 flex flex-col items-center justify-center py-2">
        <h5 className="font-mono font-bold">Tamaño</h5>
        <section className="w-full flex flex-col items-center justify-evenly py-2 gap-2 md:flex-row lg:flex-row">
          <RadioButton
            formId="qr-form"
            id="radio-small"
            label="120 x 120"
            value={120}
            onChange={(e) => handleQrSize(e.target.value)}
          />
          <RadioButton
            formId="qr-form"
            id="radio-medium"
            label="200 x 200"
            value={200}
            onChange={(e) => handleQrSize(e.target.value)}
          />
          <RadioButton
            formId="qr-form"
            id="radio-large"
            label="300 x 300"
            value={300}
            onChange={(e) => handleQrSize(e.target.value)}
          />
        </section>
      </div>
    </fieldset>
  );
}

export default QrParameters;
