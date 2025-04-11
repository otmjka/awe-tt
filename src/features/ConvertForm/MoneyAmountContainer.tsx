import { FC, ReactNode } from 'react';

const MoneyAmountContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex items-center py-2 border-b-1 border-[#E4E4E4]">
    {children}
  </div>
);

export default MoneyAmountContainer;
