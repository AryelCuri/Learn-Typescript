export default class Capitulo5{
    exercicio1 = (): void => {
        console.log('capitulo 5.1 Fácil: Declare um enum para representar os dias da semana')
        enum DiasDaSemana {
        Domingo = 1,
        Segunda,
        Terca,
        Quarta,
        Quinta,
        Sexta,
        Sabado
      }
      console.log(DiasDaSemana)
      }   
      
      exercicio2 = (): void => {
        console.log('capitulo 5.2 Fácil: Utilize um enum para representar os meses do ano')
        
      enum MesesDoAno {
        Jan = 1,
        Fev,
        Mar,
        Abr,
        Mai,
        Jun,
        Jul,
        Ago,
        Set,
        Out,
        Nov,
        Dez
      
      }
        console.log(MesesDoAno)
      } 
      
      exercicio3 = (): void => {
        console.log('capitulo 5.3 Fácil: Crie um enum para os pontos cardeais (norte, sul, leste, oeste)')
        
      enum PontosCardeais {
        Norte = 'Norte',
        Nordeste = 'Nordeste',
        Leste = 'Leste',
        Sudeste = 'Sudeste',
        Sul = 'Sul',
        Sudoeste = 'Sudoeste',
        Oeste = 'Oeste',
        Noroeste ='Noroeste'
       
      
      }
      console.log(PontosCardeais)
      }   
      
      exercicio4 = (): void => {
        console.log('capitulo 5.4 Fácil: Defina um enum para representar as estações do ano')
        
      enum Estacoes {
        Primavera = 'plantas crescem',
        Outono = 'folhas caem',
        Inverno = 'frio',
        Verao = 'calor'
       
      
      }
      console.log(Estacoes)
      }   
      
      exercicio5 = (): void => {
        console.log('capitulo 5.5 Moderado: Utilize um enum para representar os tipos sanguíneos (A, B, AB, O)')
      enum TipoSanguineo {
        A = 'A',
        B = 'B',
        AB = 'AB',
        O = 'O'
      }
      console.log(TipoSanguineo)
      }
      
      exercicio6 = (): void => {
        console.log('capitulo 5.6 Moderado: Declare um enum para os planetas do sistema solar.')
      enum Planetas {
        Saturno = '6°',
        Urano = '7°',
        Netuno = '8°',
        Mercurio ='1°',
        Venus = '2°',
        Marte = '4°',
        Terra = '3°',
        Jupter = '5°'
       
      }
      console.log(Planetas)
      }
      
      exercicio7 = (): void => {
        console.log('capitulo 5.7 Moderado: Crie um enum para os principais tipos de moedas')
      enum TipoMoeda {
        DOLAR = 'Dólar = 4.94 R$',
        EURO = 'Euro = 5.37 R$',
        LIBRA = 'Libra = 6.27 R$',
        IENE = 'Iene = 0.0333',
      }
        console.log(TipoMoeda)
        console.log(TipoMoeda.DOLAR)
      }
      
      exercicio8 = (): void => {
        console.log('capitulo 5.8 Difícil: Desenvolva um enum para as peças de xadrez')
      enum Tabuleiro {
        WK = 'White King',
        WR = 'White Rook',
        WQ = 'White Queen',
        WB = 'White Bishop',
        WN ='White Knight',
        WP = 'White Pawn',
        BK = 'Black King',
        BR = 'Black Rook',
        BQ = 'Black Queen',
        BB = 'Black Bishop',
        BN = 'Black Knight',
        BP = 'Black Pawn'
      }
        console.log(Tabuleiro)
        console.log(Tabuleiro.WN)
      }
      
}