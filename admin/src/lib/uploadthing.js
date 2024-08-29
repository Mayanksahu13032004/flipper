import { generateUploadButton } from "@uploadthing/react";
const UploadButton = generateUploadButton({
    url: "http://localhost:5000/api/uploadthing",
  });

  export default UploadButton