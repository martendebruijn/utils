# @martendebruijn/utils

<!-- SHIELDS -->

This package provides a collection of utility functions for various purposes in TypeScript. It includes functions for working with arrays, dates, math, numbers, objects, strings, and general utilities. These functions can be used to simplify common tasks and enhance the functionality of your TypeScript projects.

- [@martendebruijn/utils](#martendebruijnutils)
  - [Get started](#get-started)
  - [Usage](#usage)
    - [Array](#array)
    - [Date](#date)
    - [Math](#math)
    - [Number](#number)
    - [Object](#object)
    - [String](#string)
    - [Utility](#utility)
  - [Releases](#releases)
  - [Contributing](#contributing)
  - [Authors and acknowledgment](#authors-and-acknowledgment)
  - [License](#license)

## Get started

```sh
npm install @martendebruijn/utils
```

## Usage

### Array

- **[`copy(array)`](./src/array/copy.ts)** - Make a copy of an array
- **[`equalsTo(arrayA, arrayB)`](./src/array/equalsTo.ts)** - is arrayA equal to arrayB?
- **[`peek(array)`](./src/array/peek.ts)** - Peek the last item of an array
- **[`tail(array)`](./src/array/tail.ts)** - Peek(?) the first item of an array
- **[`isLast(array, index)`](./src/array/isLast.ts)** - is index the last item of the array?
- **[`mergeArrays(arrayA, arrayB, ...)`](./src/array/merge.ts)** - Merge 2 or more arrays into one array

### Date

- **[`formatIsoDate(isoDate, locale="en-US")`](./src/date/formatIsoDate.ts)** - Format ISO date to a string according to the locale
- **[`timeAgo(isoDate, locale="en-US")`](./src/date/timeAgo.ts)** - Generate a readable string about how long ago a date was, according to the locale

### Math

- **[`round(numbers, decimals?)`](./src/math/round.ts)** - Round a number or numbers
- **[`roundup(numbers, decimals?)`](./src/math/roundUp.ts)** - Round up a number or numbers
- **[`roundDown(numbers, decimals?)`](./src/math/roundDown.ts)** - Round down a number or numbers

### Number

- **[`random(min?, max?)`](./src/number/random.ts)** - Generate a random number
- **[`isEven(number)`](./src/number/isEven.ts)** - Is number even?
- **[`isUneven(number)`](./src/number/isUneven.ts)** - Is number uneven?

### Object

- **[`mergeObjects(objectA, objectB)`](./src/object/mergeObject.ts)** - Merge two objects

### String

- **[`capatilize(string)`](./src/string/capitilize.ts)** - Capitalize a string

### Utility

- **[`uuid()`](./src/utility/uuid.ts)** - generate a unique ID
- **[`generateError(error)`](./src/utility/generateError.ts)** - make sure an error is actually an error

## Releases

For a complete list of releases, please see the [changelog](./CHANGELOG.md).

## Contributing

Please do contribute! See the [contributing document](./CONTRIBUTING.md) for how
to contribute.

## Authors and acknowledgment

- **[@martendebruijn](https://github.com/martendebruijn)** - Owner

## License

[MIT](./LICENSE) license

Copyright (c) 2024 [Marten de Bruijn](https://github.com/martendebruijn)
