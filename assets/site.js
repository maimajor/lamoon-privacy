/* Lamoon site — accessibility helpers.
 * Adds a non-scrolling shell around horizontally scrollable tables so a soft
 * right-edge fade can hint that more columns exist, and clears the fade when
 * the reader reaches the end. No effect when a table already fits.
 */
(function () {
  function setup(scroller) {
    if (scroller.parentElement.classList.contains('table-scroll-shell')) {
      return;
    }
    var shell = document.createElement('div');
    shell.className = 'table-scroll-shell';
    scroller.parentNode.insertBefore(shell, scroller);
    shell.appendChild(scroller);

    function update() {
      var overflow = scroller.scrollWidth > scroller.clientWidth + 1;
      shell.classList.toggle('is-scrollable', overflow);
      shell.classList.toggle(
        'at-end',
        scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2
      );
      // Only keep the table in the tab order while it can actually scroll.
      scroller.tabIndex = overflow ? 0 : -1;
    }

    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function init() {
    document.querySelectorAll('.comparison-scroll').forEach(setup);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
