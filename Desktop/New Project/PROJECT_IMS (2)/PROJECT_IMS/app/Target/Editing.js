import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../Dashboard/Loading";
import { useRouter } from "next/navigation";
import "../style/Editing.css"

const userData = [{ student_name: "Alice", roll_number: "9098988" }];

function ImageUploader({ handleImageChange, previewImage }) {
  return (
    <>
      <label htmlFor="upload-input">
        {previewImage ? (
          <img
            className="rounded-full border-2 mt-5 border-white object-cover object-center w-[130px] h-[130px] hover:scale-125 cursor-pointer"
            src={previewImage}
            alt="Preview"
          />
        ) : (
          <img
            className="rounded-full border-2 mt-5 border-white object-cover object-center w-[130px] h-[130px] hover:scale-125 cursor-pointer"
            src="/placeholder-image.jpg" // Default placeholder image URL
            alt="Upload image"
          />
        )}
      </label>
      <input
        id="upload-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }} // Hide the input visually
      />
    </>
  );
}

const Editing = ({ setUserData, uploadedDocument }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState(() => {
    const storeImg = localStorage.getItem("previewImage");
    return storeImg ? storeImg : "/placeholder-image.jpg";
  });
  const [formData, setFormData] = useState(() => {
    const storeData = localStorage.getItem("formData");
    return storeData
      ? JSON.parse(storeData)
      : {
          name: "John Doe",
          rollNumber: "12345",
          department: "Information Technology",
          motherName: "Marry",
          fatherName: "Tom Doe",
          residentialAddress: "Uk",
          permanentAddress: "Street-12, London UK",
        };
  });

  const back = () => {
    router.push("/Student");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveData = () => {
    console.log("Saving data:", formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    setIsEditing(false);
  };

  useEffect(() => {
    // Add event listener to prevent data changes on page refresh
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    // window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove event listener
    // return () => {
    // window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);

  // for upload image

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        localStorage.setItem("previewImage", reader.result); // Save image data to local storage
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleClick = () => {
  //   return onclick ? (
  //     <ImageUploader
  //       handleImageChange={handleImageChange}
  //       previewImage={previewImage}
  //     />
  //   ) : (
  //     "bg-orange-500"
  //   );
  // };

  return (
    <div className="p-2 md:p-4 rounded-xl border border-black mt-28 w-auto bg-gray-200 m-4 flex-1 shadow-md select-none">
      <div className="flex items-center">
        <button
          onClick={back}
          className=" flex w-14 h-8 bg-gradient-to-r from-red-400 via-orange-600 to-pink-500 hover:opacity-70 duration-200 rounded-3xl border-2 focus:ring-2"
        >
          <img src="/images/backHome.png" alt="BackHome" className=" w-8 h-7" />
        </button>
        <span className=" text-2xl font-serif p-2 text-red-600">
          {formData.name}
        </span>
        <h4 className="text-2xl font-bold text-orange-600"></h4>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:p-4">
        <div className="">
          <ImageUploader
            handleImageChange={handleImageChange}
            previewImage={previewImage}
          />
          <span className="marquee">
            <p className="p-1 ml-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
              Upload Pofile Image
            </p>
            <hr className="p-2 ml-1 h-1 border-black "/>
          </span>
        </div>
        <div className="flex flex-1 flex-wrap gap-2 md:p-4">
          {isEditing ? (
            <>
              <InputField
                label={"Name"}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputField
                label={"Roll Number"}
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
              />
              <InputField
                label={"Department"}
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
              <InputField
                label={"Mother Name"}
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
              />
              <InputField
                label={"Father Name"}
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
              />
              <InputField
                label={"Residential Address"}
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleInputChange}
              />
              <InputField
                label={"Permanent Address"}
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
              />
              <button
                onClick={saveData}
                className="bg-green-500 text-white px-4 py-2 rounded-2xl"
              >
                Save Details
              </button>
            </>
          ) : (
            <>
              <ValuePairContainer label={"Name"} value={formData.name} />
              <ValuePairContainer
                label={"Roll Number"}
                value={formData.rollNumber}
              />
              <ValuePairContainer
                label={"Department"}
                value={formData.department}
              />
              <ValuePairContainer
                label={"Mother Name"}
                value={formData.motherName}
              />
              <ValuePairContainer
                label={"Father Name"}
                value={formData.fatherName}
              />
              <ValuePairContainer
                label={"Residential Address"}
                value={formData.residentialAddress}
              />
              <ValuePairContainer
                label={"Permanent Address"}
                value={formData.permanentAddress}
              />
              <button
                onClick={() => setIsEditing(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-2xl"
              >
                Edit Details
              </button>

              {/* Display the uploaded document */}
              <div className="flex flex-1 flex-wrap gap-2 md:p-4">
                {uploadedDocument && (
                  <div>
                    <h3>Uploaded Document</h3>
                    <div>
                      Size: {(uploadedDocument.size / (1024 * 1024)).toFixed(2)}{" "}
                      MB
                    </div>
                    <div>Type: {uploadedDocument.type}</div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ValuePairContainer = ({ label, value }) => {
  return (
    <>
      <div className=" bg-gradient-to-r from-cyan-400 to-blue-400 colog p-2 px-5 border-black rounded cursor-pointer hover:opacity-75 duration-200">
        <span className="font-semibold whitespace-nowrap">{label} :- </span>
        <span className="text-gray-900 pl-2 text-m">{value}</span>
      </div>
    </>
  );
};

const InputField = ({ label, name, value, onChange }) => {
  return (
    <div className=" bg-gradient-to-r from-cyan-400 to-blue-400 colog p-2 px-5 border-black rounded cursor-pointer focus:ring-4">
      <span className="font-semibold whitespace-nowrap">{label} :- </span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="text-gray-900 pl-2 text-m rounded-xl hover:scale-110"
      />
    </div>
  );
};

export default Editing;
