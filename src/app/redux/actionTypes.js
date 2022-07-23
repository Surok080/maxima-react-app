import { REGISTRATION_USER } from "./actions"
import { THEMA } from "./actions"

export const user = (user) => {
  return {
    type: REGISTRATION_USER,
    name: user.name,
    email: user.email,
    password: user.password,
  }
}

// export const offset = (offset) => {
//   return {
//     type: OFFSET,
//     offset: offset,
//   }
// }

export const slaiderContent = (urlArray) => {
  return {
    type: URL,
    urlArray: urlArray,
  }
}
export const toogleThema = (them) => {
  return {
    type: THEMA,
    them: them,
  }
}