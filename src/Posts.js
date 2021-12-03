export default function Posts() {
  return (
    <div class="posts">
      {objetosPost.map((objeto) => {
        return (
          <Post
            usuario={objeto.usuario}
            imagem={objeto.imagem}
            curtidoPor={objeto.curtidoPor}
            curtidas={objeto.curtidas}
          />
        );
      })}
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`./assets/img/${props.usuario}.svg`} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={`assets/img/${props.imagem}.svg`} />
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
          <img src={`./assets/img/${props.curtidoPor}.svg`} />
          <div class="texto">
            Curtido por <strong>{props.curtidoPor}</strong> e{" "}
            <strong>outras {props.curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

let objetosPost = [
  {
    usuario: "meowed",
    imagem: "gato-telefone",
    curtidoPor: "respondeai",
    curtidas: 101.523,
  },
  {
    usuario: "barked",
    imagem: "dog",
    curtidoPor: "adorable_animals",
    curtidas: 99.159,
  },
];
