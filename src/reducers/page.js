const page = (state = 0, action) => {
    switch(action.type) {
        case 'MORE_BOOKS':
            state=++action.page;
            return state;

        default:
            return state;
    }
  } 

export default page;