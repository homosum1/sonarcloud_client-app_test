export default {
  settings: {
    react: {
      version: "detect" 
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
   
  }
};
