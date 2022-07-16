import './App.css';
function App() {
 
  return (
    <>
      <form method="post" onSubmit="return submitUserForm()">
        <div className="g-recaptcha" data-sitekey="6Lfa6vUgAAAAAKSGgEiAS85Kc4pTrc8Us__4tdJI" data-callback="verifyCaptcha"></div>
        <div id="g-recaptcha-error"></div>
        <input type="submit" name="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
