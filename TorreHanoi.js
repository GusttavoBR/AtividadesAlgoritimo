programa {
  inteiro num_movimento = 0

  funcao inicio() {
      inteiro torre1 = 1, torre2 = 2, torre3 = 3, discos = 4
      escreva("Digite o número de discos que quer jogar: \n")
      leia(discos)
      moverDiscos(discos, torre1, torre2, torre3)
      escreva("\n Número de movimentos: ", num_movimento)
  }

  funcao moverDiscos(inteiro discos, inteiro torre1, inteiro torre2, inteiro torre3) {
    se (discos == 1) {
      num_movimento = num_movimento + 1
      escreva("Mover disco da torre", torre1, " para Torre ", torre3, "\n")
    } senao {
        num_movimento = num_movimento + 1
        moverDiscos(discos - 1, torre1, torre3, torre2)
        escreva("Mover disco da torre", torre1, " para a Torre ", torre3, "\n")
        moverDiscos(discos - 1, torre2, torre1, torre3)
    }
  }
}
