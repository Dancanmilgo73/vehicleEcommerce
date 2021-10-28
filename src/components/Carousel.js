import React, { useState } from "react";
import imgData from "../data/carouselData";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Carousel() {
  const [imgIdx, setImgIdx] = useState(1);
  console.log(imgData[0].url);
  return (
    <div class="carousel__con">
      <div
        class="carousel__img"
        style={{ backgroundImage: `url(${imgData[imgIdx].url})` }}
      >
        <button
          onClick={() => imgIdx < imgData.length - 1 && setImgIdx(imgIdx + 1)}
          className="btnPrev"
        >
          <KeyboardArrowLeftIcon className="btn" />
        </button>
        <button
          onClick={() => imgIdx > 0 && setImgIdx(imgIdx - 1)}
          className="btnNext"
        >
          <KeyboardArrowRightIcon className="btn" />
        </button>
      </div>
    </div>
  );
}
