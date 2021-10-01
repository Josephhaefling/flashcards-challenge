export const addQuestion = questions => {
  return ({
    type: 'ADD_QUESTIONS',
    questions
  })
};

export const updateQuestions = remainingQuestions => {
  return ({
    type: 'UPDATE_QUESTIONS',
    remainingQuestions
  })
}

export const setCurrentQuestion = question => {
  return ({
    type: 'SET_CURRENT_QUESTION',
    question
  })
}

export const addCorrectAnswer = value => {
  return ({
  type: 'UPDATE_SCORE',
  value
})}

export const addPreviousQuestion = previousQuestions => {
  return ({
  type: 'ADD_PREVIOUS_QUESTION',
  previousQuestions
})}

// export const updateCorrectAnswers = () => {
//   return ({
//     type: 'SET_CURRENT_QUESTION',
//   })
// }

export const addRound = currentRound => ({
  type: 'ADD_ROUND',
  currentRound
})

export const addCategory = currentCategory => {
  return ({
  type: 'ADD_CATEGORY',
  currentCategory
})}

