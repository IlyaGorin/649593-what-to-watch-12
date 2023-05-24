import { useRef, useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmData } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  filmData: FilmData;
}

const VIDEO_PLAYING_DELAY = 1000;

function FilmCard({ filmData }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const { previewImage, name, id } = filmData;
  const filmRoute = generatePath(AppRoute.Film, { id: `${id}` });
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleMouseEnter = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const newTimerId = setTimeout(() => {
      setIsPlaying(true);
    }, VIDEO_PLAYING_DELAY);
    setTimerId(newTimerId);
  };

  const handleMouseLeave = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
    setIsPlaying(false);
  };


  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPlaying ? (
        <VideoPlayer filmData={filmData} videoRef={videoRef} />
      ) : (
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      )}
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmRoute}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
