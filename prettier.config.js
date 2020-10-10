module.exports = {
  printWidth: 140,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParents: 'avoid',
  parser: 'typescript',
  overrides: [
    {
      files: 'src/**/*.scss',
      options: {
        singleQuote: false,
        proseWrap: 'never',
        printWidth: 80
      }
    }
  ]
}