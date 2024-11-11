class StackOverFLowAPI {
  url = "https://api.stackexchange.com";

  getPosts(phrase, sort) {
    // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
    return fetch(
      `${this.url}/2.3/similar?order=desc&sort=${sort}&title=${phrase}&site=stackoverflow`
    )
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  }
}

export default StackOverFLowAPI;
