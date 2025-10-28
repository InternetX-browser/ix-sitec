import './App.css';
import LinkCreate from './components/short_names/LinkCreate';
import Note from './components/zSuite-note';
import Footer from './components/Footer';

function App() {
  const mainnamedescription = "Create your own sites"
  const maindescription = "for InternetX"
  const doctype = "<!DOCTYPE js>"
  const doctype1 = "<!DOCTYPE js-dotslash>"
  const demowithmsgbox_part1 = "<body style='background-color: red'>"
  const demowithmsgbox_part2 = "<raw type='button' OnUserInteraction='click: msgbox'Hello world!'' text='Click here!'>"
  const demowithmsgbox_part1_component = "<body style>"
  const dwmb_part2_component = "<raw>"
  // DWCB
  const dwcb_part1 = ".SLASH func.add name='ConfirmBox';"
  const dwcb_part2 = ".SLASH component.add fortype.alert button.name='Cancel'"
  const dwcb_part3 = ".SLASH component.add fortype.alert button.name='OK'"
  const dwcb_part4 = ".SLASH config onClick.name='OK' run 'msgbox'Good. I like watermelons :)''''"
  const dwcb_part5 = ".SLASH config onClick.name='Cancel' run 'msgbox'Ok.''"
  const dwcb_part6 = ".SLASH func.config ConfirmBox.as.text='You have watermelons?'"
  const dwcb_part7 = "<raw type='button' OnUserInteraction='click: .SLASH run.func.name='ConfirmBox'' text='Please submit!'>"

  // RETURN

  return (
    <div className="App">
      <div className="App-image">
        <img src="./ix-sitec-logo.png"/>
      </div>
      <div className="App-texts" align="center">
        <p>{mainnamedescription}</p>
        <p>{maindescription}</p>
        <LinkCreate><button type="button">+ Create</button></LinkCreate>
        <button type="button" onClick={() => alert('In development!')}>Group Messeger</button>
        <a href="https://github.com/InternetX-browser/ix-sitec"><button type="button">Source Code</button></a>
      </div>
      <div className="App-examples" align="center">
        <h1>Examples</h1>
        <div className="App-example1" align="center">
          <code>{doctype}</code>
          <code>{demowithmsgbox_part1}</code>
          <code>{demowithmsgbox_part2}</code>
          <br />
          <br />
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

        Result:
        <div className="exampleone">
          <button type="button" onClick={() => alert('Hello world!')}>Click here!</button>
        </div>

        <h2>Other example</h2>

        <div className="example2">

          <button type="button" onClick={() => alert('This code solo functions with the .SLASH InternetX extension installed.')}>Click me please.</button><br />

          <code>{doctype1}</code><br />
          <code>{dwcb_part1}</code><br />
          <code>{dwcb_part2}</code><br />
          <code>{dwcb_part3}</code><br />
          <code>{dwcb_part4}</code><br />
          <code>{dwcb_part5}</code><br />
          <code>{dwcb_part6}</code><br />
          <code>{doctype}</code><br />
          <code>{dwcb_part7}</code><br />

          <p>Result:</p>

          <a href="./confirmdialog.html"><button type="button">You need to click here for observe :(</button></a><br />
          <Note text="This button not appears. Click this button for the real result."></Note>


          <p>Table for know:</p>

          <table>
            <tr>
              <th>Component</th>
              <th>Component Details</th>
            </tr>
            <tr>
              <td>{dwcb_part1}</td>
              <td>We create a function named "ConfirmBox"</td>
            </tr>
            <tr>
              <td>{dwcb_part2}</td>
              <td>We create a button named "Cancel"</td>
            </tr>
            <tr>
              <td>{dwcb_part3}</td>
              <td>We create a button named "OK" <element class="Itlc">Note: The buttons are not custom. We create buttons for special IDs. Sorry.</element></td>
            </tr>
            <tr>
              <td>{dwcb_part4}</td>
              <td>We configurate for "OK" that when the user click to the button appears a dialog with this message: "Good. I like watermelons :)"</td>
            </tr>
            <tr>
              <td>{dwcb_part5}</td>
              <td>We configurate for "Cancel" that when the user click to the button appears a dialog with this message: "Ok"</td>
            </tr>
            <tr>
              <td>{dwcb_part6}</td>
              <td>We make that in the dialog says "You have watermelons?"</td>
            </tr>
            <tr>
              <td>{dwcb_part7}</td>
              <td>We make that when the user press "Please submit!" appears the confirmation dialog</td>
            </tr>
            <tr>
              <td><element class="Itlc">Information:</element></td>
              <td><element class="Itlc">This code solo functions with the <code>.SLASH</code> InternetX extension.</element></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="CoolButton">
        <p>Cool example</p>
        <button type="button" onClick={() => alert('COOL BUTTON PAGE!')} className="CoolButton-detail">START</button>
      </div>
      <div className="end">
        <h1>Interested to create? Click here:</h1>
        <LinkCreate><button type="button">+ Create</button></LinkCreate>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
