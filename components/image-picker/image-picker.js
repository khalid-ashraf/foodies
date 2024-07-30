"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // If the user has selected no file, no need to proceed
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    // This function will run once fileReader.readAsDataURL() is finished.
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image src={pickedImage} alt='image selected by user' fill />
          )}
        </div>

        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />

        <button
          className={classes.button}
          type='button'
          onClick={() => imageInputRef.current.click()}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
