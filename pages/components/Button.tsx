import Link from "next/link";
import React from "react";

const Button = ({ url, btnText, btnText2 }: any) => {
  return (
    <Link href={`${url}`} className="bg-[#ca8a04] w-fit text-[#000] px-6 py-2 text-lg">
      <p className="btn-txt-desctop">{btnText}</p>
      <p className="btn-txt-mob">{btnText2}</p>
    </Link>
  );
};

export default Button;
