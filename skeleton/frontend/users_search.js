const APIUtil = require("./api_util");
class UsersSearch {
  
  constructor(el) {
    this.$el = $(el);
    this.$ul = this.$el.find('ul');
    this.$input = this.$el.find('input');
    this.handleInput();
  }
  
  
  handleInput() {
    console.log('hey');
    this.$input.on("input",(event) => {
      APIUtil.searchUsers(this.$input.val()).then( (result) => this.renderResults(result));
      
    });
  }
  
  renderResults(names) {
    // debugger;
    
    this.$ul.empty();
    names.forEach( (user) => {
      this.$ul.append(`<li><a href="${user.id}">${user.username}</a></li>`);
    });
  }
  
  
  
  
}

module.exports = UsersSearch;