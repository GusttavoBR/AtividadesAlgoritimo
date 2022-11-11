```js
Algoritmo "Jogo da Velha"
// 1 vs PC
// Jogo único
// Placar
// 1 - Tela de boas vindas
//   1.1 - Novo Jogo
// 2 - Verificação randomica de quem começa:P x CPU
// 3 - O jogador faz a sua jogada
//   3.1 - Verificação de ganhador ou empate
//   3.2 - Se 3.1 = false entao Retorna p/ o item 3 e quem joga é o oponente
//   3.3 - Se 3.1 - true entao Salvo  o placar e volto para o item 1
procedimento viewTab
inicio
   limpatela
   escreval("     |     |     ")
   escreval("  ", tabuleiro[1,1],"  |  ", tabuleiro[1,2],"  |  ", tabuleiro[1,3],"  ")
   escreval("     |     |     ")
   escreval("-----------------")
   escreval("     |     |     ")
   escreval("  ", tabuleiro[2,1],"  |  ", tabuleiro[2,2],"  |  ", tabuleiro[2,3],"  ")
   escreval("     |     |     ")
   escreval("-----------------")
   escreval("     |     |     ")
   escreval("  ", tabuleiro[3,1],"  |  ", tabuleiro[3,2],"  |  ", tabuleiro[3,3],"  ")
   escreval("     |     |     ")
fimprocedimento

procedimento verificaGanhador
inicio
   se (tabuleiro[1,1] = tabuleiro[1,2]) e (tabuleiro[1,2] = tabuleiro[1,3]) entao
      escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")
      cont <- 9
      escreva("Digite qualquer tecla para continuar...")
      leia (op)
   senao
      se (tabuleiro[2,1] = tabuleiro[2,2]) e (tabuleiro[2,2] = tabuleiro[2,3]) entao
         escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")
         cont <- 9
         escreva("Digite qualquer tecla para continuar...")
         leia (op)
      senao
         se (tabuleiro[3,1] = tabuleiro[3,2]) e (tabuleiro[3,2] = tabuleiro[3,3]) entao
            escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")
            cont <- 9
            escreva("Digite qualquer tecla para continuar...")
            leia (op)
         senao
            se (tabuleiro[1,1] = tabuleiro[2,1]) e (tabuleiro[2,1] = tabuleiro[3,1]) entao
               escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")
               cont <- 9
               escreva("Digite qualquer tecla para continuar...")
               leia (op)
            senao
               se (tabuleiro[1,2] = tabuleiro[2,2]) e (tabuleiro[2,2] = tabuleiro[3,2]) entao
                  escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")
                  cont <- 9
                  escreva("Digite qualquer tecla para continuar...")
                  leia (op)
               senao
                  se (tabuleiro[1,3] = tabuleiro[2,3]) e (tabuleiro[2,3] = tabuleiro[3,3]) entao
                     escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")
                     cont <- 9
                     escreva("Digite qualquer tecla para continuar...")
                     leia (op)
                  senao
                     se (tabuleiro[1,1] = tabuleiro[2,2]) e (tabuleiro[2,2] = tabuleiro[3,3]) entao
                        escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")

                        cont <- 9
                        escreva("Digite qualquer tecla para continuar...")
                        leia (op)
                     senao
                        se (tabuleiro[1,3] = tabuleiro[2,2]) e (tabuleiro[2,2] = tabuleiro[3,1]) entao
                           escrevaL("Parabéns, o jogador ", g, " Venceu o jogo !")
                           cont <- 9
                           escreva("Digite qualquer tecla para continuar...")
                           leia (op)
                        fimse
                     fimse
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
   se cont = 8 entao
      cont <- 9
      escreval("DEU VELHA!!! :-(")
      escreva("Digite qualquer tecla para continuar...")
      leia (op)
   fimse
fimprocedimento

procedimento resetTab
inicio
   cont <- 0
   para i de 1 ate 3 passo 1 faca
      para j de 1 ate 3 passo 1 faca
         cont <- cont + 1
         tabuleiro[i,j] <- NumpCarac(cont)
      fimpara
   fimpara
   viewTab
fimprocedimento
Var
   esc, x, j1, j2, g, c1, c2: caracter
   tabuleiro: vetor[1..3,1..3]de caracter
   i,j, cont, op, l: inteiro
   r: real
   erro: logico

Inicio
   enquanto (esc <> "n") ou (esc <> "N") faca
      limpatela
      escrevaL("_________________________________")
      escrevaL("BEM VINDO AO JOGO DA VELHA - GIR")
      escrevaL("_________________________________")
      escreval
      escreva("Novo jogo? [S/N] ")
      leia(esc)
      se (esc = "s") ou (esc = "S") entao
         resetTab
         r <- rand * 10

         escreval("Digite o nome do primeiro jogador: ")
         leia(j1)
         escreval("Digite o nome do segundo jogador: ")
         leia(j2)

         se r > 5 entao
            escreval
            c1 <- j2
            c2 <- j1
            escreval(j1, "= O")
            escreval(j2, "= X")
         senao
            escreval
            c1 <- j1
            c2 <- j2
            escreval(j1, " = X")
            escreval(j2, " = O")
         fimse
      fimse

      cont <- 0

      erro <- falso
      enquanto cont < 9 faca
         se (erro) entao
            escreval("Jogada Invalída, jogue de novo!")
            erro <- falso
         senao
            cont <- cont + 1
         fimse
         x <- "X"
         g <- c1
         se cont % 2 = 0 entao
            x <- "O"
            g <- c2
         fimse

         escreval(g, " digite um numero para ", x,": ")
         leia(op)
         escolha op

         caso 1
            se (tabuleiro[1,1] = "1") entao
               tabuleiro[1,1] <- x
            senao
               erro <- verdadeiro
            fimse

         caso 2
            se (tabuleiro[1,2] = "2") entao
               tabuleiro[1,2] <- x
            senao
               erro <- verdadeiro
            fimse
         caso 3
            se (tabuleiro[1,3] = "3") entao
               tabuleiro[1,3] <- x
            senao
               erro <- verdadeiro
            fimse

         caso 4
            se (tabuleiro[2,1] = "4") entao
               tabuleiro[2,1] <- x
            senao
               erro <- verdadeiro
            fimse
         caso 5
            se (tabuleiro[2,2] = "5") entao
               tabuleiro[2,2] <- x
            senao
               erro <- verdadeiro
            fimse
         caso 6
            se (tabuleiro[2,3] = "6") entao
               tabuleiro[2,3] <- x
            senao
               erro <- verdadeiro
            fimse

         caso 7
            se (tabuleiro[3,1] = "7") entao
               tabuleiro[3,1] <- x
            senao
               erro <- verdadeiro
            fimse
         caso 8
            se (tabuleiro[3,2] = "8") entao
               tabuleiro[3,2] <- x
            senao
               erro <- verdadeiro
            fimse
         caso 9
            se (tabuleiro[3,3] = "9") entao
               tabuleiro[3,3] <- x
            senao
               erro <- verdadeiro
            fimse

         outrocaso
            erro <- verdadeiro
         fimescolha

         viewTab
         se cont >= 5 entao
            verificaGanhador
         fimse
      fimenquanto
   fimenquanto
Fimalgoritmo
```
