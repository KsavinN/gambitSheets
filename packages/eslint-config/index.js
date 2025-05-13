module.exports = {
  extends: ['./typescript.js'],
  rules: {
    // Modern JavaScript rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-unused-private-class-members': 'error',
    'no-useless-assignment': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': ['error', { array: true, object: true }],
    'prefer-object-spread': 'error',
    'prefer-regex-literals': 'error',
    'prefer-promise-reject-errors': 'error',
  },
  ignorePatterns: ['dist', 'node_modules', '*.js', '*.mjs', '*.cjs'],
}; 