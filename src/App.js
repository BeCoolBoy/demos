import './App.css';
function App() {
  return (
    <>
      <form style={{margin:"10px"}} method="POST" action='https://developers.google.com/recaptcha/intro'>
        <input type="text" name="name" required placeholder='name'/><br /><br />
        <input type="number" name="number" required placeholder='number'/><br /><br />
        <div class="g-recaptcha" data-sitekey="6Lcy3PUgAAAAABK8VPU-U-eI4zTqlaM7BDb5_g38" ></div>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
