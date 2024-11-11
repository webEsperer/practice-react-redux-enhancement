import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos, setLoginAction, setPhraseAction } from "./github.actions";

const GitHub = () => {
  const { login, phrase, repos } = useSelector((state) => state.github);
  const dispatch = useDispatch();

  function handleLoginChange(e) {
    dispatch(setLoginAction(e.target.value));
    dispatch(getRepos(e.target.value));
  }
  return (
    <section>
      <form>
        <input name="login" value={login} onChange={handleLoginChange}></input>
        <input
          name="phrase"
          value={phrase}
          onChange={(e) => dispatch(setPhraseAction(e.target.value))}
        ></input>
      </form>
      <ul>
        {repos
          .filter((r) => r.name.includes(phrase))
          .map((r) => (
            <li key={r.id}>
              <a href={r.url} />
              {r.name}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default GitHub;
