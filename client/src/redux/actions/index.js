import { TOGGLE_RYDES_TAB } from '../constants/action-types';
import { LIFT_CURRENT_PAGE_TO_STATE } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LIFT_UPDATED_USER } from '../constants/action-types';
import { LOGOUT_USER } from '../constants/action-types';
import { LIFT_CLICKED_USER } from '../constants/action-types';
import { LIFT_BIG_SEARCH } from '../constants/action-types';
import { LIFT_MINI_SEARCH } from '../constants/action-types';
import { LIFT_MY_RYDES_DRYVES } from '../constants/action-types';
import { LIFT_CURRENT_RYDE } from '../constants/action-types';

export const toggleRydesTab = (data) => (
  {
    type: TOGGLE_RYDES_TAB,
    payload: data
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

export const liftUpdatedUser = user => (
  {
    type: LIFT_UPDATED_USER,
    payload: user
  }
)

export const logout = () => (
  { type: LOGOUT_USER }
)

export const liftClickedUser = data => (
  {
    type: LIFT_CLICKED_USER,
    payload: data
  }
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

export const liftCurrentRyde = data => (
  {
    type: LIFT_CURRENT_RYDE,
    payload: {
      currentRyde: data
    }
  }
)
