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
        <tr class="tr">
          <td>Overall</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="tr2">
          <td>Caring</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="tr">
          <td>Patience</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr>
          <td>Willingness to Listen</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="tr">
          <td>Knowledge of Treatment</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr>
          <td>Environment</td>
          <td>
          <div class="stars-outer">
            <div class="stars-inner">
            </div>
            </div>
            <span class="number-rating"></span>
          </td>
        </tr>
        <tr class="tr">
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
    <input type="text" placeholder="Doctors Name">
    <input type="text" placeholder="Doctors Speciality">
    <div>
<textarea class="textarea" placeholder="Leave Review" rows="9" cols="60">
</textarea>
</div>
<input type="submit" value="Submit">
  </div>
</div>
`;
