const page = (state = 0, action) => {
    switch(action.type) {
        case 'MORE_BOOKS':
            return ++state;

        default:
            return state;
    }
  } 

export default page;