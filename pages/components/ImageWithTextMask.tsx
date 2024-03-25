import Image from "next/image";
import React from "react";


const ImageWithTextMask = ({ imageUrl }: any) => {
  return (
    <div className="relative">
      <div className="mask1">
        <Image
          src={imageUrl}
          alt="Cinque Terre"
          width={200}
        />
      </div>
    </div>
  );
};

export default ImageWithTextMask;
