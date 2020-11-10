export default () => `
    <div class="container" id="container">
  <div class="card">
    <div class="card-bio">
      <div class="img-wrapper">
        <img src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80"
        alt="Person" />
      </div>
      <div class="person-info">
        <h3>JaneDoe</h3>
        <p>Doc.Type</p>
      </div>
      <button class="card-btn">
            <span class="card-btn-contact">Review!</span>
            <i class="fas fa-angle-up"></i>
          </button>
    </div>
    <div class="card-contact">
      <h4>See Reviews</h4>
    </div>
  </div>
</div>
<template id="doc-card">
  <div class="card">
    <div class="card-bio">
      <div class="img-wrapper">
        <img src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80"
        alt="Person" />
      </div>
      <div class="person-info">
        <h3 class="doc-name"></h3>
        <p class="doc-type"></p>
      </div>
      <button class="card-btn">
            <span class="card-btn-contact">Review!</span>
            <i class="fas fa-angle-up"></i>
          </button>
    </div>
    <div class="card-contact">
      <h4>See Reviews</h4>
    </div>
  </div>
</template>
`;
