export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export function reducer(state = 0, action: any) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      if (state !== 0) {
        return state - 1;
      }
    default:
      return state;
  }
}
