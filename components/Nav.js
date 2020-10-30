export default links => `
<nav>
<img src="image/0b81c0ac-3bd1-4d9e-8b20-bd2e4ce1f79c_200x200.png">
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
      </ul>
  <label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q">
<button>Search</button>

</nav>`;

// <li><a href="login.html">Login</a></li>
// <li><a href="rateADoc.html">Rate A Doc</a></li>
