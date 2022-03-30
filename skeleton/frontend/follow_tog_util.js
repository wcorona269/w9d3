const FollowTogUtil = {
  handleClick: function(e) {
    e.preventDefault();
     return $.ajax({
       method: "POST",
       url: "/users/:id/follow",
       data: {
          
       }
     });
  }
};