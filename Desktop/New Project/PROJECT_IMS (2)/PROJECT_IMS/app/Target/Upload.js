import React, { useEffect, useState } from "react";
import "../style/Popup.css";

const Upload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/zip",
    "image/jpeg",
    "image/png",
  ];
  const maxFileSize = 10 * 1024 * 1024;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      allowedTypes.includes(selectedFile.type) &&
      selectedFile.size <= maxFileSize
    ) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError(
        alert("Please select a correct format or file size within 10MB")
      );
    }
  };

  const onUpload = () => {
    if (file) {
      setUploading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? clearInterval(interval) : prevProgress + 10
        );
      }, 400);
      setTimeout(() => {
        setUploading(false);
        onMsg();
        onFileUpload(file);
      }, 4000);
    } else {
      setError(alert("Please select a file to upload!"));
    }
  };

  const clearFile = () => {
    setFile(null);
    setError(null);
    setProgress(0);
    setShowPopup(false);
  };

  const onMsg = () => {

      Notification.requestPermission().then((Permission) => {
        if (Permission === "granted") {
          new Notification("Your file Successfully uploaded!");
        }
      });
  };

  return (
    <>
      <div className=" bg-slate-950 h-auto w-auto p-2 m-4 rounded-xl border border-whiteshadow-2xl select-none">
        <div>
          <h2 className="text-xl p-2 font-bold text-red-900">
            Students Documents
          </h2>
          <p className="text-m text-gray-600 p-2">
            This IMS provide facility to upload your documents.
          </p>
        </div>
        <hr className="w-1/2 p-2 ml-2 h-1 border-white" />
        <div className="p-2 flex gap-10 text-white">
          <input
            type="file"
            onChange={handleFileChange}
            // style={{display: "none"}}
            placeholder="Select file"
            className="border border-gray-300 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          />
          {error && <div>{error}</div>}
          {file && (
            <div>
              <div>Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</div>
              <div>Type: {file.type}</div>
              <button
                onClick={() => setShowPopup(true)} // Open the popup when clicking on clear button
                className="bg-red-700 p-2 rounded-2xl border border-black"
              >
                Delete
              </button>
            </div>
          )}
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <p>Are you sure you want to delete the file?</p>
                <div>
                  <button
                    onClick={clearFile}
                    className="w-20  bg-red-500 border border-white focus:ring-2 rounded-2xl p-2 m-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="w-20 bg-green-600 border border-white rounded-2xl p-2 m-2 focus:ring-2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
          {uploading ? (
            <div>Uploading... {progress}%</div>
          ) : (
            <>
              {progress > 0 && progress < 100 && (
                <progress value={progress} max="100" />
              )}
              {progress === 100 ? <div>Upload complete!</div> : null}
              <button
                onClick={onUpload}
                className="bg-green-700 rounded-2xl border border-black p-2 focus:ring-2"
                disabled={uploading}
              >
                Upload
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
