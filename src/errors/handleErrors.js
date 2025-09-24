import chalk from 'chalk';

export default function handleErrors(error) {
  if (error.code === 'ENOENT') {
    console.error(chalk.red('Erro: Arquivo não encontrado'));
  } else {
    console.error(chalk.red('Erro na aplicação'));
  }
}
