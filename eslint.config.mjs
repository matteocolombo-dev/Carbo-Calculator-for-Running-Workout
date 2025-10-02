import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{ files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },

	{
		rules: {
			"no-unused-vars": "warn", // non consentire variabili non utilizzate
			"no-undef": "warn",
      "semi": "warn",
      'no-console': 'warn', // Avverte l'uso di console.log
      'no-empty-function': 'warn', // Avviso per le funzioni vuote
      'eqeqeq': 'warn', // Usa sempre ===
      'curly': ['warn', 'all'], // Parentesi obbligatorie per i blocchi
      'semi': ['error', 'always'], // Punto e virgola obbligatorio
		},
	},
]);