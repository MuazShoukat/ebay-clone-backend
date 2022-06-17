module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://ebay-clone-backend.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
