import multer from "multer";
import path from "path";

// Get the absolute path to the current directory
const __dirname = path.resolve();

// Configure Multer storage with cross-platform compatibility
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public', 'temp')); // Use path.join() for cross-platform paths
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer({ storage });
