import React from 'react'
import TopPickCarousel from '../../GlobalComponents/Carousel/Carousel'
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.jpg";
import image4 from "../../../assets/4.jpg";
import image5 from "../../../assets/5.jpg";
import image6 from "../../../assets/6.jpg";
import image7 from "../../../assets/7.jpg";
import image8 from "../../../assets/8.jpg";
import image9 from "../../../assets/9.jpg";
import image10 from "../../../assets/10.jpg";
import image11 from "../../../assets/11.jpg";
import image13 from "../../../assets/13.jpg";
import image14 from "../../../assets/14.jpg";
import image15 from "../../../assets/15.jpg";
import image16 from "../../../assets/16.jpg";
import image17 from "../../../assets/17.jpg";

// Array of images
  const images = [
    { src: image1, alt: "Topic 1" },
    { src: image2, alt: "Topic 2" },
    { src: image3, alt: "Topic 3" },
    { src: image4, alt: "Topic 4" },
    { src: image5, alt: "Topic 5" },
    { src: image6, alt: "Topic 6" },
    { src: image7, alt: "Topic 7" },
    { src: image8, alt: "Topic 8" },
    { src: image9, alt: "Topic 9" },
    { src: image10, alt: "Topic 10" },
    { src: image11, alt: "Topic 11" },
    { src: image13, alt: "Topic 13" },
    { src: image14, alt: "Topic 14" },
    { src: image15, alt: "Topic 15" },
    { src: image16, alt: "Topic 16" },
    { src: image17, alt: "Topic 17" },
  ];
function TrendingBooks() {
  return (
    <>
    <div className="Carousel">
        <div className="all-books-section">
          <h3 className='all-books-heading'>Trending</h3>
        </div>
        <TopPickCarousel images={images} QuickAction={true} />
      </div>
    </>
  )
}

export default TrendingBooks