module.exports = {
  apps: [
    {
      name: "api-server",
      script: "artifacts/api-server/src/index.ts",
      interpreter: "tsx",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: "3001",
        GMAIL_USER: "Info.trinitypackaging@gmail.com",
        GMAIL_APP_PASSWORD: "abum ujty sfha aymj",
      },
    },
    {
      name: "trinity-packaging",
      script: "pnpm",
      args: "--filter @workspace/trinity-packaging run dev",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: "5173",
        BASE_PATH: "/",
      },
    },
  ],
};
