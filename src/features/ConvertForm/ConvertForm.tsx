import { FC } from 'react';
import ConvertFormContainer from './ConvertFormContainer';
import PercentButton from './PercentButton';
import PercentButtonClipped from './PercentButtonClipped';

const ConvertForm: FC = () => {
  console.log('lint');
  return (
    <ConvertFormContainer>
      <div>
        <input type="text" />
        <div>RUB</div>
      </div>
      <div className="flex w-full gap-2">
        <PercentButton progress={0}>25%</PercentButton>
        <PercentButtonClipped progress={50}>50%</PercentButtonClipped>
        <PercentButtonClipped progress={75}>75%</PercentButtonClipped>
        <PercentButtonClipped progress={40}>100%</PercentButtonClipped>
      </div>
    </ConvertFormContainer>
  );
};

export default ConvertForm;
