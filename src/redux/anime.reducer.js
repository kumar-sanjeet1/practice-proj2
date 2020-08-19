const INITIAL_STATE = {
    animes: [],
    search: {
        query: '',
        page: 1
    }
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case 'UPDATE_AMIMES':
            return {
                animes: state.animes.concat(action.payload),
                search: state.search
            }
         case 'UPDATE_SEARCH':
         return {
             animes: state.animes,
             search: {
                 query: action.payload,
                 page:  state.search.page + 1
             }
         }
         case 'DEFAULT' : {
             return INITIAL_STATE
         }


        default: 
            return state
    }
}
