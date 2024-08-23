
# array-with

**array-with** is a collection of useful array helper functions for common tasks like summing, removing duplicates, finding max/min, and more.

## Features

- **sum**: Adds up all the numbers in an array.
- **unique**: Removes all duplicate values from an array.
- **average**: Calculates the average of an array of numbers.
- **max**: Finds the maximum value in an array.
- **min**: Finds the minimum value in an array.
- **clear**: Clears all elements from the array.
- **groupBy**: Groups elements by a provided function.
- **countOccurrences**: Counts occurrences of each unique element in an array.
- **allEqual**: Checks if all elements in the array are equal.
- **take**: Returns the first n elements of an array.

## Installation

You can install `array-with` using npm:

```bash
npm install array-with
```

Or with yarn:

```bash
yarn add array-with
```

## Usage

Here's how you can use the functions provided by `array-with`:

```javascript
import { sum, unique, average, max, min, clear, groupBy, countOccurrences, allEqual, take } from 'array-with';

// Example usage
const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(sum(arr)); // 21
console.log(unique(arr)); // [1, 2, 3, 4, 5]
console.log(average(arr)); // 3
console.log(max(arr)); // 5
console.log(min(arr)); // 1
clear(arr);
console.log(arr); // []
const arr2 = [1, 2, 2, 3, 4, 4, 5];
console.log(groupBy(arr2, x => x % 2 === 0 ? 'even' : 'odd')); // { odd: [ 1, 3, 5 ], even: [ 2, 2, 4, 4 ] }
console.log(countOccurrences(arr2)); // { '1': 1, '2': 2, '3': 1, '4': 2, '5': 1 }
console.log(allEqual(arr2)); // false
console.log(take(arr2, 3)); // [1, 2, 2]
```

## Contributing

If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request on [GitHub](https://github.com/yourusername/array-with).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

Pritiranjan
