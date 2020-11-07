export default () => `
<div class="review">
  <div class="container">
    <div class="form-group">
    <select id="doctor-select" class="form-control custom-select">
    <option value="0" disable selected>Select Category</option>
    <option value="overall">Overall</option>
    <option value="care">Caring</option>
    <option value="patience">Patience</option>
    <option value="listening">Listening</option>
    <option value="knowledgeable">Knowledgeable</option>
    <option value="environment">Environment</option>
    <option value="timeliness">Timeliness</option>
    </select>
    </div>
  <div class="form-group">
    <input type="number" id="rating-control"
    class="form-control" step="0.1" max="5" placeholder="Rate 1 - 5"
  </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Category</th>
        <th>Rating</th>
      </tr>
      </thead>
      <tbody>
        <tr class="overall">
          <td>Overall</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="care">
          <td>Caring</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="patience">
          <td>Patience</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="listening">
          <td>Willingness to Listen</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="knowledge">
          <td>Knowledge of Treatment</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="environment">
          <td>Environment</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="timeliness">
          <td>Timeliness</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
<textarea class="textarea" rows="4" cols="50">
</textarea>
</div>
  </div>
</div>
`;
