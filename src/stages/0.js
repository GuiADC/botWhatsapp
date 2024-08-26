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
