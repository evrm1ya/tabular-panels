
$(function() {
  var selectors = {
    tabAndContentContainer: '#skinny-tab-box-one',
    contentBoxSelector: '.content-box',
    buttonAttr: 'data-contentmap',
    activeTabClass: 'active-skinny-tab',
    activePanelClass: 'active',
    tabEvent: 'mouseenter'
  };
  $('#skinny-tab-box-one').tabulizr(selectors);
});
