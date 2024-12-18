class Arma {
  private nome: string
  private dano: number
  private descricao: string

  constructor(nome: string, dano: number, descricao: string) {
    this.nome = nome
    this.dano = dano
    this.descricao = descricao
  }
  // Getters
  public getNome(): string {
    return this.nome
  }

  public getDano(): number {
    return this.dano
  }

  public getDescricao(): string {
    return this.descricao
  }

  // Setters
  public setDano(dano: number): void {
    if (this.dano >= 0) this.dano = dano
  }
}
class Personagem {
  private nome: string
  private vida: number
  private forca: number
  private arma: Arma | null

  constructor(nome: string, vida: number, forca: number, arma: Arma | null) {
    this.nome = nome
    this.vida = vida
    this.forca = forca
    this.arma = arma
  }

  // Getters
  public getNome(): string {
    return this.nome
  }

  public getVida(): number {
    return this.vida
  }

  public getForca(): number {
    return this.forca
  }

  public getArma(): Arma {
    if (this.arma) return this.arma
  }

  // Setters
  public setNome(nome: string): void {
    this.nome = nome
  }

  public setVida(vida: number): void {
    this.vida = vida
  }

  public setForca(forca: number): void {
    this.forca = forca
  }

  public setArma(arma: Arma): void {
    this.arma = arma
  }

  // Métodos
  atacar(oponente: Inimigo) {
    const chanceDesucesso = Math.random()
    if (chanceDesucesso < 0.5) {
      console.log(`${this.getNome()} errou o ataque no ${oponente.getNome()}!`)
    } else {
      const dano = this.calcularDano()
      this.receberDano(dano, oponente)
    }
  }

  receberDano(dano: number, oponente: Personagem) {
    oponente.vida -= dano
    console.log(`${oponente.nome} foi atingido pelo ${this.nome} e teve ${dano} pontos de dano!`);
    if (oponente.vida <= 0) {
      console.log(`Você foi derrotado!`)
      oponente.vida = 0
    }
  }

  calcularDano() {
    const dano = this.getForca() + this.getArma().getDano()
    return dano    
  }

  equiparArma(arma: Arma){
    this.setArma(arma)
  }
}

class Inimigo extends Personagem {
    // Métodos
    atacar(oponente: Personagem) {
        const chanceDesucesso = Math.random()
        if (chanceDesucesso < 0.2) {
          console.log(`${this.getNome()} errou o ataque no ${oponente.getNome()}!`)
        } else {
          const dano = this.calcularDano()
          this.receberDano(dano, oponente)
        }
      }

      comportamentoAleatorio(jogador: Personagem){
        const chanceDesucesso = Math.random()
        if (chanceDesucesso < 0.5) {
          console.log(`${this.getNome()} observar o oponente ${jogador.getNome()}`)
        } else {
          this.atacar(jogador)
        }
      }
}

const espadaLonga = new Arma(
    'Espada Longa',
    30,
    'Uma espada afiada e resistente, ideal para combates corpo a corpo.'
  );
  
  const arcoCurto = new Arma(
    'Arco Curto',
    25,
    'Um arco leve e rápido, excelente para ataques à distância.'
  );
  
  const machadoDeBatalha = new Arma(
    'Machado de Batalha',
    40,
    'Um machado pesado, capaz de causar grandes danos com golpes poderosos.'
  );

const guerreiro = new Inimigo("Guerreiro Valente", 100, 20, machadoDeBatalha);
const mago = new Inimigo("Mago Sábio", 60, 15, espadaLonga);
const arqueiro = new Inimigo("Arqueiro Ágil", 80, 10, arcoCurto);
const curandeiro = new Inimigo("Curandeira Gentil", 70, 5, null);
const ladrao = new Inimigo("Ladrão Sorrateiro", 90, 12, null);

const cavaleiro = new Personagem("Cavaleiro rápido", 100, 30, espadaLonga);

cavaleiro.atacar(guerreiro)
mago.atacar(cavaleiro)
arqueiro.comportamentoAleatorio(cavaleiro)
cavaleiro.atacar(ladrao)
curandeiro.comportamentoAleatorio(cavaleiro)