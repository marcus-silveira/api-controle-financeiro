import fastify from "fastify";

const app = fastify();

app.get("/", async (req, res) => {
  res.send("server ok");
});

const PORT = 8000;
app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server is running in PORT ${PORT}`);
  });
