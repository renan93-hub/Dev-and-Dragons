import { Personagem } from "./personagem.js"

export class Guerreiro extends Personagem{
    static tipo = 'Guerreiro'
    static descricao = 'Com sua espada e armadura pesada, sempre está pronto para a batalha'
    forca 

    constructor(nome, forca){
    super(nome)
    this.forca = forca
    }

    obterInsignia(){
        if(this.forca >= 5){
            return `Guerreiro da Ordem`
        }
        return super.obterInsignia()
    }
}
