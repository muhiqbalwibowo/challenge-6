import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../redux/action/postActions";
import { FaStar } from "react-icons/fa";

import "../App.css";

export const Movie = () => {
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postDetails } = useSelector((state) => state.post);
  console.log(postDetails);

  useEffect(() => {
    dispatch(getPostDetails(id, token));
  }, [token, dispatch, id]);

  return (
    <div className="movie_page">
      {postDetails && (
        <>
          <div className="movie_card">
            <img
              src={`https://image.tmdb.org/t/p/w500` + postDetails.poster_path}
              alt={postDetails.title}
            />
            <h2 className="title_card">{postDetails.title}</h2>
            <p>
              <FaStar /> {postDetails.vote_average}
            </p>
          </div>
          <p className="desc_card">Release : {postDetails.release_date}</p>
          <p className="desc_card">{postDetails.overview}</p>
        </>
      )}
    </div>
  );
};
