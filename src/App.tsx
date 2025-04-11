import './App.css';
import { ConvertForm } from './features/ConvertForm';

const buttonConfigs = [
  {
    id: 0,
    progress: 0,
    label: '25%',
  },
  {
    id: 1,
    progress: 0,
    label: '50%',
  },
  {
    id: 2,
    progress: 0,
    label: '75%',
  },
  {
    id: 3,
    progress: 0,
    label: '100%',
  },
];

const buttonConfigsBottom = [
  {
    id: 0,
    progress: 100,
    label: '25%',
  },
  {
    id: 1,
    progress: 0,
    label: '50%',
  },
  {
    id: 2,
    progress: 0,
    label: '75%',
  },
  {
    id: 3,
    progress: 0,
    label: '100%',
  },
];

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
