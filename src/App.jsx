import React, { useRef, useState, useEffect } from 'react';
import { marked } from 'marked';
import Picker from 'emoji-picker-react';

// imported icons
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import {
  RiBold,
  RiItalic,
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
} from 'react-icons/ri';

// imported functions
import {
  handleBold,
  handleItalic,
  handleStrike,
  handleH1,
  handleH2,
  handleH3,
  handleLink,
  handleTable,
  handleCode,
  handleBlockquote,
  handleUnorderedList,
  handleOrderedList,
  getSelectedText,
} from './utils/methods';

import example from './utils/example';

// imported custom hooks
import useLocalStorage from './hooks/useLocalStorage';

// imported components
import Button from './components/Button';

function App() {
  const [savedCode, setSavedCode] = useLocalStorage('code');
  const [code, setCode] = useState('');
  const [isPickingEmoji, setIsPickingEmoji] = useState(false);

  const preview = useRef(null);
  const textarea = useRef(null);

  const isKeyPressed = {};

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

    const inputs = document.querySelectorAll('input[type=checkbox]');

    if (inputs.length > 0) {
      inputs.forEach((e) => {
        e.parentNode.style.listStyle = 'none';
        e.parentNode.parentNode.style.paddingLeft = '0';
      });
    }
  }, [code]);

  const handleEmoji = (_event, emojiObject) => {
    setIsPickingEmoji(false);

    const { selectionStart, arrayValue } = getSelectedText(textarea.current);
    arrayValue.splice(selectionStart, 0, emojiObject.emoji);

    setCode(arrayValue.join(''));
  };

  const handleKeyUp = (event) => {
    isKeyPressed[event.key.toLowerCase()] = false;
  };

  const handleShortcuts = (event) => {
    isKeyPressed[event.key.toLowerCase()] = true;

    if (isKeyPressed.control && isKeyPressed.b) {
      event.preventDefault();
      setCode(handleBold(textarea.current));
    }

    if (isKeyPressed.control && isKeyPressed.i) {
      event.preventDefault();
      setCode(handleItalic(textarea.current));
    }

    if (isKeyPressed.control && isKeyPressed.s) {
      event.preventDefault();
      setCode(handleStrike(textarea.current));
    }

    if (isKeyPressed.control && isKeyPressed.h) {
      event.preventDefault();

      if (isKeyPressed[1]) {
        setCode(handleH1(textarea.current));
      }

      if (isKeyPressed[2]) {
        setCode(handleH2(textarea.current));
      }

      if (isKeyPressed[3]) {
        setCode(handleH3(textarea.current));
      }
    }

    if (isKeyPressed.control && isKeyPressed.l) {
      event.preventDefault();
      setCode(handleLink(textarea.current));
    }

    if (isKeyPressed.control && isKeyPressed.shift) {
      event.preventDefault();

      if (isKeyPressed.t) {
        setCode(handleTable(textarea.current));
      }

      if (isKeyPressed.c) {
        setCode(handleCode(textarea.current));
      }

      if (isKeyPressed.y) {
        setCode(handleUnorderedList(textarea.current));
      }

      if (isKeyPressed.o) {
        setCode(handleOrderedList(textarea.current));
      }
    }

    if (isKeyPressed.control && isKeyPressed["'"]) {
      event.preventDefault();
      setCode(handleBlockquote(textarea.current));
    }

    if (isKeyPressed.control && isKeyPressed.e) {
      event.preventDefault();
      setIsPickingEmoji(!isPickingEmoji);
    }
  };

  return (
    <div className="flex flex-wrap w-full overflow-hidden items-start justify-center">

      <div className="w-full md:w-1/2 pt-9 border-r-4 overflow-hidden h-screen">
        <div className="flex flex-wrap fixed w-full md:w-1/2 bg-gray-100 left-0 top-0 items-center justify-center border-r-4 p-2">

          <Button
            title="bold"
            startIcon={<RiBold />}
            onClick={() => setCode(handleBold(textarea.current))}
          />

          <Button
            title="italic"
            startIcon={<RiItalic />}
            onClick={() => setCode(handleItalic(textarea.current))}
          />

          <Button
            title="Strikethrough"
            startIcon={<RiStrikethrough />}
            onClick={() => setCode(handleStrike(textarea.current))}
          />

          <Button
            title="H1"
            startIcon={<RiH1 />}
            onClick={() => setCode(handleH1(textarea.current))}
          />

          <Button
            title="H2"
            startIcon={<RiH2 />}
            onClick={() => setCode(handleH2(textarea.current))}
          />

          <Button
            title="H3"
            startIcon={<RiH3 />}
            onClick={() => setCode(handleH3(textarea.current))}
          />

          <Button
            title="link"
            startIcon={<RiLinksFill />}
            onClick={() => setCode(handleLink(textarea.current))}
          />

          <Button
            title="table"
            startIcon={<RiTable2 />}
            onClick={() => setCode(handleTable(textarea.current))}
          />

          <Button
            title="code"
            startIcon={<RiCodeSSlashLine />}
            onClick={() => setCode(handleCode(textarea.current))}
          />

          <Button
            title="blockquote"
            startIcon={<RiDoubleQuotesR />}
            onClick={() => setCode(handleBlockquote(textarea.current))}
          />

          <Button
            title="unordered list"
            startIcon={<RiListUnordered />}
            onClick={() => setCode(handleUnorderedList(textarea.current))}
          />

          <Button
            title="ordered list"
            startIcon={<RiListOrdered />}
            onClick={() => setCode(handleOrderedList(textarea.current))}
          />

          <Button
            title="emoji"
            startIcon={<MdOutlineEmojiEmotions />}
            onClick={() => setIsPickingEmoji(!isPickingEmoji)}
          />

          {isPickingEmoji && (
            <Picker
              pickerStyle={{
                position: 'absolute',
                inset: '110% 50%',
                transform: 'translate(-50%, 0)',
              }}
              onEmojiClick={handleEmoji}
              disableAutoFocus
            />
          )}
        </div>

        <textarea
          className="w-full outline-none font-mono h-full resize-none sm:pt-12 pt-[100px] p-5"
          spellCheck="false"
          onChange={({ target }) => setCode(target.value)}
          onKeyDown={handleShortcuts}
          onKeyUp={handleKeyUp}
          placeholder="Write markdown code..."
          value={code}
          ref={textarea}
        />
      </div>

      <div
        className="markdown-body w-full md:w-1/2 p-5 overflow-auto h-screen"
        ref={preview}
      />

    </div>
  );
}

export default App;
