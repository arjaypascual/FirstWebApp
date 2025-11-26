const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route (HTML Output)
app.get("/", (req, res) => {
  const name = "Rolly Jr S. Pascual";
  const section = "BSIT NT 4101";
  const quote = "Today is your opportunity to build the tomorrow you want.";

  const html = `
  <html>
  <head>
    <title>My Node App </title>
    <style>
      body {
        font-family: script;
        background:linear-gradient(135deg, #56ab2f, #a8e063);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        color: white;
      }
      .card {
        background: #1B5E20;
        padding: 40px;
        width: 600px;
        text-align: center;
        border-radius: 20px;
        box-shadow: 0 0 40px rgba(0,0,0,0.6);
        animation: fadeIn 1s ease;
      }
      h1 {
        font-size: 36px;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 22px;
        margin-bottom: 25px;
        font-weight: normal;
        opacity: 0.8;
      }
      p {
        font-size: 20px;
        font-style: italic;
        opacity: 0.9;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${name}</h1>
      <h2>${section}</h2>
      <p>"${quote}"</p>
    </div>
  </body>
  </html>
  `;

  res.send(html);
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
