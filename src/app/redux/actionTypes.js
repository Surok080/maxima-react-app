import { THEMA } from "./actions"

export const toogleThema = (them) => {
  return {
    type: THEMA,
    them: them,
  }
}
