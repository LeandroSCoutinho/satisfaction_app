import '../../styles/globals.scss';
import styles from "../../styles/home.module.scss"

import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {setupAPIClient} from "../../services/api";

export default function Home(){
   const [nota, setNota] =  useState(true);
     async function handleEvaluation(value){
    
     const apiClient = setupAPIClient();

     await apiClient.post('/nota', {
        nota: value
     });

    setNota(false);

    setTimeout(()=>{
        setNota(true);
    },3000);
}

    return(
        <main className={styles.container}>
            <Header/>
            {(nota) ?(
             <form >
                <div className={styles.box}>
                    <input id="nota1" type="radio" name="nota_atendimento" value="1" onClick={(e) => {handleEvaluation(e.target.value)}}/>
                    <label for="nota1" ><img src="1.png" alt="nota 1"/></label>

                    <input id="nota2" type="radio" name="nota_atendimento" value="2" onClick={(e) => {handleEvaluation(e.target.value)}}/>
                    <label for="nota2" ><img src="2.png" alt="nota 2"/></label>

                    <input id="nota3" type="radio" name="nota_atendimento" value="3" onClick={(e) => {handleEvaluation(e.target.value)}}/>
                    <label for="nota3" ><img src="3.png" alt="nota 3"/></label>

                    <input id="nota4" type="radio" name="nota_atendimento" value="4" onClick={(e) => {handleEvaluation(e.target.value)}}/>
                    <label for="nota4" ><img src="4.png" alt="nota 4"/></label>

                    <input id="nota5" type="radio" name="nota_atendimento" value="5" onClick={(e) => {handleEvaluation(e.target.value)}}/>      
                    <label for="nota5" ><img src="5.png" alt="nota 5"/></label>
                </div>
                <div className={styles.sombra}></div>
              </form>
              ): ( 
                <div class="box2">
                  <h1>Agradecemos pela sua avaliação!</h1>
                  <h2>Até a próxima! 😀</h2>
                </div>
              )}
            <Footer/> 
        </main>
    )
}