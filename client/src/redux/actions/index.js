import { TOGGLE_RYDES_TAB } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT_USER } from '../constants/action-types';

// Actions are objs, build an action with a simple function that takes 1 parameter.
// It returns a new ready to dispatch action obj with a "type" and a "payload".

export const toggleRydesTab = (rydesTabIsToggled) => (
  { type: TOGGLE_RYDES_TAB, payload: rydesTabIsToggled }
)

export const liftTokenToState = data => (
  {
    type: LIFT_TOKEN_TO_STATE,
    payload: {
      token: data.token,
      user: data.user
    }
  }
)

export const logout = () => (
  { type: LOGOUT_USER }
)

// Notes on Actions!

// The only way to change state is to send a signal to the store.
// dispatching that action is the process of sending that signal

// Actions are objects. E.g.:
// { type: 'ACTION_HERE', payload: thingYouWantToSendToStore }

// Naming your action - action names should be descriptive and reflect what they do
