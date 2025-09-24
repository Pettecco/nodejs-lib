import fs from 'fs';
import path from 'path';
import handleErrors from './errors/handleErrors.js';
import { countWords } from './index.js';
import { buildFileOutput } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .version('0.0.1')
  .option('-t, --text <string>', 'caminho do texto a ser processado')
  .option('-d, --destination <string>', 'caminho da pasta onde salvar o arquivo de resultados')
  .action((options) => {
    const { text, destination } = options;

    if (!text || !destination) {
      console.error(chalk.red('erro: favor inserir caminho de origem e destino'));
      program.help();
      return;
    }

    const textPath = path.resolve(text);
    const destinationPath = path.resolve(destination);

    processFile(textPath, destinationPath);
  });

program.parse();

function processFile(text, destination) {
  fs.readFile(text, 'utf-8', (error, text) => {
    try {
      if (error) throw error;
      const result = countWords(text);
      createAndSaveFile(result, destination);
      console.log(chalk.green('texto processado com sucesso'));
    } catch (error) {
      handleErrors(error);
    }
  });
}

async function createAndSaveFile(wordList, address) {
  const newFile = `${address}/resultado.txt`;
  const wordsText = buildFileOutput(wordList);
  try {
    await fs.promises.writeFile(newFile, wordsText);
    console.log('arquivo criado');
  } catch (error) {
    throw error;
  }
}

// function createAndSaveFile(wordList, address) {
//   const newFile = `${address}/resultado.txt`;
//   const wordsText = JSON.stringify(wordList);

//   fs.promises.writeFile(newFile, wordsText)
//     .then(() => {
//       console.log('arquivo criado');
//     })
//     .catch((error) => {
//       throw error
//     })
//     .finally(() => console.log('operação finalizada'))
// }
