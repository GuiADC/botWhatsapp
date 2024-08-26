import { VenomBot } from '../venom.js'
import { returnMessage } from './neighborhoods.js'
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

          msg = `Aqui no local temos passeio à cavalo, piscinas, campinho de futebol, pesca esportiva e pesque pague, parquinho infantil, trilha para caminhada, 
                 represa para banho. No day use, cobramos a entrada de 19,90 por pessoa que já dá livre acesso a pesca, piscina e trilha para caminhada. 
---------------------------------------------------------------------------------------------
                  0️⃣ - Menu anterior;`
            break;
        case '3':
          storage[params.from].stage = STAGES.RESUMO
          msg = `Para o day use não é necessário a reserva. Na hospedagem, pedimos metade do valor antecipado
                   para confirmar a reserva e os demais aceitamos cartão e parcelamos até 2x.–
---------------------------------------------------------------------------------------------
                  0️⃣ - Menu anterior;`
            break;
        case '4':
          storage[params.from].stage = STAGES.RESUMO
          msg = `Nos localizamos em Luziânia Goiás, 17 km do centro de Luziânia. Sentido caldas novas depois do mercado três vendas.–
---------------------------------------------------------------------------------------------
                  0️⃣ - Menu anterior;`
            break;
        case '5':
          storage[params.from].stage = STAGES.RESUMO
          msg = `Funcionamos o day use das 9:00 as 18:00, na hospedagem servimos o jantar as 20:00 e o café as 7:00
---------------------------------------------------------------------------------------------
                  0️⃣ - Menu anterior;`
            break;
        case '6':
          storage[params.from].stage = STAGES.RESUMO
          msg = `A pesca esportiva ja está inclusa no valor do day use de 19,90. Caso não tenha equipamento alguamos no local, mas sugerimos levar. 
            O peso dos peixes é bem vareado atendendo a todo publico e equipamento, os peixes chegam até 25Kg/ O lago da esportiva possui as especies: Tambaqui, Pacucaranha, Pintado, Surubim, Matrinxã e tilápia–
	          -opcao de voltar ao menu principal
---------------------------------------------------------------------------------------------
                  0️⃣ - Menu anterior;`
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
