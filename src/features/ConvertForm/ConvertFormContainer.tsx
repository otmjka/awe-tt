import { FC, ReactNode } from 'react';

const ConvertFormContainer: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="mb-[43px] max-w-[425px] min-[1200px]:min-w-[425px] min-[1200px]:mr-4">
    {children}
  </div>
);

export default ConvertFormContainer;
