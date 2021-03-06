

(function($) {
  $.fn.tabulizr = function(selectors) {
    'use strict';
    // selectors for tab box elements
    var tabBoxContainer = selectors.tabAndContentContainer;
    var tabList = selectors.tabList || 'ul';
    var tabListItem = selectors.tabListItem || 'li';
    var tabListItemClickable = selectors.tabListItemClickable || 'a';
    var contentBoxSelector = selectors.contentBoxSelector || 'div:first-child';
    var contentBoxContentEle = selectors.contentBoxContentEle || 'div';

    // class names
    var buttonAttr = selectors.buttonAttr;
    var tabEvent = selectors.tabEvent || 'click';
    var activeTabClass = selectors.activeTabClass;
    var activePanelClass = selectors.activePanelClass;

    var $tabBox = $(tabBoxContainer);
    var $skinnyTabList = $(tabBoxContainer + ' ' + tabList);
    var $tabs = $skinnyTabList.find(tabListItem + ' ' + tabListItemClickable);
    var $panelList = $tabBox.find(contentBoxSelector + ' ' + contentBoxContentEle);

    $tabs.each(function() {
      let $this = $(this);
      let $thisContentMap = $this.attr(buttonAttr);
      let $contentPanel = $('#' + $thisContentMap + '');
      $this.on(tabEvent, function(event) {
        event.preventDefault();
        if ($this.hasClass(activeTabClass)) {
          return false;
        }
        $tabs.each(function() {
          $(this).removeClass(activeTabClass);
        });
        $panelList.each(function() {
          $(this).removeClass(activePanelClass);
        });
        $this.addClass(activeTabClass);
        $contentPanel.addClass(activePanelClass);
      });
    });
    return $tabs;
  }
})(jQuery);
