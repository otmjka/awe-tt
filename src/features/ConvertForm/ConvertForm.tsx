import { FC } from 'react';

import ButtonGroupContainer from './ButtonGroupContainer';
import ConvertFormContainer from './ConvertFormContainer';
import CurrencyLabel from './CurrencyLabel';
import ExpandingInput from './ExpandingInput';
import MoneyAmountContainer from './MoneyAmountContainer';
import PercentButtonClipped from './PercentButtonClipped';

type ButtonConfig = {
  id: number;
  progress: number;
  label: string;
};

const ConvertForm: FC<{
  amount: string;
  currency: string;
  buttonConfig: ButtonConfig[];
}> = ({ amount, currency, buttonConfig }) => (
  <ConvertFormContainer>
    <MoneyAmountContainer>
      <ExpandingInput initialValue={amount} />
      <CurrencyLabel value={currency} />
    </MoneyAmountContainer>

    <ButtonGroupContainer>
      {buttonConfig.map((item) => (
        <PercentButtonClipped key={item.id} progress={item.progress}>
          {item.label}
        </PercentButtonClipped>
      ))}
    </ButtonGroupContainer>
  </ConvertFormContainer>
);

export default ConvertForm;
