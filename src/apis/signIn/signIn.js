export default (data) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      email: data.email,
    })
  }, 1000);
});
