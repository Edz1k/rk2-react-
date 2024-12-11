import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Состояние кнопок: массив с начальным значением "false" для каждой кнопки
  const [buttonsState, setButtonsState] = useState([false, false, false, false, false]);


  const handleClick = (index)=> {
    setButtonsState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }
  // Обработчики для клавиши "Enter"
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setButtonsState((prevState) => prevState.map(() => true)); // Все кнопки становятся "нажатыми"
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      setButtonsState((prevState) => prevState.map(() => false)); // Все кнопки сбрасываются
    }
  };

  // Добавляем обработчики событий клавиатуры
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Зажмите Enter или кликните на кнопку</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {buttonsState.map((isClicked, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`px-4 py-2 text-white rounded ${
              isClicked ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isClicked ? 'Нажато!' : 'Кликни меня!'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
