module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1339),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "6504c3f886a8601a2caa9fd36850fa1b"),
    },
  },
});
