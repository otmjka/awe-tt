import { buttonConfigs, buttonConfigsBottom } from './buttonConfigs';
import { ConvertForm } from './features/ConvertForm';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
      <div className="w-screen h-screen bg-green-300 bg-white rounded-t-[15px]">
        <div className="flex flex-col min-[1200px]:flex-row pl-6 pr-5 py-1">
          <ConvertForm
            amount="10000"
            currency="RUB"
            buttonConfig={buttonConfigs}
          />
          <ConvertForm
            amount="100"
            currency="USDT"
            buttonConfig={buttonConfigsBottom}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
