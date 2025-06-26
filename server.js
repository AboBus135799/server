const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const STORED_PASSWORD = "222444"; 

app.use(cors());
app.use(bodyParser.json());

// Проверка пароля
app.post("/check-password", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Пароль не предоставлен" });
  }

  if (password === STORED_PASSWORD) {
    return res.json({ success: true, message: 'ВОНЮЧИЕ ПИСЬКИ'});
  } else {
    return res.json({ success: false });
  }
});

const PORT = process.env.PORT || 10000; // Используем порт из ENV или 5000 по умолчанию
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
})

let sdddddd;