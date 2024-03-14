import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import "../public/Custom.json";
import Data from "./Data";
import Bookemark from "./Bookemark";

const Datas = () => {
  const [image, setimage] = useState([]);

  useEffect(() => {
    fetch("Custom.json")
      .then((res) => res.json())
      .then((data) => setimage(data));
  }, []);
  return (
    <div className="mx-[100px]">
      <div className="flex justify-between ">
        <h1>Knoloage Idea</h1>
        <img className="w-[60px]" src="../image/faq-2.png" alt="" />
      </div>
      <div className="flex justify-between ">
        <div>
          {image.map((item) => (
            <Data item={item}></Data>
          ))}
        </div>
        <div>
          <Bookemark></Bookemark>
        </div>
      </div>
    </div>
  );
};

export default Datas;
