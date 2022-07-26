export const getSelectedText = (textarea) => {
  const { selectionStart, selectionEnd, value } = textarea;
  const textSelected = value.substring(selectionStart, selectionEnd);
  const arrayValue = value.split('');

  return {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  };
};

export const handleBold = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `**${textSelected}**`);

  return arrayValue.join('');
};

export const handleItalic = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `*${textSelected}*`);

  return arrayValue.join('');
};

export const handleStrike = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `~~${textSelected}~~`);

  return arrayValue.join('');
};

export const handleH1 = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `# ${textSelected}`);

  return arrayValue.join('');
};

export const handleH2 = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `## ${textSelected}`);

  return arrayValue.join('');
};

export const handleH3 = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `### ${textSelected}`);

  return arrayValue.join('');
};

export const handleLink = (textarea) => {
  const { selectionStart, arrayValue } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, 0, '[link](http://google.com)');

  return arrayValue.join('');
};

export const handleTable = (textarea) => {
  const { selectionStart, arrayValue } = getSelectedText(textarea);

  const table = `
| Heading | Heading |
|---------|---------|
| Cell 1  |  Cell 1 |
| Cell 2  |  Cell 2 |
`;

  arrayValue.splice(selectionStart, 0, table);

  return arrayValue.join('');
};

export const handleCode = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `\`\`\`${textSelected}\`\`\``);

  return arrayValue.join('');
};

export const handleBlockquote = (textarea) => {
  const {
    selectionStart,
    selectionEnd,
    textSelected,
    arrayValue,
  } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, selectionEnd - selectionStart, `> ${textSelected}`);

  return arrayValue.join('');
};

export const handleUnorderedList = (textarea) => {
  const { selectionStart, arrayValue } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, 0, '- Item 1\n- Item 2');

  return arrayValue.join('');
};

export const handleOrderedList = (textarea) => {
  const { selectionStart, arrayValue } = getSelectedText(textarea);

  arrayValue.splice(selectionStart, 0, '1. Item 1\n2. Item 2');

  return arrayValue.join('');
};
