/**
 * @jest-environment node
 */
import { jest } from '@jest/globals';
import handleErrors from '../src/errors/handleErrors.js';

// Mock do console.error para capturar as chamadas
const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

describe('handleErrors', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test('should handle ENOENT error correctly', () => {
    const error = { code: 'ENOENT' };

    handleErrors(error);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Arquivo não encontrado'));
  });

  test('should handle generic errors', () => {
    const error = { code: 'GENERIC_ERROR' };

    handleErrors(error);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Erro na aplicação'));
  });

  test('should handle errors without code', () => {
    const error = {};

    handleErrors(error);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Erro na aplicação'));
  });
});
