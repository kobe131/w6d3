const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$( ()=>{
  const $buttonEl = $(".follow-toggle");
  $buttonEl.each ((_,button) => {
    new FollowToggle(button);
  });
  const $navEl = $(".users-search");
  $navEl.each ((_,nav) => {
    new UsersSearch(nav);
  });
});