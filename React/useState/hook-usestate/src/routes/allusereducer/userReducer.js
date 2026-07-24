export const ACTION_TYPES = {
    REVERSE_GENDER: 'REVERSE_GENDER',
    REVERSE_CATEGORY: 'REVERSE_CATEGORY',
    REVERSE_QUOTA: 'REVERSE_QUOTA',
    INCREMENT_BACKLOGS: 'INCREMENT_BACKLOGS'
}

export const INIT_STATE = {
    rollNumber: '$123',
    fullName: 'Pushpendra Kulshreshtha',
    address: { city: 'Patna', state: 'BR' },
    male: true,
    general: true,
    quota: false,
    backlogs: 0
}

const userReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case 'REVERSE_GENDER':
            return { ...state, male: !state.male }
        case 'REVERSE_CATEGORY':
            return { ...state, general: !state.general };
        case 'REVERSE_QUOTA':
            return { ...state, quota: !state.quota };
        case 'INCREMENT_BACKLOGS':
            return { ...state, backlogs: state.backlogs + action.payload.count };
        default:
            return state;
    }
}

export default userReducer;