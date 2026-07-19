import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Button from "@mui/material/Button";


const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative px-5">
      <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        responsive={responsive}
      />
      <Button variant="contained" className="z-50" sx={{position: 'absolute', top:"8rem" , right:"0rem" }}aria-label="next">
        <ArrowCircleLeftIcon/>
      </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel
