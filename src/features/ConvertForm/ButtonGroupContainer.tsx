import { FC, ReactNode } from 'react';

const ButtonGroupContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex w-full gap-2 py-2">{children}</div>
);

export default ButtonGroupContainer;
