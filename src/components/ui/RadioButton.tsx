import { ComponentPropsWithoutRef } from "react";

interface RadioButtonProps extends ComponentPropsWithoutRef<"input"> {
  label: string
  id: string
  formId: string
}

const RadioButton = ({
  id,
  formId,
  label,
  ...props
}: RadioButtonProps) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2">
      <input
        type="radio"
        name={formId}
        id={id}
        className="radio"
        value={300}
        {...props}
      />
      { label }
    </label>
  );
};

export default RadioButton;
