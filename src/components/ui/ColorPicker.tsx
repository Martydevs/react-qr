import { HexColorInput, HexColorPicker } from "react-colorful";

type ColorPickerProps = {
  dispatcher: (e: string) => void
  pickerId: string
  inputId: string
};

const ColorPicker = ({ dispatcher, pickerId, inputId }: ColorPickerProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HexColorPicker
        id={inputId}
        onChange={dispatcher}
        className="h-full w-full"
      />
      <HexColorInput className="bg-slate-900 border border-slate-800 min-w-full py-2 rounded-lg sm:scale-95" placeholder="Color hexadecimal..." id={pickerId} onChange={dispatcher} />
    </div>
  );
};

export default ColorPicker;
