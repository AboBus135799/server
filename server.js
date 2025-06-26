const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

const STORED_PASSWORD = "123"; 

app.use(cors());
app.use(bodyParser.json());

// Проверка пароля
app.post("/check-password", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Пароль не предоставлен" });
  }

  if (password === STORED_PASSWORD) {
    return res.json({ success: true, message: 'hello niggas'});
  } else {
    return res.json({ success: false });
  }
});

/*app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});*/