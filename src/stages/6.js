import { VenomBot } from '../venom.js'
import { storage } from '../storage.js'
import { STAGES } from './index.js'
import { stageOne } from './1.js'

export const DayUseHotel = {
  async exec({ from, message }) {
    storage[from].address = message

    let msg = ' ❌ *Digite uma opção válida, por favor.*'
    if (message === '0') {
      storage[from].stage = STAGES.MENU;
      // Chama o método exec do stageOne para enviar as opções e mensagens
      await stageOne.exec({ from, message: '0' });
    } else {await VenomBot.getInstance().sendText({ to: from, message:  msg})} 
    
    // return '✅ *Prontinho, pedido feito!* \n\nAgora, se você ainda não sabe o valor da taxa de entrega para sua região, vou te passar para um atendente para que ele verique o valor da *taxa de entrega*. \n\n⏳ *Aguarde um instante*.'
  },
}
