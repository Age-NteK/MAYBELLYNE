import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTutorialById, clean } from "../../../Redux/actions";
import styles from "./detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id_tutorial } = useParams();
  const tutorialDetail = useSelector((state) => state.tutorialDetail);

  useEffect(() => {
    dispatch(getTutorialById(id_tutorial));
    return () => {
      dispatch(clean());
    };
  }, [dispatch, id_tutorial]);

  return (
    <div className={styles.detail_container}>
      {!tutorialDetail ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* TÍTULO PRINCIPAL */}
          <h1>{tutorialDetail?.title}</h1>

          {/* PRIMERA IMAGEN */}
          {tutorialDetail?.images?.length > 0 && (
            <img
              src={tutorialDetail.images[0].url}
              alt={tutorialDetail.images[0].alt}
            />
          )}

          {/*ICONS*/}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-arrow-down-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-arrow-down-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-arrow-down-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          </div>

          {/* CONTENIDO INTERCALADO */}
          {tutorialDetail?.content?.map((section, index) => (
            <div key={index}>
              <h2>{section.section_title}</h2>
              <p>{section.section_content}</p>
           

              {/* IMAGEN SIGUIENTE */}
              {tutorialDetail?.images?.length > index + 1 && (
                <img
                  src={tutorialDetail.images[index + 1].url}
                  alt={tutorialDetail.images[index + 1].alt}
                />
              )}
            </div>
          ))}

          {/* VIDEOS */}
          {tutorialDetail?.videos && (
            <div className={styles.detail_videos}>
              {tutorialDetail?.videos?.map((video, index) => (
                <div key={index} className={styles.video_container}>
                  <iframe
                    src={video.url}
                    title={`Video ${index + 1}`}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Detail;
