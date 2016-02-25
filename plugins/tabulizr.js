

(function($) {
  $.fn.tabulizr = function(selectors) {
    'use strict';
    var tabBoxContainer = selectors.tabAndContentContainer;
    var tabList = selectors.tabList || 'ul';
    var tabListItem = selectors.tabListItem || 'li';
    var tabListItemClickable = selectors.tabListItemClickable || 'a';
    var contentBoxSelector = selectors.contentBoxSelector || 'div:first-child';
    var contentBoxContentEle = selectors.contentBoxContentEle || 'div';

    var $tabBox = $(tabBoxContainer);
    var $skinnyTabList = $(tabBoxContainer + ' ' + tabList);
    var $tabs = $skinnyTabList.find(tabListItem + ' ' + tabListItemClickable);
    var $panelList = $tabBox.find(contentBoxSelector + ' ' + contentBoxContentEle);
    $tabs.each(function() {
      let $this = $(this);
      let $thisContentMap = $this.attr('data-contentmap');
      let $contentPanel = $('#' + $thisContentMap + '');
      $this.on('click', function(event) {
        event.preventDefault();
        if ($this.hasClass('active-skinny-tab')) {
          return false;
        }
        $tabs.each(function() {
          $(this).removeClass('active-skinny-tab');
        });
        $panelList.each(function() {
          $(this).removeClass('active');
        });
        $this.addClass('active-skinny-tab');
        $contentPanel.addClass('active');
      });
    });
    return $tabs;
  }
})(jQuery);
