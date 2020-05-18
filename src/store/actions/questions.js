
export const nextQuestion = () => {
    return {
        type: 'NEXT_QUESTION'
    }
}

export const prevQuestion = () => {
    return {
        type: 'PREV_QUESTION'
    }
}

export const setAnswer = (payload) => {
    return {
        type: 'SET_ANSWER',
        ...payload
    }
}


