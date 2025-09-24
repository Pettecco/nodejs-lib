/**
 * @jest-environment node
 */
import { buildFileOutput } from '../src/helpers.js';

describe('buildFileOutput', () => {
  test('should build output text correctly', () => {
    const wordList = [{ palavra: 2, teste: 3 }, {}, { exemplo: 2 }];

    const resultado = buildFileOutput(wordList);

    expect(resultado).toContain('palavras duplicadas no parágrafo 1: palavra, teste');
    expect(resultado).toContain('palavras duplicadas no parágrafo 3: exemplo');
    expect(resultado).not.toContain('parágrafo 2'); // Parágrafo vazio não deve aparecer
  });

  test('should handle empty word list', () => {
    const wordList = [];
    const resultado = buildFileOutput(wordList);

    expect(resultado).toBe('');
  });

  test('should handle word list with no duplicates', () => {
    const wordList = [{}, {}, {}];

    const resultado = buildFileOutput(wordList);

    expect(resultado).toBe('');
  });

  test('should format multiple duplicated words correctly', () => {
    const wordList = [{ casa: 2, carro: 3, bicicleta: 2 }];

    const resultado = buildFileOutput(wordList);

    expect(resultado).toContain('palavras duplicadas no parágrafo 1:');
    expect(resultado).toContain('casa');
    expect(resultado).toContain('carro');
    expect(resultado).toContain('bicicleta');
  });
});
