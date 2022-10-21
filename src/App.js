import { useState, useEffect } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

function App() {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <div>
      <h1>아래 버튼 클릭!</h1>
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
      <div>{value}</div>
      {listening && <div>음성인식 활성화중</div>}
    </div>
  );
}

export default App;
