const items = (state = 0, action) => {
    switch(action.type) {
        case 'MORE_BOOKS':
            state=action.items;
            return state;

        default:
            return state;
    }
  } 

export default items;