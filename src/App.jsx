import React, { useRef, useState, useEffect } from 'react';
import { marked } from 'marked';
import useLocalStorage from './hooks/useLocalStorage';
import example from './utils/example';

function App() {
  const [savedCode, setSavedCode] = useLocalStorage('code');
  const [code, setCode] = useState('');
  const preview = useRef(null);

  useEffect(() => {
    if (savedCode) {
      setCode(savedCode);
      return;
    }

    setCode(example);
  }, []);

  useEffect(() => {
    preview.current.innerHTML = marked.parse(code);
    setSavedCode(code);
  }, [code]);

  return (
    <div className="flex overflow-hidden">
      <textarea
        className="p-4 pb-[100px] resize-none outline-none h-screen w-1/2 border-r-4 font-mono"
        spellCheck="false"
        onChange={({ target }) => setCode(target.value)}
        placeholder="Write markdown code..."
        value={code}
      />

      <div
        className="w-1/2 p-4 pb-[100px] h-screen markdown-body overflow-y-scroll"
        ref={preview}
      />
    </div>
  );
}

export default App;
