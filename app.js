const app = require("express")();
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const PORT = process.env.PORT;
app.use(cors());

app.get("/fetchData", async (req, res) => {
  const data = await getApiData();
  res.send(data);
});

async function getApiData() {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/photos");
  } catch (e) {
    return e;
  }
}

app.listen(8080, "localhost", () => {
  console.log(`connection started on port ${PORT}`);
});
