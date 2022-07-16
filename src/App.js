import './App.css';
function App() {
  return (
    <>
      <form style={{margin:"10px"}}>
        <input type="text" name="name" required placeholder='name'/><br /><br />
        <input type="number" name="number" required placeholder='number'/><br /><br />
        <div class="g-recaptcha" data-sitekey="your_site_key"></div>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
