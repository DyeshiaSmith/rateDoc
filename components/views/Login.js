export default () => `
<div id="register" method="POST" action="">
  <div class="login-page">
  <div class="form">
  <form class="register-form">
  <input type="text" placeholder="Username"/>
  <input type="password" placeholder="Password"/>
  <input type="text" placeholder="email@example.com"/>
  <button>Create</button>
  <p class="message">Already a User? <a href="#">Login</a>
  </p>
  </form>

  <form class="login-form">
  <input type="text" placeholder="Username"/>
  <input type="password" placeholder="Password"/>
  <button>Login</button>
  <p class="message">Not Registered? <a href="#">Register</a></p>
  </form>
  </div>
  </div>
</div>`;
