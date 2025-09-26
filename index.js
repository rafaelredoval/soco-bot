const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const user = (req.query.user || "alguém");
  const touser = (req.query.touser || "outro");

  let resposta = "";

  if (user.toLowerCase() === touser.toLowerCase()) {
    resposta = `${user}, *soco* por *soco* favor, *soco* pare *soco* de *soco* se *soco* bater *soco*`;
  } else {
    const chance = Math.floor(Math.random() * 100);
    resposta = `a chance de ${user} derrubar ${touser} é de ${chance}%`;
  }

  res.send(resposta + " ! PunOko");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API rodando na porta ${port}`));
