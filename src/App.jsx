import React, { useRef, useState, useEffect } from 'react';
import { marked } from 'marked';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [savedCode, setSavedCode] = useLocalStorage('code');
  const [code, setCode] = useState('');
  const preview = useRef(null);

  useEffect(() => {
    setCode(savedCode);
  }, []);

  useEffect(() => {
    preview.current.innerHTML = marked.parse(code);
    setSavedCode(code);
  }, [code]);

  return (
    <div className="flex overflow-hidden">
      <textarea
        className="p-4 resize-none outline-none h-screen w-1/2 border-r-4"
        spellCheck="false"
        onChange={({ target }) => setCode(target.value)}
        placeholder="Write markdown code..."
        value={code}
      />

      <div
        className="w-1/2 p-4 h-screen markdown-body"
        ref={preview}
      />
    </div>
  );
}

export default App;
