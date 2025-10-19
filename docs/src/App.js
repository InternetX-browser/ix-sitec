import './App.css';

function App() {
  const mainnamedescription = "Create your own sites"
  const maindescription = "for InternetX"
  const demowithmsgbox_part1 = "<body style='background-color: red'>"
  const demowithmsgbox_part2 = "<raw type='button' OnUserInteraction='click: msgbox'Hello world!'' text='Click here!'>"
  const demowithmsgbox_part1_component = "<body style>"
  const dwmb_part2_component = "<raw>"

  return (
    <div className="App">
      <div className="App-image">
      <img src="https://raw.githubusercontent.com/InternetX-browser/ix_assets/refs/heads/main/assets/explorer/sitec/internetx_siteclogo.png"/>
      </div>
      <div className="App-texts" align="center">
        <p>{mainnamedescription}</p>
        <p>{maindescription}</p>
        <button type="button" onClick={() => alert('In development!')}>+ Create</button>
        <button type="button" onClick={() => alert('In development!')}>Group Messeger</button>
        <a href="https://github.com/InternetX-browser/ix-sitec"><button type="button">Source Code</button></a>
      </div>
      <div className="App-examples" align="center">
        <h1>Examples</h1>
        <div className="App-example1" align="center">
        <code>{demowithmsgbox_part1}</code>
        <code>{demowithmsgbox_part2}</code>
        <br/>
        <br/>
        </div>

         
        Table for know:


        <table>
          <tr>
            <th>Component</th>
            <th>Component details</th>
          </tr>
          <tr>
            <td>{demowithmsgbox_part1_component}</td>
            <td>Styles how background color.</td>
          </tr>
          <tr>
            <td>{dwmb_part2_component}</td>
            <td>{dwmb_part2_component} can be used for make buttons and other things for your page. With CSS you can customize the button.</td>
          </tr>
        </table>

        This code make this:
        <div className="exampleone">
          <button type="button" onClick={() => alert('Hello world!')}>Click here!</button>
        </div>
    </div>
    </div>
  );
}

export default App;
