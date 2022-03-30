class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId  = el.dataset.userId;
    this.followState = el.dataset.initialFollowState;
    this.render();
    this.el.prop("disabled", false);
    this.handleClick = this.handleClick.bind(this);
    this.el.on("click", this.handleClick);
  }
  
  render() {
    if (this.followState === "false") {
      this.el.text("follow");
    }
    else{
      this.el.text("unfollow");
    }
    this.el.propr("disabled", false);
  }
}



module.exports = FollowToggle;


