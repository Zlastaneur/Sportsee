import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./data"
import FormatterData from "./Formatter.js"

const formatterData = new FormatterData()

export async function getUserActivity() {
  if (import.meta.env.VITE_ENVIRONMENT === "dev") {
    const data = USER_ACTIVITY.find((activity) => activity.userId == import.meta.env.VITE_USERID)
    return data

  } else {
    const url = import.meta.env.VITE_BACKENDURL + `/user/${import.meta.env.VITE_USERID}/activity`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()
      return formatterData.userActivity(json.data)
    } catch (error) {
      console.error(error.message)
    }
  }
}

export async function getUserMainData() {
  if (import.meta.env.VITE_ENVIRONMENT === "dev") {
    const user = USER_MAIN_DATA.find((data) => data.id == import.meta.env.VITE_USERID)
    return formatterData.userMainData(user)

  } else {
    const url = import.meta.env.VITE_BACKENDURL + `/user/${import.meta.env.VITE_USERID}`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()

      return formatterData.userMainData(json.data)
    } catch (error) {
      console.error(error.message)
    }
  }
}

export async function getUserAverageSession() {
  if (import.meta.env.VITE_ENVIRONMENT === "dev") {
    const data = USER_AVERAGE_SESSIONS.find((session) => session.userId == import.meta.env.VITE_USERID)
    return data

  } else {
    const url = import.meta.env.VITE_BACKENDURL + `/user/${import.meta.env.VITE_USERID}/average-sessions`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()

      return formatterData.userAverageSession(json.data)
    } catch (error) {
      console.error(error.message)
    }
  }
}

export async function getUserKeyData() {
  if (import.meta.env.VITE_ENVIRONMENT === "dev") {
    const data = USER_MAIN_DATA.find((user) => user.id == import.meta.env.VITE_USERID).keyData
    console.log(data)

    return data

  } else {
    const url = import.meta.env.VITE_BACKENDURL + `/user/${import.meta.env.VITE_USERID}`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()
      console.log(json)

      return formatterData.userKeyData(json.data)
    } catch (error) {
      console.error(error.message)
    }
  }
}

export async function getUserPerformance() {
  if (import.meta.env.VITE_ENVIRONMENT === "dev") {
    const performanceData = USER_PERFORMANCE.find((performance) => performance.userId == import.meta.env.VITE_USERID)
    return formatterData.userPerformance(performanceData)
  } else {
    const url = import.meta.env.VITE_BACKENDURL + `/user/${import.meta.env.VITE_USERID}/performance/`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()

      return formatterData.userPerformance(json.data)
    } catch (error) {
      console.error(error.message)
    }
  }
}

