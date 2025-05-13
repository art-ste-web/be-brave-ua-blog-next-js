const quest = [
  {
    text: "З яких основних частин складається причіпна гармата?",
    options: [
      { id: 0, text: "нижній станок та люлька", isCorrect: false },
      { id: 1, text: "ствол з затвором та лафет", isCorrect: true },
      { id: 2, text: "накатник та гальмо відкату", isCorrect: false },
    ],
    
  },
  {
    text: "Які вузли відсутні на схемі?",
    options: [
      { id: 0, text: "панорама, колеса, станини", isCorrect: false },
      { id: 1, text: "дульне гальмо, сошник, коліматор", isCorrect: false },
      { id: 2, text: "гальмо відкату, прицільні пристрої, верхній станок", isCorrect: true },
    ],
    qImg: '/images/quiz-img/art-constr-1.jpg'
  },
  {
    text: "Затвор призначений для ...",
    options: [
      { id: 0, text: "замикання і розмикання каналу ствола та здійснення пострілу", isCorrect: true },
      { id: 1, text: "захисту ствола від бруду", isCorrect: false },
      { id: 2, text: "врівноваження ствола", isCorrect: false },
    ],
  },
  
]

export default quest