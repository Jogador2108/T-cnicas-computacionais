import { aleatorio, afirmacoes } from "./aleatorio.js";

export const perguntas = {
  inicio: {
    texto: "Você acorda em uma floresta misteriosa com três caminhos à sua frente. Qual caminho escolhe?",
    opcoes: {
      "Seguir a trilha iluminada": "trilha",
      "Entrar na caverna escura": "caverna",
      "Explorar a floresta densa": "floresta"
    }
  },
  trilha: {
    texto: "A trilha leva até uma vila antiga. Os moradores parecem desconfiados.",
    opcoes: {
      "Conversar com os moradores": "vila",
      "Seguir sem interagir": "selva",
      "Observar de longe": "espiar"
    }
  },
  caverna: {
    texto: "Dentro da caverna, você encontra uma tocha e ouve ruídos estranhos.",
    opcoes: {
      "Acender a tocha": "tocha",
      "Seguir no escuro": "escuro",
      "Voltar para fora": "inicio"
    }
  },
  floresta: {
    texto: "A floresta está cheia de ruídos e você vê algo se mexendo entre as árvores.",
    opcoes: {
      "Investigar o movimento": "criatura",
      "Seguir em frente rapidamente": "selva",
      "Subir em uma árvore para observar": "arvore"
    }
  },
  vila: {
    texto: "Os moradores dizem que o artefato está protegido por enigmas e criaturas misteriosas.",
    opcoes: {
      "Pedir ajuda": "ajuda",
      "Tentar sozinho": "enigmas",
      "Desistir da missão": "final_desistir"
    }
  },
  espiar: {
    texto: "Você descobre que eles guardam mapas secretos com pistas sobre o artefato.",
    opcoes: {
      "Roubar o mapa": "mapa",
      "Tentar se aproximar amigavelmente": "vila",
      "Voltar para trilha": "trilha"
    }
  },
  selva: {
    texto: "Animais selvagens bloqueiam seu caminho. Eles parecem agressivos.",
    opcoes: {
      "Tentar passar com cuidado": "passagem",
      "Fugir correndo": "fuga",
      "Enfrentar os animais": "final_morte"
    }
  },
  tocha: {
    texto: "As inscrições nas paredes dizem: 'A coragem é o caminho, mas a sabedoria salva'.",
    opcoes: {
      "Seguir com a tocha acesa": "profundo",
      "Apagar a tocha": "escuro",
      "Tentar decifrar as inscrições": "inscricoes"
    }
  },
  escuro: {
    texto: "Você tropeça no escuro e cai em um buraco profundo.",
    opcoes: {
      "Aceitar o destino": "final_morte",
      "Gritar por socorro": "final_salvo"
    }
  },
  criatura: {
    texto: "Uma criatura estranha aparece. Ela olha para você com curiosidade.",
    opcoes: {
      "Lutar": "final_morte",
      "Oferecer comida": "amizade",
      "Fugir": "selva"
    }
  },
  amizade: {
    texto: "A criatura se torna sua aliada e guia você até o artefato.",
    opcoes: {
      "Pegar o artefato": "final_vitoria",
      "Deixar o artefato": "final_sabedoria"
    }
  },
  arvore: {
    texto: "Do alto da árvore, você vê um caminho secreto que leva a uma caverna iluminada.",
    opcoes: {
      "Seguir para a caverna": "caverna",
      "Descer e seguir a floresta": "selva"
    }
  },
  ajuda: {
    texto: "Os moradores revelam um atalho seguro até o artefato.",
    opcoes: {
      "Seguir o atalho": "profundo",
      "Agradecer e ir embora": "final_sabedoria"
    }
  },
  enigmas: {
    texto: "Após resolver enigmas complexos, você chega a uma sala com o artefato.",
    opcoes: {
      "Pegar o artefato": "final_vitoria",
      "Destruir o artefato": "final_sabedoria"
    }
  },
  inscricoes: {
    texto: "As inscrições alertam: 'Somente os dignos serão recompensados'.",
    opcoes: {
      "Continuar avançando": "profundo",
      "Ignorar e seguir": "final_maldicao"
    }
  },
  passagem: {
    texto: "Você passa pelos animais sem ferimentos e encontra uma ponte sobre um rio.",
    opcoes: {
      "Atravessar a ponte": "profundo",
      "Contornar o rio": "selva"
    }
  },
  fuga: {
    texto: "Você corre e se perde, mas encontra uma cabana abandonada.",
    opcoes: {
      "Entrar na cabana": "cabana",
      "Seguir sem parar": "selva"
    }
  },
  cabana: {
    texto: "Dentro da cabana, você encontra pistas antigas sobre o artefato.",
    opcoes: {
      "Seguir as pistas": "profundo",
      "Ignorar e descansar": "final_salvo"
    }
  },
  profundo: {
    texto: "Você chega ao local do artefato. Ele brilha intensamente sobre um pedestal.",
    opcoes: {
      "Pegar o artefato": "final_vitoria",
      "Observar de longe": "final_sabedoria",
      "Destruir o pedestal": "final_maldicao"
    }
  },

  // FINAIS
  final_vitoria: {
    texto: "🎉 Você conquistou o artefato! " + aleatorio(afirmacoes),
    opcoes: {}
  },
  final_sabedoria: {
    texto: "🧘 Você escolheu a sabedoria sobre a ambição. O verdadeiro tesouro foi o aprendizado.",
    opcoes: {}
  },
  final_maldicao: {
    texto: "💀 Ignorar os avisos trouxe uma maldição eterna.",
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
    texto: "🙌 Alguém ouviu seus gritos e salvou sua vida, mas a missão ficou incompleta.",
    opcoes: {}
  }
};
