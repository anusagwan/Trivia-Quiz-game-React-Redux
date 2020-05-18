const initialState = {
    selectedQuestion: -1,
   
    
  "assessment": [
    {
     "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
      "correct_answer": "Tango",
      "incorrect_answers": [
        "Target",
        "Taxi",
        "Tango",
        "Turkey"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
      "correct_answer": "Tango",
      "incorrect_answers": [
        "Target",
        "Taxi",
        "Tango",
        "Turkey"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What alcoholic drink is made from molasses?",
      "correct_answer": "Rum",
      "incorrect_answers": [
        "Gin",
        "Vodka",
        "Rum",
        "Whisky"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "How many colors are there in a rainbow?",
      "correct_answer": "7",
      "incorrect_answers": [
        "8",
        "7",
        "9",
        "10"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of these colours is NOT featured in the logo for Google?",
      "correct_answer": "Pink",
      "incorrect_answers": [
        "Yellow",
        "Blue",
        "Pink",
        "Green"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which American-owned brewery led the country in sales by volume in 2015?",
      "correct_answer": "D. G. Yuengling and Son, Inc",
      "incorrect_answers": [
        "Anheuser Busch",
        "Boston Beer Company",
        "D. G. Yuengling and Son, Inc",
        "Miller Coors"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which sign of the zodiac comes between Virgo and Scorpio?",
      "correct_answer": "Libra",
      "incorrect_answers": [
        "Gemini",
        "Taurus",
        "Capricorn",
        "Libra"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following is the IATA code for Manchester Airport?",
      "correct_answer": "MAN",
      "incorrect_answers": [
        "EGLL",
        "LHR",
        "EGCC",
        "MAN"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What nuts are used in the production of marzipan?",
      "correct_answer": "Almonds",
      "incorrect_answers": [
        "Peanuts",
        "Almonds",
        "Walnuts",
        "Pistachios"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The likeness of which president is featured on the rare $2 bill of USA currency?",
      "correct_answer": "Thomas Jefferson",
      "incorrect_answers": [
        "Thomas Jefferson",
        "Martin Van Buren",
        "Ulysses Grant",
        "John Quincy Adams"
      ]
    }
  ],

};


export default function (state = initialState, action) {
    switch(action.type){
        case 'NEXT_QUESTION':
            return {
                ...state,
                selectedQuestion: state.selectedQuestion + 1
            }
        case 'PREV_QUESTION':
            return {
                ...state,
                selectedQuestion: state.selectedQuestion - 1
            }
            case 'SET_QUESTION': 

            return { 
                ...state,
                assessment : state.assessment
            }
        default: 
            return state;
    }
}
