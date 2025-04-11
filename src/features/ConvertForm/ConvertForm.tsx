import { FC } from 'react';
import ConvertFormContainer from './ConvertFormContainer';
import PercentButton from './PercentButton';
import PercentButtonClipped from './PercentButtonClipped';
// import MoneyInput from './MoneyInput';
import ExpandingInput from './ExpandingInput';
import CurrencyLabel from './CurrencyLabel';
import MoneyAmountContainer from './MoneyAmountContainer';
import ButtonGroupContainer from './ButtonGroupContainer';

const ConvertForm: FC = () => {
  console.log('lint12');
  return (
    <ConvertFormContainer>
      <MoneyAmountContainer>
        <ExpandingInput initialValue="0" />
        <CurrencyLabel value={'RUB1'} />
      </MoneyAmountContainer>

      <ButtonGroupContainer>
        <PercentButtonClipped progress={0}>25%</PercentButtonClipped>
        <PercentButtonClipped progress={50}>50%</PercentButtonClipped>
        <PercentButtonClipped progress={75}>75%</PercentButtonClipped>
        <PercentButtonClipped progress={40}>100%</PercentButtonClipped>
      </ButtonGroupContainer>
    </ConvertFormContainer>
  );
};

export default ConvertForm;
