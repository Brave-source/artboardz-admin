import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../store/redux-store/UI-slice";

const MetadataForm = () => {
  const policyRef = useRef();
  const artistNameRef = useRef();
  const artInstagramRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const muralDescRef = useRef();
  const NFTRarityRef = useRef();
  const NFTSupplyRef = useRef();
  const projectDescRef = useRef();
  const publisherRef = useRef();
  const publisherTwitterRef = useRef();
  const publisherWebsiteRef = useRef();
  const royaltyRef = useRef();
  const collectionRef = useRef();
  const dispatch = useDispatch();

  const hideFormHandler = (evt) => {
    evt.preventDefault();
    dispatch(UIActions.hideAddCollectionForm());
    dispatch(UIActions.hideEditCollectionForm());
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const metaData = {
      policy: policyRef.current.value,
      artistName: artistNameRef.current.value,
      artInstagram: artInstagramRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
      muralDesc: muralDescRef.current.value,
      NFTRarity: NFTRarityRef.current.value,
      NFTSupply: NFTSupplyRef.current.value,
      projectDesc: projectDescRef.current.value,
      publisher: publisherRef.current.value,
      publisherTwitter: publisherTwitterRef.current.value,
      publisherWebsite: publisherWebsiteRef.current.value,
      royalty: royaltyRef.current.value,
      collection: collectionRef.current.value,
    };
  };
  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={formSubmitHandler}>
      <div className="flex flex-col">
        <label htmlFor="Policy" className="text-[#B3B5BD] text-base">
          Policy
        </label>
        <input
          type="text"
          name="Policy"
          id="Policy"
          ref={policyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artist Name" className="text-[#B3B5BD] text-base">
          Artist Name
        </label>
        <input
          type="text"
          name="Artist Name"
          id="Artist Name"
          ref={artistNameRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artist Instagram" className="text-[#B3B5BD] text-base">
          Artist Instagram
        </label>
        <input
          type="url"
          name="Artist Instagram"
          id="Artist Instagram"
          ref={artInstagramRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div></div>
      <div className="flex flex-col">
        <label htmlFor="Mural City" className="text-[#B3B5BD] text-base">
          Mural City
        </label>
        <input
          type="text"
          name="Mural City"
          id="Mural City"
          ref={cityRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Mural Country" className="text-[#B3B5BD] text-base">
          Mural Country
        </label>
        <input
          type="text"
          name="Mural Country"
          id="Mural Country"
          ref={countryRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="Mural Description" className="text-[#B3B5BD] text-base">
          Mural Description
        </label>
        <textarea
          rows={5}
          name="Mural Description"
          id="Mural Description"
          ref={muralDescRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="NFT Rarity" className="text-[#B3B5BD] text-base">
          NFT Rarity
        </label>
        <input
          type="text"
          name="NFT Rarity"
          id="NFT Rarity"
          ref={NFTRarityRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="NFT Supply" className="text-[#B3B5BD] text-base">
          NFT Supply
        </label>
        <input
          type="text"
          name="NFT Supply"
          id="NFT Supply"
          ref={NFTSupplyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label
          htmlFor="Project Description"
          className="text-[#B3B5BD] text-base"
        >
          Project Description
        </label>
        <textarea
          rows={5}
          name="Project Description"
          id="Project Description"
          ref={projectDescRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Publisher" className="text-[#B3B5BD] text-base">
          Publisher
        </label>
        <input
          type="text"
          name="Publisher"
          id="Publisher"
          ref={publisherRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Publisher Twitter" className="text-[#B3B5BD] text-base">
          Publisher Twitter
        </label>
        <input
          type="text"
          name="Publisher Twitter"
          id="Publisher Twitter"
          ref={publisherTwitterRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>{" "}
      <div className="flex flex-col">
        <label htmlFor="Publisher Website" className="text-[#B3B5BD] text-base">
          Publisher Website
        </label>
        <input
          type="url"
          name="Publisher Website"
          id="Publisher Website"
          ref={publisherWebsiteRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>{" "}
      <div className="flex flex-col">
        <label htmlFor="Royalty" className="text-[#B3B5BD] text-base">
          Royalty
        </label>
        <input
          type="number"
          name="Royalty"
          id="Royalty"
          min={1}
          ref={royaltyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Collection" className="text-[#B3B5BD] text-base">
          Collection
        </label>
        <input
          type="number"
          name="Collection"
          id="Collection"
          min={1}
          ref={collectionRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <footer className=" flex justify-center gap-6 col-span-2">
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

export default MetadataForm;
