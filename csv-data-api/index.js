const express = require('express');
const cors = require('cors');
const multer = require('multer');
const Papa = require('papaparse');

const app = express();
const port = 5000;

app.use(cors());

const upload = multer({ dest: 'uploads/' });

let csvData = [];

// Endpoint to handle file upload
app.post('/api/files', upload.single('csv'), (req, res) => {
  const file = req.file;
  Papa.parse(file.path, {
    complete: (result) => {
      csvData = result.data;
      res.status(200).json({ message: 'File uploaded successfully!' });
    },
    error: () => {
      res.status(500).json({ message: 'Error parsing the CSV file!' });
    },
  });
});

// Endpoint to handle search requests
app.get('/api/users', (req, res) => {
  const searchQuery = req.query.q;
  const filteredResults = csvData.filter((row) => {
    return Object.values(row).some(
      (value) => value.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
  });
  res.status(200).json(filteredResults);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
