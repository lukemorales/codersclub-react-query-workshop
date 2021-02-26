module.exports = {
  extends: ['@rocketseat/commitlint-config'],
  rules: {
    "type-enum": [2, "always", ["chore", "ci", "docs", "feat", "fix", "test", "refactor"]],
  }
};
