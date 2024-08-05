import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
      Seja bem vindo ao Pirapitinga! Somos um Hotel Fazenda, localizado em Luziânia Goiás, 
      pensando em você que procura um lugar aconchegante para descanso e lazer!
      No nosso local não é permitido a entrada de comida e bebida. 
      Nosso Day Use é R$ 19,90 por pessoa, funcionamos de quinta a domingo e feriados! 
      Eu sou o Bot Pirapitinga, estou aqui para tirar suas dúvidas.  
      Caso prefira ligação: (61)996191277 😍🙏❤️🤩

      0️⃣ - continuar atendimento!
    `
    await venombot.sendText({ to: from, message })
  },
}
// Qual sua dúvida de hoje? É só digitar um dos números, ou escolher no menu!

// -----------------------------------
// 1️⃣ - Mais informações para hospedagem
// 2️⃣ - Como funciona o Day use
// 3️⃣ - É necessário fazer reserva?
// 4️⃣ - Localização
// 5️⃣ - Qual o horário de funcionamento
// 6️⃣ - Como funciona a pesca esportiva?
