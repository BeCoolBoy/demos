import './App.css';
function App() {
  return (
    <>
      <form style={{margin:"10px"}}>
        <input type="text" name="name" required placeholder='name'/><br /><br />
        <input type="number" name="number" required placeholder='number'/><br /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
