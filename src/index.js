import  ReactDOM  from "react-dom";
import Navbar from "./navbar"



function App(){
    return (
      <div>
        <Navbar />

      </div>
     /*  <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <div class="story">
                        <div class="imagem">
                            <img src="assets/img/9gag.svg" />
                        </div>
                        <div class="usuario">
                            9gag
                        </div>
                    </div>

                <div class="story">
                    <div class="imagem">
                        <img src="assets/img/meowed.svg" />
                    </div>
                    <div class="usuario">
                        meowed
                    </div>
                </div>

                <div class="story">
                <div class="imagem">
                    <img src="assets/img/barked.svg" />
                </div>
                <div class="usuario">
                    barked
                </div>
                </div>

                <div class="story">
                <div class="imagem">
                    <img src="assets/img/nathanwpylestrangeplanet.svg" />
                </div>
                <div class="usuario">
                    nathanwpylestrangeplanet
                </div>
                </div>

                <div class="story">
                <div class="imagem">
                    <img src="assets/img/wawawicomics.svg" />
                </div>
                <div class="usuario">
                    wawawicomics
                </div>
                </div>
                
                <div class="story">
                <div class="imagem">
                    <img src="assets/img/respondeai.svg" />
                </div>
                <div class="usuario">
                    respondeai
                </div>
                </div>

                <div class="story">
                <div class="imagem">
                    <img src="assets/img/filomoderna.svg" />
                </div>
                <div class="usuario">
                    filomoderna
                </div>
                </div>

                <div class="story">
                <div class="imagem">
                    <img src="assets/img/memeriagourmet.svg" />
                </div>
                <div class="usuario">
                    memeriagourmet
                </div>
                </div>

                <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src="assets/img/meowed.svg" />
                    meowed
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                    </div>
                </div>
                </div>

                <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src="assets/img/barked.svg" />
                    barked
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src="assets/img/adorable_animals.svg" />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/bad.vibes.memes.svg" />
                <div class="texto">
                  <div class="nome">bad.vibes.memes</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/chibirdart.svg" />
                <div class="texto">
                  <div class="nome">chibirdart</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/razoesparaacreditar.svg" />
                <div class="texto">
                  <div class="nome">razoesparaacreditar</div>
                  <div class="razao">Novo no Instagram</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/adorable_animals.svg" />
                <div class="texto">
                  <div class="nome">adorable_animals</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/smallcutecats.svg" />
                <div class="texto">
                  <div class="nome">smallcutecats</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
 */
     /*  <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
 */     
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));