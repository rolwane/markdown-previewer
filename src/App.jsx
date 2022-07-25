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

import useLocalStorage from './hooks/useLocalStorage';
import example from './utils/example';

// imported components
import Button from './components/Button';

const buttons = [
  'bold',
  'italic',
  'strikethrough',
  'H1',
  'H2',
  'H3',
  'link',
  'table',
  'code',
  'blockquote',
  'unordered list',
  'ordered list',
  'emojis',
];

const buttonIcons = [
  <RiBold />,
  <RiItalic />,
  <RiStrikethrough />,
  <RiH1 />,
  <RiH2 />,
  <RiH3 />,
  <RiLinksFill />,
  <RiTable2 />,
  <RiCodeSSlashLine />,
  <RiDoubleQuotesR />,
  <RiListUnordered />,
  <RiListOrdered />,
  <MdOutlineEmojiEmotions />,
];

function App() {
  const [savedCode, setSavedCode] = useLocalStorage('code');
  const [code, setCode] = useState('');
  const [isPickingEmoji, setIsPickingEmoji] = useState(false);

  const preview = useRef(null);
  const textarea = useRef(null);

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

  const getSelectedText = () => {
    const start = textarea.current.selectionStart;
    const end = textarea.current.selectionEnd;
    const selected = code.substring(start, end);
    const array = code.split('');
    return [array, start, end, selected];
  };

  const handleBold = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `**${selected}**`);
    setCode(array.join(''));
  };

  const handleItalic = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `*${selected}*`);
    setCode(array.join(''));
  };

  const handleStrike = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `~~${selected}~~`);
    setCode(array.join(''));
  };

  const handleH1 = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `# ${selected}`);
    setCode(array.join(''));
  };

  const handleH2 = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `## ${selected}`);
    setCode(array.join(''));
  };

  const handleH3 = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `### ${selected}`);
    setCode(array.join(''));
  };

  const handleLink = () => {
    const [array, start] = getSelectedText();
    array.splice(start, 0, '[link example](http://example.com)');
    setCode(array.join(''));
  };

  const handleTable = () => {
    const [array, start] = getSelectedText();

    const table = `
| Heading | Heading |
|---------|---------|
| Cell 1  | Cell 1  |
| Cell 2  | Cell 2  |`;

    array.splice(start, 0, table);
    setCode(array.join(''));
  };

  const handleCode = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `\`\`\`${selected}\`\`\``);
    setCode(array.join(''));
  };

  const handleBlockquote = () => {
    const [array, start, end, selected] = getSelectedText();
    array.splice(start, end - start, `> ${selected}`);
    setCode(array.join(''));
  };

  const handleUnorderedList = () => {
    const [array, start, end, selected] = getSelectedText();

    const list = `
- item 1
- item 2
- item 3`;

    if (selected) {
      array.splice(start, end - start, `- ${selected}`);
    } else {
      array.splice(start, end - start, list);
    }
    setCode(array.join(''));
  };

  const handleOrderedList = () => {
    const [array, start, end, selected] = getSelectedText();

    const list = `
1. item 1
2. item 2
3. item 3`;

    if (selected) {
      array.splice(start, end - start, `1. ${selected}`);
    } else {
      array.splice(start, end - start, list);
    }
    setCode(array.join(''));
  };

  const handleEmoji = (_event, { emoji }) => {
    setIsPickingEmoji(false);

    const [array, start] = getSelectedText();
    array.splice(start, 0, emoji);
    setCode(array.join(''));
  };

  const showPicker = () => {
    setIsPickingEmoji(!isPickingEmoji);
  };

  const methods = [
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
    showPicker,
  ];

  return (
    <div className="flex flex-wrap w-full overflow-hidden items-start justify-center">

      <div className="w-full md:w-1/2 pt-9 border-r-4 overflow-hidden h-screen">
        <div className="flex flex-wrap fixed w-full md:w-1/2 bg-gray-100 left-0 top-0 items-center justify-center border-r-4 p-2">
          {buttons.map((button, index) => (
            <Button
              title={button}
              startIcon={buttonIcons[index]}
              onClick={methods[index]}
              key={button}
            />
          ))}

          {isPickingEmoji && (
          <Picker
            pickerStyle={{
              position: 'absolute',
              inset: 0,
              left: '50%',
              top: 'calc(100% + 10px)',
              transform: 'translateX(-50%)',
            }}
            onEmojiClick={handleEmoji}
          />
          )}
        </div>

        <textarea
          className="w-full outline-none font-mono h-full resize-none sm:pt-12 pt-[100px] p-5"
          spellCheck="false"
          onChange={({ target }) => setCode(target.value)}
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
