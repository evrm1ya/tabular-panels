
$(function() {
  var selectors = {
    tabAndContentContainer: '#big-tab-box-one',
    contentBoxSelector: '.big-panel-content-box',
    buttonAttr: 'data-contentmap',
    activeTabClass: 'active-big-tab',
    activePanelClass: 'active-big-panel',
    tabEvent: 'click'
  };
  $('#big-tab-box-one').tabulizr(selectors);
});
