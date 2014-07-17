//Model
var Classmate = Backbone.Model.extend({
  defaults: {
    Name: "",
    Phone: "",
    Bio: ""
  },
//generates id to be used with routes
//   url: function() {
//     if (_.isUndefined(this.attributes.id)) {
//       return appConfig.baseURL + 'classmate' + appConfig.addURL;
//     }
//     else {
//       return appConfig.baseURL + 'classmate/' + encodeURIComponent(this.attributes.id) + appConfig.addURL;
//     }
//   },
// });

// Collection
var ClassmateList = Backbone.Collection.extend({
  model: Classmate,
  url: function() {
    return appConfig.baseURL + 'classmate' + appConfig.addURL;
  }
});

var classmateList = new ClassmateList([

    {
      id: "_id",
      Name: "Amy",
      Email: "amydgori@gmail.com",
      Bio: "Front End Engineering Student"
    },

    {
      id: "_id",
      Name: "Dave",
      Email: "bullcitydave@gmail.com",
      Bio: "Front End Engineering Student"
    },

    {
      id: "_id",
      Name: "Emily",
      Email: "emilymbond@yahoo.com",
      Bio: "Graphic Designer"
    },

    {
      id: "_id",
      Name: "Kent",
      Email: "klovelacek@gmail.com",
      Bio: "Dragon Slayer"
    },

    {
      id: "_id",
      Name: "Mason",
      Email: "masforwhi@yahoo.com",
      Bio: "Student"
    },

    {
      id: "_id",
      Name: "Talal",
      Email: "tata_botata@hotmail.com",
      Bio: "Frontend Developer"
    },

    {
      id: "_id",
      Name: "Tyler",
      Email: "tyler.berry4@gmail.com",
      Bio: "Student"
    }

  ]);

//View
  var ClassmateListView = Backbone.View.extend({
        initialize: function(){

        },

      render: function(){
          var source = $('#ClassmateListTemplate').html();
          var tempate = _.template(source,{classmateList: this.collection.toJSON()});
          this.$el.html(template);
          return this;
        }
  });

  var classmateListView = new ClassmateListView ({
    collection: classmateList
  });

$(document).ready(function() {
    $('.classmateList').append(classmateListView.render().$el);
});
