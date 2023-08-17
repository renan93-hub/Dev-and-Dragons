import { Personagem } from "./module/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./module/mago.js"
import { Arqueiro } from "./module/arqueiro.js"
import { ArqueiroMago } from "./module/arqueiro-mago.js"
import { Guerreiro } from "./module/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10)
const arqueiroFlavio = new Arqueiro('Flavio', 8, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroLucas = new Guerreiro('Lucas', 8)
const guerreiroFred = new Guerreiro('Fred', 4)

const personagens = [magoAntonio, magaJulia, arqueiroFlavio, arqueiroMagoChico, guerreiroLucas, guerreiroFred]


new PersonagemView(personagens).render()
//console.log(Personagem.verificarVencedor(arqueiroFlavio, magoAntonio))



