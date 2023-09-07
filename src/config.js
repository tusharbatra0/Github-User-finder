const users_url = "https://api.github.com/users";

function userApi(username) {
  return `https://api.github.com/users/${username}`;
}

export { users_url, userApi };