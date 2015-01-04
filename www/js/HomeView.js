// HomeView constructor
var HomeView = function (service) {
    // Nested view to display the list employees
    var employeeListView;
            
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        // Instantiate the nested view
        employeeListView = new EmployeeListView();
        this.render();
    };

    // Formerly app.js@renderHomeView()
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView.$el);
        return this;
    };

    // Formerly app.js@findByName()
    this.findByName = function() {
        service.findByName($('.search-key').val()).done(function(employees) {
            employeeListView.setEmployees(employees);
        });
    };
    // Invoke "initialize()" in constructor
    this.initialize();
}
