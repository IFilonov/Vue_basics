// объект с иерархиев разделов, этот обоъект экспортируется в этом файле и в хедере импортировать
export default {
  entries: [
    {
      id: "vx",
      name: "Входящие",
      desc: "Входящие документы, которые присылают нам",
      types: [
        {
          name: "Письмо",
          id: "vx-letter",
          desc: "Описание письма дополнительное"
        },
        {
          name: "Запрос",
          id: "vx-req",
          desc: "Описание запроса дополнительное"
        },
        {
          name: "Претензия",
          id: "vx-comm",
          desc: "Описание претензии дополнительное"
        }
      ]
    },
    {
      id: "isx",
      name: "Исходящие",
      desc: "Исходящие документы, которые отправляем мы",
      types: [
        {
          name: "Письмо",
          id: "isx-letter",
          desc: "Описание письма дополнительное"
        },
        {
          name: "Ответ",
          id: "isx-answ",
          desc: "Описание ответа дополнительное"
        },
        {
          name: "Коммерческое предложение",
          id: "isx-kp",
          desc: "Описание коммерч. предложения дополнительное"
        }
      ]
    },
    {
      id: "vn",
      name: "Внутренние",
      desc: "Внутренние документы, служебные записки",
      types: [
        {
          name: "Служебная записка",
          id: "vn-sz",
          desc: "Описание служебной записки дополнительное"
        },
        {
          name: "Распоряжение",
          id: "vn-rasp",
          desc: "Описание распоряжение дополнительное"
        },
        {
          name: "Инструкция",
          id: "vn-instr",
          desc: "Описание инструкции дополнительное"
        }
      ]
    },
    {
      id: "dog",
      name: "Договоры",
      desc: "Договоры документы, коммерческие предложения",
      types: [
        {
          name: "Трудовой",
          id: "dg-trud",
          desc: "Описание трудового договора"
        },
        {
          name: "Подрядный",
          id: "dg-podr",
          desc: "Описание подрядного договора"
        },
        {
          name: "Абонентский",
          id: "dg-subs",
          desc: "Описание абонентского договора"
        }
      ]
    }
  ]
}
