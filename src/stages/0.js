import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
      👋 Olá, como vai?
      Eu sou chaybs, o *assistente virtual* da ${venombot.getSessionName}.
      *Posso te ajudar?* 🙋‍♂️
      -----------------------------------
      0️⃣ - Falar com atendente      
      2️⃣ - Produtos pirapitinga
      1️⃣ - menu
    `
    await venombot.sendText({ to: from, message })
  },
}
