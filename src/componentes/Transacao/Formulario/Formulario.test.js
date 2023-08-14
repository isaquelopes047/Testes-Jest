import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  /* 
    Vai verificar se o input é do tipo Number pegando o input desejado 
    pelo seu placeholder e usando o metodo toHaveAttribute usando dois
    parametros ('type', 'number)
    */
  test('com o type Number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  /* 
    Vai utilizar o evento com userEvent que é um evento disparado pelo
    usuario, vamos atribuir ao compoTexto o valor de '50'
    e vamos inspecionar com toHaveValue;
    */
  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });

  test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole('button');

    userEvent.click(botao);
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
