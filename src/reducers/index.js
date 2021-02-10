
   
   
   export default function appReducer(state = [], action){

        switch (action.type) {
            case 'ADD_COUNTRY': 
            return [...state, action.payload]

            case 'EXCLUDE_COUNTRY':
                return state.filter(country => country !== action.payload)
                
        
            default:
                return state
        }
   }