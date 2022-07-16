import './App.css';
function App() {
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
  return (
    <>
      <form id="form_id" method="post" action="your_action.php">
          <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
          <input type="hidden" name="action" value="validate_captcha"/>
      </form>
    </>
  );
}

export default App;
