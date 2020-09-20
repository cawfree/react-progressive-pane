const { connect: ngrok } = require("ngrok");

(async () => {
  const url = await ngrok(3000);
  console.log({ url });
})();
