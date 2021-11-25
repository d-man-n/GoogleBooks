const items = (state = 0, action) => {
    switch(action.type) {
        case 'MORE_BOOKS':
            console.log(state)
            return state;

        default:
            return state;
    }
  } 

export default items;