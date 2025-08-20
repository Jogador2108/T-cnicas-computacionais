import { aleatorio, afirmacoes } from "./aleatorio.js";

export const perguntas = {
  inicio: {
    texto: "Você é um explorador em busca de um artefato perdido dentro de uma floresta misteriosa. O que deseja fazer primeiro?",
    opcoes: {
      "Seguir pela trilha iluminada": "trilha",
      "Explorar a caverna escura": "caverna",
      "Montar um acampamento seguro": "acampamento"
    }
  },
  trilha: {
    texto: "Você segue pela trilha e encontra uma vila antiga. Os moradores parecem desconfiados.",
    opcoes: {
      "Conversar com os moradores": "vila",
      "Ignorar e seguir em frente": "selva",
      "Observar escondido": "espiar"
    }
  },
  caverna: {
    texto: "Na caverna, você escuta barulhos estranhos ecoando. Uma tocha está no chão.",
    opcoes: {
      "Acender a tocha": "tocha",
      "Avançar no escuro": "escuro",
      "Voltar para fora": "inicio"
    }
  },
  acampamento: {
    texto: "Você monta o acampamento. Durante a noite, algo se aproxima.",
    opcoes: {
      "Investigar o barulho": "criatura",
      "Ficar quieto": "seguro",
      "Fugir imediatamente": "selva"
    }
  },
  vila: {
    texto: "Os moradores dizem que o artefato está protegido por enigmas perigosos.",
    opcoes: {
      "Pedir ajuda": "ajuda",
      "Desafiar os enigmas sozinho": "enigmas",
      "Desistir da missão": "final_desistir"
    }
  },
  espiar: {
    texto: "Você observa escondido e descobre que eles guardam mapas secretos.",
    opcoes: {
      "Roubar o mapa": "mapa",
      "Tentar fazer amizade": "vila",
      "Voltar para trilha": "trilha"
    }
  },
  selva: {
    texto: "Na selva, você encontra animais selvagens bloqueando o caminho.",
    opcoes: {
      "Tentar domar os animais": "domar",
      "Fugir rápido": "fuga",
      "Atacar": "final_morte"
    }
  },
  tocha: {
    texto: "Com a tocha acesa, você encontra inscrições antigas em uma parede.",
    opcoes: {
      "Traduzir inscrições": "inscricoes",
      "Seguir adiante": "profundo",
      "Apagar a tocha": "escuro"
    }
  },
  escuro: {
    texto: "No escuro, você tropeça e cai em um buraco sem fim.",
    opcoes: {
      "Aceitar o destino": "final_morte",
      "Gritar por ajuda": "final_salvo"
    }
  },
  criatura: {
    texto: "Uma criatura estranha aparece no acampamento.",
    opcoes: {
      "Lutar contra ela": "final_morte",
      "Fugir para floresta": "selva",
      "Oferecer comida": "amizade"
    }
  },
  amizade: {
    texto: "A criatura se torna sua aliada e o guia até o artefato perdido!",
    opcoes: {
      "Pegar o artefato": "final_vitoria",
      "Deixar o artefato": "final_sabedoria"
    }
  },
  ajuda: {
    texto: "Os moradores aceitam ajudá-lo e revelam um caminho secreto.",
    opcoes: {
      "Seguir pelo caminho": "profundo",
      "Agradecer e ir embora": "final_sabedoria"
    }
  },
  enigmas: {
    texto: "Os enigmas testam sua mente. Após muito esforço, você chega ao artefato.",
    opcoes: {
      "Pegar o artefato": "final_vitoria",
      "Destruir o artefato": "final_sabedoria"
    }
  },
  inscricoes: {
    texto: "As inscrições revelam: 'Somente o digno terá poder'.",
    opcoes: {
      "Continuar avançando": "profundo",
      "Ignorar o aviso": "final_maldicao"
    }
  },
  profundo: {
    texto: "Você encontra o artefato brilhando em um pedestal. O que fazer?",
    opcoes: {
      "Pegar o artefato": "final_vitoria",
      "Observá-lo de longe": "final_sabedoria",
      "Destruir o pedestal": "final_maldicao"
    }
  },

  // FINAIS
  final_vitoria: {
    texto: "🎉 Você conquistou o artefato e completou a missão com sucesso! " + aleatorio(afirmacoes),
    opcoes: {}
  },
  final_sabedoria: {
    texto: "🧘 Você escolheu a sabedoria acima da ambição. O verdadeiro tesouro foi o aprendizado.",
    opcoes: {}
  },
  final_maldicao: {
    texto: "💀 Ao desafiar o aviso, você libertou uma maldição eterna.",
    opcoes: {}
  },
  final_morte: {
    texto: "☠️ Sua jornada terminou de forma trágica.",
    opcoes: {}
  },
  final_desistir: {
    texto: "🚪 Você desistiu da missão e voltou para casa sem glória.",
    opcoes: {}
  },
  final_salvo: {
    texto: "🙌 Alguém ouviu seus gritos e salvou sua vida. Mas a missão ficou incompleta.",
    opcoes: {}
  }
};
