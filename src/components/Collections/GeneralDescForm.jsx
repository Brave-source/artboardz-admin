import React, { useRef, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import CameraIcon from "../../Assets/Icons/CameraIcon";
import { UIActions } from "../../store/redux-store/UI-slice";
import { addCollectionFailure, addCollectionStart, addCollectionSuccess } from "../../store/redux-store/CollectionSlice";

const GeneralDescForm = () => {
  const policyRef = useRef();
  const artistNameRef = useRef();
  const artTitleRef = useRef();
  const locationRef = useRef();
  const supplyRef = useRef();
  const artDescRef = useRef();
  const aboutMeRef = useRef();
  const mintingDetailRef = useRef();
  const twitterRef = useRef();
  const discordRef = useRef();
  const instagramRef = useRef();
  const [artImage, setArtImage] = useState(null);
  const [artLocationImage, setArtLocationImage] = useState(null);
  const [personalImage, setPersonalImageRef] = useState(null);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [imgPerc, setImgPerc] = useState(0);
  const [locationImagePer, setLocationImagePer] = useState(0);
  const [personalImagePer, setPersonalImagePer] = useState(0);

  const hideFormHandler = (evt) => {
    evt.preventDefault();
    dispatch(UIActions.hideAddCollectionForm());
    dispatch(UIActions.hideEditCollectionForm());
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if(urlType === "artImage") {
            setImgPerc(Math.round(progress))
          } else if(urlType === "artLocationImage") {
            setLocationImagePer(Math.round(progress));
          } else {
            setPersonalImagePer(Math.round(progress))
          }
        // urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running" + progress);
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
         
        });
      }
    );
  };

  useEffect(() => {
    artImage && uploadFile(artImage , "artImg");
  }, [artImage]);

  useEffect(() => {
    artLocationImage && uploadFile(artLocationImage, "locationImg");
  }, [artLocationImage]);

  useEffect(() => {
    personalImage && uploadFile(personalImage, "personalImg");
  }, [personalImage]);

  const formSubmitHandler = async (evt) => {
    evt.preventDefault();
  
    dispatch(addCollectionStart())
    try {
      const res = await axios.post('http://localhost:3000/api/collections', inputs)
      dispatch(UIActions.hideAddCollectionForm())
      dispatch(addCollectionSuccess(res.data));
    }catch(err) {
      dispatch(addCollectionFailure())
    }
  };

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={formSubmitHandler}>
      <div className="flex flex-col">
        <label htmlFor="policy" className="text-[#B3B5BD] text-base">
          Policy
        </label>
        <input
          type="text"
          name="policy"
          id="policy"
          onChange={handleChange}
          ref={policyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artist name" className="text-[#B3B5BD] text-base">
          Artist Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          id="Artist name"
          ref={artistNameRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artboard Title" className="text-[#B3B5BD] text-base">
          Artboard Title
        </label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          id="Artboard Title"
          ref={artTitleRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Location" className="text-[#B3B5BD] text-base">
          Location
        </label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          id="Location"
          ref={locationRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="supply" className="text-[#B3B5BD] text-base">
          Supply
        </label>
        <input
          type="text"
          name="supply"
          onChange={handleChange}
          id="Supply"
          ref={supplyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label
          htmlFor="Artboard Description"
          className="text-[#B3B5BD] text-base"
        >
          Artboard Description
        </label>
        <textarea
          rows={5}
          name="desc"
          id="Artboard Description"
          onChange={handleChange}
          ref={artDescRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="about me" className="text-[#B3B5BD] text-base">
          About Me
        </label>
        <textarea
          rows={5}
          name="aboutMe"
          onChange={handleChange}
          id=" about me"
          ref={aboutMeRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="Minting details" className="text-[#B3B5BD] text-base">
          Minting Details
        </label>
        <textarea
          rows={5}
          name="mintingDetails"
          onChange={handleChange}
          id="Minting details"
          ref={mintingDetailRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md  text-base px-3"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 col-span-2">
        <div className="flex flex-col">
          <label htmlFor="Twitter" className="text-[#B3B5BD] text-base">
            Twitter
          </label>
          <input
            type="url"
            name="twitter"
            onChange={handleChange}
            id="Twitter"
            ref={twitterRef}
            className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Discord" className="text-[#B3B5BD] text-base">
            Discord
          </label>
          <input
            type="url"
            name="discord"
            onChange={handleChange}
            id="Discord"
            ref={discordRef}
            className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Instagram" className="text-[#B3B5BD] text-base">
            Instagram
          </label>
          <input
            type="url"
            name="instagram"
            onChange={handleChange}
            id="Instagram"
            ref={instagramRef}
            className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
          />
        </div>
      </div>
      <div className="flex flex-col col-span-2 ">
        <span className="text-[#B3B5BD] text-base">
          Upload your Artboard image
        </span>
        <label
          htmlFor="Artboard image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          <CameraIcon />
        </label>
        <input
          type="file"
          name="artImg"
          id="Artboard image"
          className=""
          accept="image/png, image/jpeg"
          onChange={(e) => setArtImage(e.target.files[0])}
          hidden
        />
      </div>
      <div className="flex flex-col col-span-2 ">
        <span className="text-[#B3B5BD] text-base">
          Upload your Artboard location image
        </span>
        <label
          htmlFor="Artboard image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          <CameraIcon />
        </label>
        <input
          type="file"
          name="locationImg"
          id="Artboard location image"
          onChange={(e) => setArtLocationImage(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <div className="flex flex-col col-span-2 ">
        <span className="text-[#B3B5BD] text-base">
          Upload your personal/working image
        </span>
        <label
          htmlFor="personal/working image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          <CameraIcon />
        </label>

        <input
          type="file"
          name="personalImg"
          id="personal/working image"
          onChange={(e) => setPersonalImageRef(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <footer className=" flex justify-center gap-6  col-span-2">
        <button
          onClick={hideFormHandler}
          className="px-[20px] py-[10px] border border-white rounded-md text-sm"
        >
          Cancel
        </button>
        <button className="px-[20px] py-[10px] bg-[#4C66F0] rounded-md text-sm">
          Create
        </button>
      </footer>
    </form>
  );
};

export default GeneralDescForm;
