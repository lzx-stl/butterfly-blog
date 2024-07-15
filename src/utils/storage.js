const storage = window.localStorage;

export function getItem (key) {
  return storage.getItem(key);
}

export function setItem (key, value) {
  // 如果 value 是对象，将其转换为 JSON 字符串
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  return storage.setItem(key, value);
}

export function removeItem (key) {
  return storage.removeItem(key);
}