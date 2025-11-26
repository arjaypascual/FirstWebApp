const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// allow JSON body
app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.send("Quotes API Online!");
});

// POST insert (name, section, quotation)
app.post("/addQuote", (req, res) => {
  const { name, section, quotation } = req.body;

  if (!name || !section || !quotation) {
    return res.status(400).json({
      error: "name, section, and quotation are required."
    });
  }

  res.json({
    message: "Quote received!",
    data: { name, section, quotation }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
