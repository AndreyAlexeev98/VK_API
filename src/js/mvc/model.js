window.Model = {
  login(appId, perms) {
    return new Promise((resolve, reject) => {
      VK.init({
        apiId: 51731842,
      });

      VK.Auth.login((response) => {
        if (response.session) {
          resolve(response);
        } else {
          reject(new Error("Не удалось авторизоваться"));
        }
      }, perms);
    });
  },
  callApi(method, params) {
    params.v = params.v || "5.131";

    return new Promise((resolve, reject) => {
      VK.api(method, params, (response) => {
        if (response.error) {
          reject(new Error(response.error.error_msg));
        } else {
          resolve(response.response);
        }
      });
    });
  },
  getUser(params = {}) {
    return this.callApi("users.get", params);
  },
  getFriends(params = {}) {
    return this.callApi("friends.get", params);
  },
  getNews(params = {}) {
    return this.callApi("newsfeed.get", params);
  },
};
