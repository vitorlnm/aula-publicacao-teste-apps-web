module.exports = [
    {
      files: ['**/*.js'],
      rules: {
        "semi": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "curly": "error",
        "multiline-ternary": ["error", "never"],
        "eqeqeq": "error",
        "quotes": ["error", "single"],
        "indent": ["error", 2],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-console": ["warn", { "allow": ["warn", "error"] }],
        'prefer-const': 'error',
        'no-multi-spaces': 'error',
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-var": "error",
        "space-before-function-paren": ["error", "always"],
      },
    },
  ];
  