import { useState } from 'react'
import './App.css'

function App() {
  // Состояние кнопок: массив с начальным значением "false" для каждой кнопки
  const [buttonsState, setButtonsState] = useState([false, false, false, false, false]);

  // Обработчик клика для обновления состояния конкретной кнопки
  const handleClick = (index) => {
    setButtonsState((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Нажмите на кнопку</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {buttonsState.map((isClicked, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleClick(index)}
          >
            {isClicked ? "Нажато!" : "Кликни меня!"}
          </button>
        ))}
      </div>
    </div>
  );
}


export default App
