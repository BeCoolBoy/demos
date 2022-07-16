import './App.css';
function App() {
  return (
    <>
      {/* https://dev.to/huzaifa99/add-google-recaptcha-v2-to-plain-html-3n0p */}
      <form id="form_id" method="post" action="your_action.php">
        <input type="text" name="text" />
        <div
            class="g-recaptcha"
            data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            data-callback="onRecaptchaSuccess"
            data-expired-callback="onRecaptchaResponseExpiry"
            data-error-callback="onRecaptchaError"
          >
        </div>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
