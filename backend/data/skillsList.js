// Comprehensive skill keywords for extraction
// Organized by category for easy expansion

export const SKILL_KEYWORDS = {
  // Frontend
  javascript: ["javascript", "js", "vanilla js"],
  react: ["react", "react.js", "reactjs"],
  vue: ["vue", "vue.js", "vuejs"],
  angular: ["angular", "angularjs"],
  typescript: ["typescript", "ts"],
  html: ["html", "html5"],
  css: ["css", "css3", "styling"],
  tailwind: ["tailwind", "tailwindcss"],
  bootstrap: ["bootstrap"],
  materialui: ["material-ui", "mui"],
  nextjs: ["next.js", "nextjs", "next"],

  // Backend
  node: ["node", "node.js", "nodejs"],
  express: ["express", "expressjs"],
  python: ["python"],
  django: ["django"],
  flask: ["flask"],
  java: ["java"],
  spring: ["spring", "spring boot"],
  cpp: ["c++", "cpp"],
  csharp: ["c#", "csharp", ".net"],
  php: ["php"],
  laravel: ["laravel"],
  golang: ["go", "golang"],
  rust: ["rust"],

  // Databases
  mongodb: ["mongodb", "mongo"],
  sql: ["sql", "sql server"],
  mysql: ["mysql"],
  postgresql: ["postgresql", "postgres"],
  firebase: ["firebase"],
  dynamodb: ["dynamodb"],
  redis: ["redis"],
  cassandra: ["cassandra"],

  // DevOps & Cloud
  docker: ["docker", "containers"],
  kubernetes: ["kubernetes", "k8s"],
  aws: ["aws", "amazon web services"],
  azure: ["azure", "microsoft azure"],
  gcp: ["gcp", "google cloud"],
  jenkins: ["jenkins"],
  ci: ["ci/cd", "continuous integration"],

  // Tools & Version Control
  git: ["git"],
  github: ["github"],
  gitlab: ["gitlab"],
  bitbucket: ["bitbucket"],
  npm: ["npm"],
  yarn: ["yarn"],
  maven: ["maven"],

  // Mobile
  react_native: ["react native", "react-native"],
  flutter: ["flutter"],
  android: ["android"],
  ios: ["ios"],
  swift: ["swift"],
  kotlin: ["kotlin"],

  // Data Science & AI
  ml: ["machine learning", "ml"],
  ai: ["artificial intelligence", "ai"],
  tensorflow: ["tensorflow"],
  pytorch: ["pytorch"],
  pandas: ["pandas"],
  numpy: ["numpy"],
  scikit: ["scikit-learn", "sklearn"],
  datascience: ["data science"],

  // Design & UI/UX
  figma: ["figma"],
  adobe_xd: ["adobe xd", "xd"],
  photoshop: ["photoshop"],
  sketch: ["sketch"],
  uiux: ["ui/ux", "ui ux", "user experience", "user interface"],
  design: ["design", "graphic design"],

  // Testing
  jest: ["jest"],
  mocha: ["mocha"],
  testing: ["testing", "unit testing"],
  selenium: ["selenium"],

  // Other Tools
  graphql: ["graphql"],
  rest: ["rest", "restful api"],
  api: ["api", "apis"],
  agile: ["agile", "scrum"],
  linux: ["linux"],
  windows: ["windows"],
  macos: ["macos", "mac"],
};

// Flatten to simple array for quick iteration
export const FLAT_SKILLS = Object.values(SKILL_KEYWORDS).flat();