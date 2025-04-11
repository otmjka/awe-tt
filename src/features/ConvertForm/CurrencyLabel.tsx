import { FC } from 'react';

const CurrencyLabel: FC<{ value: string }> = ({ value }) => (
  <span className="ml-2 text-[#168ACD] text-[32px] font-semibold">{value}</span>
);

export default CurrencyLabel;
