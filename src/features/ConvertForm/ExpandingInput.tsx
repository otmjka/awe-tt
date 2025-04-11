import { FC } from 'react';

const ExpandingInput: FC<{ initialValue: string }> = ({
  initialValue = '0',
}) => {
  return (
    <span
      className="text-[42px] text-[#161616] leading-[1.2] px-0 py-0 inline-block whitespace-nowrap font-semibold focus:outline-none"
      role="textbox"
      contentEditable
      suppressContentEditableWarning
    >
      {initialValue}
    </span>
  );
};

export default ExpandingInput;
