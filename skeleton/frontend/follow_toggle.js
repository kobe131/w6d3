const APIUtil = require('./api_util');

class FollowToggle {
  constructor (el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }
  
  render() {
    console.log(this.followState);
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.attr("disabled", false);
    } else if (this.followState === "unfollowing") {
      this.$el.text("Unfollowing");
      this.$el.attr("disabled", true);
    } else if (this.followState === "following") {
      this.$el.text("Following");
      this.$el.attr("disabled", true);
    } else {
      this.$el.text("Unfollow!");
      this.$el.attr("disabled", false);
    }
  }
  
  handleClick() {
    this.$el.on("click",(event) => {
      event.preventDefault();
      if (this.followState === "followed") {
        this.followState = "unfollowing";
        this.render();
        APIUtil.unfollowUser(this.userId).then( () => {
          this.followState = "unfollowed";
          this.render();
        });
      } 
      else {
        this.followState = "following";
        this.render();
        APIUtil.followUser(this.userId).then( () => {
          this.followState = "followed";
          this.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;