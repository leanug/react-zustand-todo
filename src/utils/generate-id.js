export function generateId() {
  const random = Math.floor(Math.random() * Date.now()).toString(16)
  return random
}