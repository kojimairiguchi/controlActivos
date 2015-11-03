FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', {main: 'home'});
  }
});

FlowRouter.route('/landing', {
  name: 'landing',
  action() {
    BlazeLayout.render('MainLayout', {main: 'landing'});
  }
});

FlowRouter.route('/move', {
  name: 'move',
  action() {
    BlazeLayout.render('MainLayout', {main: 'move'});
  }
});

FlowRouter.route('/inventory', {
  name: 'inventory',
  action() {
    BlazeLayout.render('MainLayout', {main: 'inventory'});
  }
});

FlowRouter.route('/options', {
  name: 'options',
  action() {
    BlazeLayout.render('MainLayout', {main: 'options'});
  }
});

FlowRouter.route('/assets', {
  name: 'assets',
  action() {
    BlazeLayout.render('MainLayout', {main: 'assets'});
  }
});

FlowRouter.route('/operations', {
  name: 'operations',
  action() {
    BlazeLayout.render('MainLayout', {main: 'operations'});
  }
});
