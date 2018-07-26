const APIUtil = {
  searchUsers: (queryVal) => {
    return $.ajax({
      url: `/users/search`,
      type: 'GET',
      dataType: 'json',
      data: {query: queryVal},
    });
  },
  
  followUser: id => {
    // ...console.log("followed", this.userId);
    return $.ajax({
      url: `/users/${id}/follow`,
      type: 'POST',
      dataType: 'json',
    });
  },

  unfollowUser: id => {
    // ...
    return $.ajax({
      url: `/users/${id}/follow`,
      type: 'DELETE',
      dataType: 'json',
    });
  }
};

module.exports = APIUtil;