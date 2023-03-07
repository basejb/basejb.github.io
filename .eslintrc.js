module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": 0,
    "react/prop-types": 0,
    // alert 사용 가능
    "no-alert": 0,
    // props spread 연산자 가능
    "react/jsx-props-no-spreading": 0,
    // <></> 사용 가능
    "react/jsx-no-useless-fragment": 0,
    // 블록 스코프 내 비어있는 부분 허용
    "no-empty": 0,
    // 증감 연산자 허용
    "no-plusplus": 0,
    "import/order": 0,
    // 상대 경로 사용 가능
    "import/no-unresolved": 0,
    "import/extensions": 0,
    // 객체 문자열 접근
    "dot-notation": 0,
    // props destructuring 제한
    "react/destructuring-assignment": 0,
    // dangerous html 허용
    "react/no-danger": 0,
    // console 허용
    "no-console": 0,
    // require문 허용
    "@typescript-eslint/no-var-requires": 0,
    // var 사용 제한
    "no-var": 1,
    // windows endOfLine
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
