import React, { useRef, useState, useEffect } from 'react';
import { marked } from 'marked';

// imported icons
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiH1,
  RiH2,
  RiH3,
  RiLinksFill,
  RiTable2,
  RiCodeSSlashLine,
  RiDoubleQuotesR,
  RiListUnordered,
  RiListOrdered,
  // RiEyeFill,
} from 'react-icons/ri';

import useLocalStorage from './hooks/useLocalStorage';
import example from './utils/example';

// imported components
import Button from './components/Button';

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
    <div className="flex overflow-hidden flex-wrap">

      <div className="md:w-1/2 h-screen border-r-2 w-full">

        <div className="bg-slate-50 p-2 flex gap-2 border-[#ddd] border-b-[1px] mb-6 flex-wrap">
          <Button title="bold" startIcon={<RiBold />} />
          <Button title="italic" startIcon={<RiItalic />} />
          <Button title="underline" startIcon={<RiUnderline />} />
          <Button title="strikethrough" startIcon={<RiStrikethrough />} />
          <Button title="strikethrough" startIcon={<RiH1 />} />
          <Button title="strikethrough" startIcon={<RiH2 />} />
          <Button title="strikethrough" startIcon={<RiH3 />} />
          <Button title="strikethrough" startIcon={<RiLinksFill />} />
          <Button title="strikethrough" startIcon={<RiTable2 />} />
          <Button title="strikethrough" startIcon={<RiCodeSSlashLine />} />
          <Button title="strikethrough" startIcon={<RiDoubleQuotesR />} />
          <Button title="strikethrough" startIcon={<RiListUnordered />} />
          <Button title="strikethrough" startIcon={<RiListOrdered />} />
        </div>

        <textarea
          className="p-4 pb-[100px] resize-none outline-none w-full h-full font-mono"
          spellCheck="false"
          onChange={({ target }) => setCode(target.value)}
          placeholder="Write markdown code..."
          value={code}
        />
      </div>

      <div
        className="md:w-1/2 w-full p-4 pb-[100px] h-screen markdown-body overflow-y-scroll bg-white border-t-4 md:border-none"
        ref={preview}
      />
    </div>
  );
}

export default App;
