import './styles/globals.scss';
import styles from "./styles/home.module.scss";

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <main className={styles.container}>
        <Header/>
          <form >
            <div class="box">
              <input id="nota1" type="radio" name="nota_atendimento" value="1"/>
              <label for="nota1" ><img src="1.png" alt="nota 1"/></label>

              <input id="nota2" type="radio" name="nota_atendimento" value="2"/>
              <label for="nota2" ><img src="2.png" alt="nota 2"/></label>

              <input id="nota3" type="radio" name="nota_atendimento" value="3"/>
              <label for="nota3" ><img src="3.png" alt="nota 3"/></label>

              <input id="nota4" type="radio" name="nota_atendimento" value="4"/>
              <label for="nota4" ><img src="4.png" alt="nota 4"/></label>

              <input id="nota5" type="radio" name="nota_atendimento" value="5"/>      
              <label for="nota5" ><img src="5.png" alt="nota 5"/></label>
            </div>
            <div class="sombra"></div>
          </form>
          <Footer/> 
        </main>
    </>
  );
}

export default App;
