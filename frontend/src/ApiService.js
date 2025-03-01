import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./data"
import FormatterData from "./Formatter.js"

const formatterData = new FormatterData()

export async function getUserActivity() {
  if (import.meta.env.VITE_ENVIRONMENT === "dev") {
    const data = USER_ACTIVITY.find((activity) => activity.userId == import.meta.env.VITE_USERID)
    return data

  } else {
    fetch(import.meta.env.VITE_BACKENDURL + '/user/12/activity/').then((data) => {
      return data
    })
  }
}

export async function getUserMainData() {
  if (import.meta.env.VITE_ENVIRONMENT === "dev") {
    const user = USER_MAIN_DATA.find((data) => data.id == import.meta.env.VITE_USERID)

    return formatterData.userMainData(user)

  } else {
    fetch(import.meta.env.VITE_BACKENDURL + '/user/12/activity/').then((user) => {
      return formatterData.userMainData(user)
    })
  }
}