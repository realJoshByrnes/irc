/**
 * @function stringToUint8Array
 * @description Converts a latin1 string to a Uint8Array.
 * @param {string} str - The input string.
 * @returns {Uint8Array} The converted Uint8Array.
 */
export function stringToUint8Array(str: string) {
  return Uint8Array.from(Array.from(str).map(v => v.charCodeAt(0)));
}

/**
 * @function uint8ArrayToString
 * @description Converts a Uint8Array to a latin1 string.
 * @param {Uint8Array} arr - The input Uint8Array.
 * @returns {string} The converted string.
 */
export function uint8ArrayToString(arr: Uint8Array) {
  return String.fromCharCode.apply(null, Array.from(arr));
}
