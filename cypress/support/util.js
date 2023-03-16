export function priceAsNumber(price) {
    let numPart = price.substring(1) // remove currency
    return parseFloat(numPart) // convert to number
}

export function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false
        }
    }
    return true
}

export function randomInt(from, to) {
    let diff = to - from
    return Math.floor(Math.random() * diff + from)
}