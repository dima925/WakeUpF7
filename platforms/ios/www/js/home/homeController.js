define(["app", "js/home/homeView", "js/alarmModel"], function (app, HomeView, Alarm) {
  var alarm = null;
  var bindings = [{
      element: '.alarm-list-link',
      event: 'click',
      handler: runEditMode
    }, {
      element: '.go-list-button',
      event: 'click',
      handler: goToList
    }, {
      element: '.checkbox',
      event: 'click',
      handler: changeStatus
    }, {
      element: '.alarm-add-button',
      event: 'click',
      handler: alarmAddPopup
    },
    {
      element: '.alarm-test-button',
      event: 'click',
      handler: alarmTestPopup
    }];

  function init(query) {
    alarm = loadAlarm();
    var isData = false;
    isData = (alarm) ? true : false;
    console.log('alarm1', alarm);
    alarm = new Alarm(alarm);
    console.log('alarm2', alarm);
    HomeView.render({
      model: alarm,
      isData: isData,
      bindings: bindings
    });

    setTimeContent()
    setInterval(function () {
      setTimeContent();
    }, 1000)
  }

  function runEditMode() {
    app.router.load('alarmEdit', {id: alarm.id});
  }
  function goToList() {
    app.router.load('list');
    app.mainView.reloadPage('list.html');
  }
  function changeStatus() {
    var status = $$(this).data('status');
    var id = $$(this).data('id');
    status = status==="false" ? true : false;
    $$(this).attr('data-status', status);
    app.utils.setStatus(id, status);
    app.utils.setAlarms();
  }
  function alarmTestPopup() {
    app.utils.alarmTest(alarm);
  }

  function alarmAddPopup() {
    app.router.load('alarmEdit');
  }

  function loadAlarm() {
    var f7Alarms = localStorage.getItem("f7Alarms");
    var alarms = f7Alarms ? JSON.parse(f7Alarms) : [];

    alarms = app.utils.setActivePoint(alarms);
    alarms.sort(app.utils.alarmSort);

    return alarms[0];
  }

  function setTimeContent() {
    var date = new Date;
    var minutes = date.getMinutes();
    var hour = date.getHours();

    $$('.alarm-hours').html(app.utils.setTimeString(hour));
    $$('.alarm-minute').html(app.utils.setTimeString(minutes));
  }

  function alarmSort(a, b) {
    return new Date('1970/01/01 ' + b.time) - new Date('1970/01/01 ' + a.time);
  }

  return {
    init: init
  };
});