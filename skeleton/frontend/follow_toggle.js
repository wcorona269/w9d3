function FollowToggle (el) {
  this.$button = $(el);
  this.userId = $button.data("user-id");
  this.followState = $button.data("initial-follow-state");
}


module.exports = FollowToggle;


