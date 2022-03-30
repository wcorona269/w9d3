const FollowToggle = require("./follow_toggle");

console.log("sdlkfj");
const buttons = $('.follow-toggle');

const toggle = function(toggleCallback) {
  buttons.each(toggleCallback(index, button));
  new FollowToggle(button);
};
const func = () => {
  debugger;
};

func();
