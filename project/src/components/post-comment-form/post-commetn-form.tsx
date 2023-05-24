import{ useState } from 'react';
import StarRating from '../star-rating/star-rating';
import { getFilmId } from '../../store/app-data/app-data.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';

const START_RATING_VALUE = 10;

function PostCommentForm():JSX.Element {
  const [formData, setFormData] = useState({
    rating: START_RATING_VALUE,
    reviewText: '',
  });

  const handleStarClick = (value:number) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const hanndleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = evt.target.value;
    setFormData({
      ...formData,
      reviewText: textareaValue,
    });
  };

  const rating = Number(formData.rating);

  const comment = {
    rating,
    comment: formData.reviewText,
  };

  const id = useAppSelector(getFilmId);
  const dispatch = useAppDispatch();

  return (
    <form action="#" className="add-review__form" method="post"
      onSubmit={(evt) => {
        evt.preventDefault();

        if(id !== null) {

          dispatch(postCommentAction({ comment, id }))
            .then(() => {
              const formElement = evt.target as HTMLFormElement;
              formElement.reset();
            });
        }
      }}
    >
      <StarRating startRating={START_RATING_VALUE} onStarClick={handleStarClick} />

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={hanndleTextareaChange}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default PostCommentForm;
