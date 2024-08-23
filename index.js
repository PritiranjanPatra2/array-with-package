export function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

export function unique(arr) {
    return [...new Set(arr)];
}

export function average(arr) {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
}

export function max(arr) {
    return Math.max(...arr);
}

export function min(arr) {
    return Math.min(...arr);
}

export function clear(arr) {
    arr.length = 0;
    return arr;
}

export function groupBy(arr, keyFn) {
    return arr.reduce((acc, item) => {
        const key = keyFn(item);
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}

export function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

export function allEqual(arr) {
    return arr.every(val => val === arr[0]);
}

export function take(arr, n) {
    return arr.slice(0, n);
}
