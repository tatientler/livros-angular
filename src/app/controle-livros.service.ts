import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Livro[] = [
    { codigo: 1, codEditora: 1, título: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor 1'] },
    { codigo: 2, codEditora: 2, título: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor 2'] },
    { codigo: 3, codEditora: 3, título: 'Livro C', resumo: 'Resumo do Livro C', autores: ['Autor 3'] }
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = this.obterProximoCodigo();
    livro.codigo = codigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

  private obterProximoCodigo(): number {
    const codigos = this.livros.map(l => l.codigo);
    const maxCodigo = Math.max(...codigos);
    return maxCodigo + 1;
  }
}
