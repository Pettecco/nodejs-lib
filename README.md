# Node.js Text Analyzer

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org)
[![Jest](https://img.shields.io/badge/tested%20with-jest-brightgreen)](https://jestjs.io)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](./coverage)

Uma biblioteca Node.js para análise de textos que identifica palavras duplicadas em parágrafos. Ferramenta útil para revisão de textos, detecção de redundâncias e análise de conteúdo.

**Projeto desenvolvido como parte dos estudos no curso de Node.js da Alura.**

## Funcionalidades

- **Análise de palavras duplicadas**: Identifica palavras repetidas em cada parágrafo
- **Relatório detalhado**: Gera arquivo de saída com resultados organizados por parágrafo
- **Filtro inteligente**: Exibe apenas parágrafos que contêm palavras duplicadas
- **Limpeza automática**: Remove pontuações e caracteres especiais automaticamente
- **Interface CLI**: Fácil de usar via linha de comando
- **Output colorido**: Interface amigável com cores para melhor experiência

## Instalação

```bash
# Clone o repositório
git clone https://github.com/Pettecco/nodejs-lib.git

# Entre no diretório
cd nodejs-lib

# Instale as dependências
npm install
```

## Como usar

### Via linha de comando

```bash
node src/cli.js --text <caminho-do-arquivo> --destination <pasta-de-saida>
```

#### Exemplos práticos:

```bash
# Analisar arquivo de exemplo
node src/cli.js -t files/texto-aprendizado.txt -d output

# Usando nomes completos das opções
node src/cli.js --text files/texto-kanban.txt --destination output

# Analisar seu próprio arquivo
node src/cli.js -t /caminho/para/seu/arquivo.txt -d /pasta/de/saida
```

### Opções disponíveis

| Opção           | Abreviação | Descrição                                       |
| --------------- | ---------- | ----------------------------------------------- |
| `--text`        | `-t`       | Caminho para o arquivo de texto a ser analisado |
| `--destination` | `-d`       | Pasta onde será salvo o arquivo de resultados   |
| `--version`     | `-V`       | Exibe a versão atual                            |
| `--help`        | `-h`       | Mostra ajuda e opções disponíveis               |

## Estrutura do projeto

```
nodejs-lib/
├── src/
│   ├── cli.js              # Interface de linha de comando
│   ├── index.js            # Funções principais de análise
│   ├── helpers.js          # Funções auxiliares
│   └── errors/
│       └── handleErrors.js # Tratamento de erros
├── tests/                  # Testes unitários
│   ├── index.test.js       # Testes das funções principais
│   ├── helpers.test.js     # Testes das funções auxiliares
│   └── handleErrors.test.js# Testes de tratamento de erros
├── files/                  # Arquivos de exemplo
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── output/                 # Pasta de saída dos resultados
│   └── resultado.txt
├── coverage/               # Relatórios de cobertura (não versionado)
├── package.json
└── README.md
```

## Como funciona

1. **Leitura do arquivo**: O programa lê o arquivo de texto especificado
2. **Divisão em parágrafos**: O texto é dividido por quebras de linha (`\n`)
3. **Processamento de palavras**:
   - Remove pontuações e caracteres especiais
   - Converte para minúsculas
   - Considera apenas palavras com 3+ caracteres
4. **Detecção de duplicatas**: Conta ocorrências de cada palavra por parágrafo
5. **Geração do relatório**: Cria arquivo `resultado.txt` com palavras duplicadas por parágrafo

## Exemplo de saída

```
palavras duplicadas no parágrafo 2: que, você, uma, nova, mercado, seja, com, para, sua, essa
palavras duplicadas no parágrafo 4: torna
palavras duplicadas no parágrafo 8: que
palavras duplicadas no parágrafo 10: ansiedade, que, uma
palavras duplicadas no parágrafo 12: com
```

## Sobre o curso

Este projeto foi desenvolvido durante o curso **"Node.js: criando sua primeira biblioteca"** da **Alura**. O curso aborda:

- Fundamentos do Node.js e NPM
- Criação de bibliotecas e CLIs
- Manipulação de arquivos com File System
- Tratamento de erros e promises
- Boas práticas de desenvolvimento em Node.js
- Uso de bibliotecas externas (Commander.js, Chalk)

## Testes

O projeto possui uma suíte completa de testes implementada com **Jest**:

### Executar testes

```bash
# Executar todos os testes
npm test

# Executar testes com cobertura completa
npm run test:coverage

# Executar testes em modo watch (desenvolvimento)
npm run test:watch

# Visualizar relatório de cobertura
open coverage/lcov-report/index.html
```
