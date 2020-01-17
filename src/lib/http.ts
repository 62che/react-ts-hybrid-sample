import { isNative } from 'lib/native'
import { HTTP } from '@ionic-native/http'

const { REACT_APP_GOOGLE_PREFIX, REACT_APP_GOOGLE_URL } = process.env

if (isNative) {
  HTTP.setRequestTimeout(10)
}

const refineUrl = (url: string): string => {
  let newUrl = url
  if (url.startsWith(REACT_APP_GOOGLE_PREFIX!)) {
    newUrl = url.replace(REACT_APP_GOOGLE_PREFIX!, REACT_APP_GOOGLE_URL!)
  }
  console.log(url, newUrl)

  return newUrl
}

export const request = async (url: string, options?: any) => {
  let response
  if (isNative) {
    console.log('HTTP.sendRequest to', refineUrl(url))
    response = await HTTP.sendRequest(refineUrl(url), options)
  } else {
    // web app or dev server using proxy
    console.log('fetch to', url)
    response = await fetch(url, options)
  }
  return response
}
