import React from "react";
import CollectorsItems from "./CollectorsItems";

const DUMMY_DATA = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFFG-hAuwWCF1wpo8rDXVEfoFI4_MTg0V8Q&usqp=CAU",
    walletAddress: "1ExAmpLe0FaBiTco1NAdDr3sSV5tsGaMF6hd",
    artboardTag: "The Terminator",
    nationality: "chinese",
    twitter: "@twitter",
    uniqueCollection: 4,
    collectionSize: 10,
    display: true,
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFFG-hAuwWCF1wpo8rDXVEfoFI4_MTg0V8Q&usqp=CAU",
    walletAddress: "addrljl;jl;dsa;ljfkfjklee9jl.jdfl;jd",
    artboardTag: "The Terminator",
    nationality: "chinese",
    twitter: "@twitter",
    uniqueCollection: 4,
    collectionSize: 10,
    display: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFFG-hAuwWCF1wpo8rDXVEfoFI4_MTg0V8Q&usqp=CAU",
    walletAddress: "addrljl;jl;dsa;ljfkfjklee9jl.jdfl;jd",
    artboardTag: "The Terminator",
    nationality: "chinese",
    twitter: "@twitter",
    uniqueCollection: 4,
    collectionSize: 10,
    display: true,
  },
];

const CollectorsList = () => {
  return (
    <ul className="px-5">
      {DUMMY_DATA.map((data, index) => {
        return (
          <CollectorsItems
            key={index}
            image={data.image}
            walletAddress={data.walletAddress}
            artboardTag={data.artboardTag}
            nationality={data.nationality}
            twitter={data.twitter}
            uniqueCollection={data.uniqueCollection}
            collectionSize={data.collectionSize}
            display={data.display}
          />
        );
      })}
    </ul>
  );
};

export default CollectorsList;
