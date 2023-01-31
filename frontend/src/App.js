
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Header/>
        <form >
          <div class="box">
            <input id="nota1" type="radio" name="nota_atendimento" value="1"/>
            <label for="nota1" ><img src="assets/1.png" alt="nota 1"/></label>

            <input id="nota2" type="radio" name="nota_atendimento" value="2"/>
            <label for="nota2" ><img src="assets/2.png"/></label>

            <input id="nota3" type="radio" name="nota_atendimento" value="3"/>
            <label for="nota3" ><img src="assets/3.png"/></label>

            <input id="nota4" type="radio" name="nota_atendimento" value="4"/>
            <label for="nota4" ><img src="assets/4.png"/></label>

            <input id="nota5" type="radio" name="nota_atendimento" value="5"/>      
            <label for="nota5" ><img src="assets/5.png"/></label>
          </div>
          <div class="sombra"></div>
        </form>
        <Footer/> 
    </>
  );
}

export default App;
