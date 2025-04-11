import './App.css';
import { ConvertForm } from './features/ConvertForm';
import FrameImage from './assets/Frame.png';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
      {/* <div className="absolute top-0 left-0 opacity-10">
        <img className="max-w-[100%] h-auto" src={FrameImage} />
      </div> */}
      <div className="w-screen h-screen bg-green-300">
        <ConvertForm />
      </div>
    </div>
  );
}

export default App;
