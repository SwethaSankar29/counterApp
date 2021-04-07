import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "./ActionTypes";

const initialState = {
    count: 0,
};
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            {
                return {
                    count: state.count + 1,
                };
            }
        case DECREMENT_COUNT:
            {
                return {
                    count: state.count - 1,
                };
            }
        case RESET_COUNT:
            {
                return {
                    count: 0,
                };
            }
    }
    return state;
};
export default counterReducer;