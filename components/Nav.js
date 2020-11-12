export default links => `
<nav>
<img class="logo" src="https://github.com/DyeshiaSmith/rateDoc/blob/master/pictures/0b81c0ac-3bd1-4d9e-8b20-bd2e4ce1f79c_200x200.png?raw=true">
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
      </ul>
  <label for="site-search"></label>
<input type="search" id="site-search" placeholder="Search A Doc">
<button class="animate__animated">Search</button>
</nav>
`;
