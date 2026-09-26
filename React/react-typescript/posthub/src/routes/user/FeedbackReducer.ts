
type Action =
    | { type: "reset" }
    | { type: "good", appreciation: string }
    | { type: "bad", escalation: string }

type Feedback = {
    feedback: boolean | null,
    appreciation: string,
    escalation: string
}

export const FEEDBACK_INIT_STATE: Feedback = {
    feedback: null,
    appreciation: "",
    escalation: ""
}

export function FeedbackReducer(state = FEEDBACK_INIT_STATE, action: Action) {
    switch (action.type) {
        case "good":
            return { ...state, appreciation: action.appreciation, escalation: '', feedback: 'good' }
            break;
        case "bad":
            return { ...state, escalation: action.escalation, appreciation: '', feedback: 'bad' }
            break;
        case "reset":
            return FEEDBACK_INIT_STATE
            break;
        default:
            break;
    }
}