module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:jsdoc/recommended" // Add the JSDoc plugin
    ],
    "plugins": ["jsdoc"], // Define the JSDoc plugin
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        // Focus on JSDoc rules critical for documentation generation
        "jsdoc/require-description": "error",
        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "error",
        "jsdoc/require-param-name": "error",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-returns": "error",
        "jsdoc/require-returns-description": "error",
        "jsdoc/require-returns-type": "error"
    }
}
