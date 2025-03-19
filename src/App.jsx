import './App.css'
import Desenhista1 from "./assets/imagem-desenhista1.png"
import Desenhista2 from "./assets/imagem-desenhista2.png"
import Desenho1 from "./assets/desenho1.png"
import Artista1 from "./assets/music.png"
// import Artista2 from "./assets/violao.png"
import Inteligente1 from "./assets/inteligente1.png"
import Inteligente2 from "./assets/inteligente2.png"
import Formatura from "./assets/formatura.png"
import Nasa from "./assets/nasa.png"
import Religiao from "./assets/religiao.png"
import Balao from "./assets/balao.png"
import Parabens from "./assets/ghibli.png"


function App() {

  return (
    <>
      <main>
          <h1 className='title'>
            Gaby, <br />
            Você é...
          </h1>

          <section className='box-purple'>
            <div className='box-desenhista'>
              <div className='box-title'>
                <img src={Desenhista1} alt="Desenho de Borboleta" className='img1'/>
                <h2>Desenhista</h2>
                <img src={Desenhista2} alt="Assinatura de Desenho" className='img2'/>
              </div>

              <div className='box-image'>
                <img src={Desenho1} alt="Desenho" />
              </div>
            </div>

            <div className='box-artista'>
              <div className='box-title'>
                <img src={Artista1} alt="" />
                <h2>Artista</h2>
              </div>

              <div className='box-content'>
                <p>
                  “Areias e estrelas <br />
                  Não são mais belas <br />
                  Do que você <br />
                  Mulher das estrelas <br />
                  Mina de estrelas <br />
                  Diga o que você quer <br /><br />

                  Você é linda <br />
                  E sabe viver <br />
                  Você me faz feliz <br />
                  Esta canção é só pra dizer <br />
                  E diz <br /><br />

                  Você é linda <br />
                  Mais que demais [...]” 
                </p>
              </div>

              <p className='subtitle'>Você É Linda - Caetano Veloso</p>
            </div>
          </section>

          <div className='division1'></div>

          <section className='box-blue'>
            <div className='box-inteligente'>
              <div className='box-title'>
                <img src={Inteligente1}/>
                <h2>Inteligente</h2>
                <img src={Inteligente2}/>
              </div>

              <div className='box-image'>
                <img src={Formatura} alt="formatura" />
              </div>

              <div className='box-title section2'>
                <h2>Direto da NASA :)</h2>
              </div>

              <div className='box-image section2'>
                <img src={Nasa} alt="formatura" />
              </div>
            </div>

            <div className='box-religiao'>
              <div className='box-title'>
                <img src={Religiao}/>
                <h2>Religiosa</h2>
              </div>

              <div className='box-content'>
                <p>
                  “Ninguém jamais viu a Deus; <br />
                  se amarmos uns aos outros, <br />
                  Deus permanece em nós, <br />
                  e o seu amor está aperfeiçoado <br />
                  em nós. <br />
                  Desta forma sabemos que <br />
                  permanecemos nele, <br />
                  e ele, em nós: ele nos deu do <br />
                  seu Espírito.”<br />
                  <br />
                  1 João 4:12-13
                </p>


                <p>
                  Não andem ansiosos por coisa <br />
                  alguma, mas em tudo, <br />
                  pela oração e súplicas, e com <br />
                  ação de graças, <br />
                  apresentem seus pedidos a Deus. <br />
                  E a paz de Deus, que excede <br />
                  todo o entendimento,<br />
                  guardará o coração e a mente <br />
                  de vocês em Cristo Jesus.<br />
                  <br />
                  Filipenses 4:6-7
                </p>
              </div>

            </div>
          </section>

          <div className='division2'></div>

          <section className='box-black'>
            <div className='box-final'>
              <div className='box-title'>
                  <img src={Balao} alt="Desenho de Borboleta" className='img1'/>
                  <h2>Feliz Aniversário !!!</h2>
                  <img src={Balao} alt="Assinatura de Desenho" className='img2'/>
              </div>

              <img src={Parabens} alt="" />
            </div>
          </section>
      </main>      
    </>
  )
}

export default App
