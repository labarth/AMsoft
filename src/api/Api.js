export const Api = {
  fetch: (url) => (
    fetch(url).then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error({
          status: response.status,
          message: 'sheet happens',
        }));
      }
      return response.json();
    })
  ),
};
