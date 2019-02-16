module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "jest"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "max-len": [2, 120, 4],
    "import/extensions": ["error", "never", { "packages": "always" }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/no-did-mount-set-state": [0],
    "no-shadow": [2, {"builtinGlobals": false, "hoist": "functions", "allow": []}],
    "object-curly-newline": [0, {
      "ObjectExpression": "always",
    }],
    "react/destructuring-assignment": [
      true,
      "always",
      {
        "ignoreClassFields": true
      }
    ],
    "no-unused-expressions": [2, { allowTernary: true }],
    "arrow-parens": ["error", "always"],
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
};