
const initialState = {
    answersInfo: {}
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
            ...state,
            answersInfo: {
                ...state.answersInfo,
                [action.questionId]:action.answer
            } 
        };
        default:
      return {
        ...state,
      };
    }
    
}