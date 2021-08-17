const SupportKey='supportKey';
export function getSupport() {
  return localStorage.getItem(SupportKey)
}

export function setSupport(isSupport) {
  return localStorage.setItem(SupportKey, isSupport,{ expires: 3 })
}

export function setCookie(key,value,expires) {
  return localStorage.setItem(key, value,{ expires: expires})
}

export function getCookie(key) {
  return localStorage.getItem(key)
}
