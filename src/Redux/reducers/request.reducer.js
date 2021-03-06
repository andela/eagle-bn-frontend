import constants from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

const RequestReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GETREQUEST_PENDING:
			return Object.assign({}, state, {
				pending: true,
				payload: null,
				error: null,
			});
		case constants.GETREQUEST_SUCCESS:
			return Object.assign({}, state, {
				pending: false,
				payload: action.payload,
				error: null,
			});
		case constants.GETREQUEST_ERROR:
			return Object.assign({}, state, {
				pending: false,
				payload: null,
				error: action.error,
			});
		default:
			return state;
	}
};

export default RequestReducer;
