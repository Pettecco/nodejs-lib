function filterOccurrences(paragraph) {
  return Object.keys(paragraph).filter((key) => paragraph[key] > 1);
}

function buildFileOutput(wordList) {
  let finalText = '';
  wordList.forEach((paragraph, index) => {
    const duplicated = filterOccurrences(paragraph);
    if (duplicated.length > 0) {
      finalText += `palavras duplicadas no parágrafo ${index + 1}: ${duplicated.join(', ')} \n`;
    }
  });

  return finalText;
}

export { buildFileOutput };
