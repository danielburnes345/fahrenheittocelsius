import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState(0);

  const handleContentChange = (e) => {

    const input = e.target.innerText;

    const tempValue = parseFloat(input);

    if (!isNaN(tempValue)) {
      setContent(((tempValue * 9) / 5) + 32);
    } else {
      setContent('input invalido'); 
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Convertidor</h1>
      </header>
      <div>
        Introduce la temperatura en Fahrenheit:
        <div 
          style={{ width: '150px', borderWidth: '3px', borderStyle: 'solid' }}
          onInput={handleContentChange}
          suppressContentEditableWarning={true}
          contentEditable={true}
        >
          0
        </div>
        <p>Temperatura en Celsius: {content}</p>
      </div>
    </div>
  );
}

export default App;