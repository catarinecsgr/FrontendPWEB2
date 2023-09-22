import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;

  constructor() {
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log(this.anuncio + 'está em promoção');
    console.log(this.anuncio);
    console.log('Id do Produto:', this.idProduto);
    console.log('Preço do Produto: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    /*var idade = 10;
    console.log('Minha idade é:', idade);*/

    /*let idade = 10;
    console.log ('Minha idade é:', idade)*/

    /*function imprimeIdade() {
      var idade = 20;
      console.log('Minha idade é:', idade)
    }

    imprimeIdade()*/

    /*function imprimeIdade()
    {
      for (var idade = 30; idade <= 40; idade++)
      {console.log('Idade dentro do for:', idade)}
      console.log('Idade fora do for:', idade)
    }

    imprimeIdade()*/

    /*function imprimeIdade()
    {
      for (let idade = 30; idade <= 40; idade++)
      {console.log('Idade dentro do for:', idade)}
      console.log('Idade fora do for:', idade)}*/

      //EXERCÍCIOS DE VARIÁVEIS - AULA 21/09/2023
      //1)Qual o resultado das variáveis abaixo: variavel e outra_variavel. Apresenta algum erro? Se sim, por quê?

      //2)Troque o var pelo let. Qual o resultado das variáveis abaixo: variavel e outra_variavel. Apresenta algum erro? Se sim, por quê?

      //3)Qual o resultado das variáveis:
      //a.Variável a dentro do if:
      //b.Variável b dentro do if:
      //c.Variável a dentro da função:
      //d.Variável b dentro da função:
      //e.Variável a fora da função:
      //f.Variável b fora da função:

      //4)Qual o resultado das variáveis:
      //a.Variável a:
      //b.Variável a dentro do if:
      //c.Variável b dentro do if:
      //d.Variável c dentro do if:
      //e.Variável a fora do if:
      //f.Variável b fora do if:
      //g.O que acontece com a variável c fora do if, se tirarmos o comentário? Por que?

      //5)Qual o resultado das variáveis:
      //a.Variável a dentro do if:
      //b.Variável b dentro do if:
      //c.Variável a fora do if:
      //d.Variável b fora do if:

      let variavel = 0;
      let variavel = 10;
      console.log('variável', variavel);
      function funcao() {
        let outra_variavel = 20;
        let outra_variavel = 30;
        console.log('outra variável:', outra_variavel);
      }
      funcao();

  }
  ngOnInit(): void {}
}
