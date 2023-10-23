import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../Redux/actions";
import styles from "./header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.allVideos);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  const handleNext = () => {
    const newIndex = (activeVideoIndex + 1) % allVideos.length;
    setActiveVideoIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      activeVideoIndex === 0 ? allVideos.length - 1 : activeVideoIndex - 1;
    setActiveVideoIndex(newIndex);
  };
  return (
    <div className={styles.header}>
      <div
        className="carousel slide"
        id="carouselExampleIndicators"
        data-ride="carousel"
        data-interval="false"
      >
        <div className="carousel-inner">
          {allVideos?.map((video, index) => (
            <div
              className={`carousel-item ${
                index === activeVideoIndex ? "active" : ""
              }`}
              key={index}
            >
              <video className="d-block w-100" autoPlay muted loop>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
