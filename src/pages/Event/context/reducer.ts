export interface State {
  openLessonsTimeline: boolean
}

export const initialState: State = {
  openLessonsTimeline: false
}

export enum Types {
  toogleOpenLessonsTimeline = 'TOOGLE_OPEN_LESSONS_TIMELINE'
}

export type Actions = {
  type: Types.toogleOpenLessonsTimeline
}

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case Types.toogleOpenLessonsTimeline:
      return { ...state, openLessonsTimeline: !state.openLessonsTimeline }
    default:
      return state
  }
}
