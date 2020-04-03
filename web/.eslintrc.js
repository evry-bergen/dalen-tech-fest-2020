module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings', 'airbnb', 'airbnb/hooks'],
  rules: {
    'object-curly-spacing': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
}
