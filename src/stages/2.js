import { VenomBot } from '../venom.js'
import { menu } from '../menu.js'
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
          
          msg = `Aqui no local temos passeio à cavalo, piscinas, campinho de futebol, pesca esportiva e pesque pague, parquinho infantil, trilha para caminhada, represa para banho.
                    Na hospedagem fazemos pacotes incluindo o jantar no primeiro dia, e café da manhã e almoço no segundo!
                    casal: 480,00
                    casal + 1 filho de até 12 anos: 590,00
                    casal + 2 solteiros: 820,00
                    chalé para até 10 pessoas: 1.990,00

---------------------------------------------------------------------------------------------
                  0️⃣ - Menu anterior;`
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
            msg = `Nos localizamos em Luziânia Goiás, 17 km do centro de Luziânia. Sentido caldas novas depois do mercado três vendas.–;`
            break;
        case '5':
          storage[params.from].stage = STAGES.RESUMO          
            msg = 'Você escolheu a opção 5.';
            break;
        case '6':
          storage[params.from].stage = STAGES.RESUMO
            msg = 'Você escolheu a opção 6.';
            break;      
    }
    }

    await VenomBot.getInstance().sendText({ to: params.from, message: msg })
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
