import './App.css';
function App() {
//  https://artisansweb.net/validate-google-recaptcha-using-javascript/
// action='https://artisansweb.net/validate-google-recaptcha-using-javascript/'
      var recaptcha_response = '';
      function submitUserForm() {
          if(recaptcha_response==''){
            console.log("please select roboto")
            return false;
          }
          return true;
          // if(recaptcha_response.length > 0) {
          //     document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
          //     return false;
          // }
      }
      
      function verifyCaptcha(token) {
          recaptcha_response = token;
          // document.getElementById('g-recaptcha-error').innerHTML = '';
      }
  return (
    <>
      {/* <form  onSubmit="return submitUserForm(this)" method="post">
        <div className="g-recaptcha" data-sitekey="6Lfa6vUgAAAAAKSGgEiAS85Kc4pTrc8Us__4tdJI" data-callback="verifyCaptcha"></div>
        <div id="g-recaptcha-error"></div>
        <input id="submit" type="submit" />
      </form> */}
      <form onSubmit="return submitUserForm(this)" method="post">
        <div>
            <label>Name:</label>
            <input id="name" name="name" type="text" />
        </div>
        <div>
            <label>Email:</label>
            <input id="email" name="email" type="email" />
        </div>
        <div class="g-recaptcha" data-sitekey="6LffpPEgAAAAAOibceQnHN6enOfj99F7JaFrAACw"></div>
        <div>
            <input id="submit" type="submit" />
        </div>
    </form>
    </>
  );
}

export default App;
