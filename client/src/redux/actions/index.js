import { TOGGLE_RYDES_TAB } from '../constants/action-types';
import { LIFT_CURRENT_PAGE_TO_STATE } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT_USER } from '../constants/action-types';
import { LIFT_BIG_SEARCH } from '../constants/action-types';
import { LIFT_MINI_SEARCH } from '../constants/action-types';
import { LIFT_MY_RYDES_DRYVES } from '../constants/action-types';

export const toggleRydesTab = (rydesTabIsToggled) => (
  { 
    type: TOGGLE_RYDES_TAB, 
    payload: rydesTabIsToggled
  }
)

export const liftCurrentPageToState = page => (
  { type: LIFT_CURRENT_PAGE_TO_STATE, payload: page }
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

export const liftBigSearch = data => (
  {
    type: LIFT_BIG_SEARCH,
    payload: {
      searchResults: data
    }
  }
)

export const liftMiniSearch = data => (
  {
    type: LIFT_MINI_SEARCH,
    payload: {
      searchResults: data
    }
  }
)

export const liftMyRydesDryves = data => (
  {
    type: LIFT_MY_RYDES_DRYVES,
    payload: {
      myRydesDryves: data
    }
  }
)
