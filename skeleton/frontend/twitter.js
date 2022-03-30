const FollowToggle = require("./follow_toggle");

const setEventListeners = () => {
  $('.follow-toggle').each(function(i, el) {
    new FollowToggle(el);
  });
};

$(setEventListeners);
