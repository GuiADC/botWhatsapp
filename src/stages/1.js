import { VenomBot } from '../venom.js'
import { menu } from '../menu.js'
import { storage } from '../storage.js'
import { neighborhoods } from './neighborhoods.js'
import { initialStage } from './0.js'
import { STAGES } from './index.js'

export const stageOne = {
  async exec(params) {
    const message = params.message.trim()
    const isMsgValid = /[0]/.test(message)
    // const isMsgValid = /0/.test(message)

    let msg =
      '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️'

    if (isMsgValid) {
      const option = options[Number(message)]()
      msg = option.message
      storage[params.from].stage = option.nextStage || STAGES.INICIAL
      console.log(option.nextStage)
    }

    await VenomBot.getInstance().sendText({ to: params.from, message: msg })
    if (storage[params.from].stage === STAGES.INICIAL) {
      await initialStage.exec(params)
    } else if (storage[params.from].stage === STAGES.FALAR_COM_ATENDENTE) {
      storage[params.from].finalStage = {
        startsIn: new Date().getTime(),
        endsIn: new Date().setSeconds(60), // 1 minute of inactivity
      }
    }
  },
}

const options = {
  0: () => {
    return {
      message: `
   1️⃣ - Mais informações para hospedagem
   2️⃣ - Como funciona o Day use
   3️⃣ - É necessário fazer reserva?
   4️⃣ - Localização
   5️⃣ - Qual o horário de funcionamento
   6️⃣ - Como funciona a pesca esportiva?
`,
      nextStage: STAGES.MENU,
    }
  },
  1: () => {
    let message = '🚨  CARDÁPIO  🚨\n\n'

    Object.keys(menu).forEach((value) => {
      message += `${numbers[value]} - _${menu[value].description}_ \n`
    })

    return {
      message,
      nextStage: STAGES.CARRINHO,
    }
  },
  2: () => {
    const message =
      '\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE```\n\n' +
      neighborhoods +
      '\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE``` '

    return {
      message,
      nextStage: null,
    }
  },
}

const numbers = {
  0: '0️⃣',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
}
