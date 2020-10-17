export default links => `
<nav>
  <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
  <label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q">
<button>Search</button>
  ${links
    .map(
      link => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
  </ul>
</nav>`;
