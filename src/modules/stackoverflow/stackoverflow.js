import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  setPhraseAction,
  setSort,
  setSortAction,
} from "./stackoverflow.actions";

const StackOverFlow = () => {
  const { sort, phrase, posts } = useSelector((state) => state.stackoverflow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(phrase, sort));
  }, [phrase, sort]);

  return (
    <section>
      <form>
        <input
          name="phrase"
          value={phrase}
          onChange={(e) => dispatch(setPhraseAction(e.target.value))}
        ></input>
        <select
          name="sort"
          value={sort}
          onChange={(e) => dispatch(setSortAction(e.target.value))}
        >
          <option value="activity">activity</option>
          <option value="votes">votes</option>
        </select>
      </form>
      <ul>
        {posts.map((prev) => (
          <li key={prev.question_id}>
            <a href={prev.link} />
            {prev.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StackOverFlow;
