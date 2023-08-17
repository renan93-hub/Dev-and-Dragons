import { Mago } from "./mago.js";
import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./personagem.js";


export class ArqueiroMago extends Personagem{
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao = 'Um mago muito habilidoso ou um arqueiro muito inteligente'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}