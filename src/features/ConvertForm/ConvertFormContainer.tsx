import { FC, ReactNode } from 'react';

const ConvertFormContainer: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="bg-white pl-6 pr-5 py-1">{children}</div>
);

export default ConvertFormContainer;
