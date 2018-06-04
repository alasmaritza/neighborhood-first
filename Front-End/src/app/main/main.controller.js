export class MainController {
  constructor($http, $scope) {
    'ngInject';
    this.$http = $http;
    this.$scope = $scope;
    this.getMessages();
    this.getCategories();
    this.state = 'CA';
  }

  getMessages() {
    var vm = this;
    this.$http.get('http://localhost:5000/api/message').then(function (result) {
      vm.messages = result.data;
    });
  }

  getCategories() {
    var vm = this;
    this.$http.get('http://localhost:5000/api/category').then(function (result) {
      vm.categories = result.data;
    });
  }
  postMessage() {
    this.$http.post('http://localhost:5000/api/message', {
      resourceType: this.resource,
      locationName: this.location,
      address: {address:this.address, city: this.city, state: this.state, zip: this.zip},
      phone: this.phone,
      website: this.website,
      msg: this.message,
      created: new Date
    });
  }

  postCategory() {
    this.$http.post('http://localhost:5000/api/category', {
      categoryName: this.category
    });
  }

}
