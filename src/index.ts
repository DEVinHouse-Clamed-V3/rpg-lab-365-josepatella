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
        return this.nome;
    }

    public getDano(): number {
        return this.dano;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    // Setters
    public setDano(dano: number): void {
        if (this.dano >= 0) this.dano = dano;
    }
}