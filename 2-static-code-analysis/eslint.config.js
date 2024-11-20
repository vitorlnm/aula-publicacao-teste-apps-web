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
      },
    },
  ];
  