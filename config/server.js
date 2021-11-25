module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2da75a23268f859fdccd8f21f64e7f89'),
    },
  },
  url: env('MY_HEROKU_URL'),
});
