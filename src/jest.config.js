// module.exports = {
//     moduleDirectories: [
//       'node_modules',
//   +   __dirname// add the directory with the test-utils.js file, for example:
// //   +   'utils', // a utility folder
//   +    __dirname, // the root directory
//     ],
//     // ... other options ...
// }

module.export = {
    roots: ['<rootDir>/src/'],
    transform: {
      '\\.(js|jsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/*/>(*.){js, jsx}'], // finds test
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect', 
      '@testing-library/react/cleanup-after-each'
    ] // setupFiles before the tests are ran
  };