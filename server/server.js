const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, 'uploads');
if(!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const safe = Date.now() + '-' + (file.originalname || 'upload');
    cb(null, safe);
  }
});

const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit

const app = express();
app.use(express.static(path.join(__dirname, '..'))); // serve site for quick testing

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Received:', req.body, req.file && req.file.filename);
  // In production, validate and move file to permanent storage, scan etc.
  res.json({ ok: true, file: req.file ? req.file.filename : null });
});

const port = process.env.PORT || 4000;
app.listen(port, ()=>console.log('Server listening on', port));
