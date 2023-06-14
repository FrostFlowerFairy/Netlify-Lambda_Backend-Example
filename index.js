const app = require("./express/app");

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
