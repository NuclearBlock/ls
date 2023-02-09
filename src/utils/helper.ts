/**
 * Minimize hash string
 * @param str 
 * @param start 
 * @param end 
 * @returns 
 */
export const minimizeStr = (str:string, start = 8, end = 8):string => {
  return str.slice(0, start) + "..." + str.slice(-end)
}