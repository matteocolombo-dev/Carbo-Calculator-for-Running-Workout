import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }, 
	},
	{ files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
	{"extends": ["eslint:recommended",
		"plugin:prettier/recommended",
		'plugin:prettier/recommended']},
	{
	plugins: ['react', 'prettier'],
  	parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
	},

	{
		rules: {
			"no-unused-vars": ["warn", { // non consentire variabili non utilizzate
				"vars": "all",
				"args": "after-used",
      			"ignoreRestSiblings": "true"
			}],
      "semi": "warn",
      'no-console': 'warn', // Avverte l'uso di console.log
      'no-empty-function': 'warn', // Avviso per le funzioni vuote
      'eqeqeq': 'warn', // Usa sempre ===
      'curly': ['warn', 'all'], // Parentesi obbligatorie per i blocchi
      'semi': ['error', 'always'], // Punto e virgola obbligatorio
		},
		'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
        'semi': true,
        'tabWidth': 2,
        'printWidth': 80
      }
    ]
	},
]);