export const disableScroll = () => {
  document.body.classList.add('disable-scroll');
};

export const enableScroll = () => {
  document.body.classList.remove('disable-scroll');
};

export const loginIntoLocalStorage = (email) => {
  localStorage.setItem('userIsLogIn', 'true');
  localStorage.setItem('userEmail', email);
};

export const logoutFromLocalStorage = () => {
  localStorage.removeItem('userIsLogIn');
  localStorage.removeItem('userEmail');
};

export const setFavouriteToLocalStorage = () => {
  localStorage.setItem('isFavoriteListing', 'true');
};

export const removeFavouriteFromLocalStorage = () => {
  localStorage.removeItem('isFavoriteListing');
};

export const getUserInfoFromLocalStorage = () => {
  const isFavoriteListing = JSON?.parse(localStorage.getItem('isFavoriteListing'));
  const isUserLoggedIn = JSON?.parse(localStorage.getItem('userIsLogIn'));
  const userEmail = localStorage.getItem('userEmail');

  return {
    isFavoriteListing,
    isUserLoggedIn,
    userEmail,
  };
};
