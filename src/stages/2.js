import { VenomBot } from '../venom.js'
import { returnMessage } from './messages.js'
import { storage } from '../storage.js'
import { STAGES } from './index.js'

export const stageTwo = {
  async exec(params) {
    const message = params.message.trim()
    const isMsgValid = /[1|2|3|4|5|6]/.test(message)

    let msg =
      '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️'

    if (isMsgValid) {
      switch (message) {
        case '1':
          storage[params.from].stage = STAGES.RESUMO
          msg = returnMessage(0)
        break;
        case '2':
          storage[params.from].stage = STAGES.RESUMO
          msg = returnMessage(1)
        break;
        case '3':
          storage[params.from].stage = STAGES.RESUMO
          msg = returnMessage(2)
        break;
        case '4':
          storage[params.from].stage = STAGES.RESUMO
          msg = returnMessage(3)
        break;
        case '5':
          storage[params.from].stage = STAGES.RESUMO
          msg = returnMessage(4)
        break;
        case '6':
          storage[params.from].stage = STAGES.RESUMO
          msg = returnMessage(5)
        break;
      }
    await VenomBot.getInstance().sendText({ to: params.from, message: msg })
  }
},
}


const options = {
  '1': () => {
    const message =
    'opcao  1'         
    return {
      message,
      nextStage: STAGES.RESUMO,
    }
  },   
  '2': () => {
    const message =
      '🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```'

    return {
      message,
      nextStage: STAGES.INICIAL,
    } 
  },   
  '3': () => {
    const message =
      '🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```'

    return {
      message,
      nextStage: STAGES.INICIAL,
    }  
  },    
  '4': () => {
    const message =
      '🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```'

    return {
      message,
      nextStage: STAGES.INICIAL,
    }  
  },    
  '5': () => {
    const message =
      '🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```'

    return {
      message,
      nextStage: STAGES.INICIAL,
    }  
  },    
  '6': () => {
    const message =
      '🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```'

    return {
      message,
      nextStage: STAGES.INICIAL,
    }  
  },    
  '*': () => {
    const message =
      '🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```'

    return {
      message,
      nextStage: STAGES.INICIAL,
    }
  },
  '#': () => {
    const message =
      '🗺️ Agora, informe o *ENDEREÇO*. \n ( ```Rua, Número, Bairro``` ) \n\n ' +
      '\n-----------------------------------\n*️⃣ - ```CANCELAR pedido```'

    return {
      message,
      nextStage: STAGES.RESUMO,
    }
  },
}
