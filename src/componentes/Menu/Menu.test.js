import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Renderizar um link para pagina inicial', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

/* 
    Vai esperar o tamanha da lista de links que você definiu to.HaveLength( número do tamanha )
    Porem podemos definiar a busca com links, p, img, text
*/
test('Renderizar uma lista de links', () => {
  render(<Menu />);
  const listaLinks = screen.getAllByRole('link');
  expect(listaLinks).toHaveLength(4);
});

/* 
    Com o método not.toBeInTheDocument(); vamos verificar se algo realmente não 
    existe no documento, e se realmente não existir o teste vai passar. 
*/
test('Não deve renderizar o link para Extrato', () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText('Extrato');
  expect(linkExtrato).not.toBeInTheDocument();
});

/* 
    Vai percorrer todos os links do componente de Menu com forEach porque o metodo 
    getAllByRole retorna um array de dados que nessa caso é o links, e o metodo toHaveClass
    vai verificar se todos os links estão com a classe correta de 'link'
*/
test('Deve renderizar uma lista de links com a classe links', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
});
