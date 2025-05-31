import { LOCAL_STORAGE_KEYS } from "../types/locatStorage"

type UrlProps = {
  serialNumber: number
  url: string
  description?: string
}

export class LocalStorageService {
  static setAccessToken(value: string) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN, value)
  }
  static getAccessToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN)
  }
  static addUrl(props: UrlProps) {
    const serialized = JSON.stringify(props)
    return localStorage.setItem(props.url, serialized)
  }
  static getAllFavoriteURLs() {
    const allItems = Object.keys(localStorage)
    const filtered = allItems.filter((item) => item.includes('http'))
    try {
      const desirialized: UrlProps[] = filtered.map((item) => {
        return JSON.parse(item)
      })
      return desirialized
    } catch (error) {
      return []
    }
  }
  static getItemByUrl(url: string) {
    const findItem = localStorage.getItem(url)
    if (!findItem) return null
    try {
      const desirialized: UrlProps = JSON.parse(findItem)
      return desirialized
    } catch (error) {
      return null
    }
  }
}
