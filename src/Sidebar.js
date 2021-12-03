let objetoSugestoes = [
  { usuario: "bad.vibes.memes", razao: "Segue você" },
  { usuario: "chibirdart", razao: "Segue você" },
  { usuario: "razoesparaacreditar", razao: "Novo no Instagram" },
  { usuario: "adorable_animals", razao: "Segue você" },
  { usuario: "smallcutecats", razao: "Segue você" },
];
let objetoUsuario = [
  { imagem: "catanacomics", nick: "catanacomics", nome: "Catana" },
];

function Usuario(props) {
  return (
    <div class="usuario">
      <img src={`./assets/img/${props.imagem}.svg`} />
      <div class="texto">
        <strong>{props.nick}</strong>
        {props.nome}
      </div>
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={`./assets/img/${props.usuario}.svg`} />
        <div class="texto">
          <div class="nome">{props.usuario}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div class="sidebar">
      {objetoUsuario.map((objeto) => {
        return (
          <Usuario
            imagem={objeto.imagem}
            nick={objeto.nick}
            nome={objeto.nome}
          />
        );
      })}
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {objetoSugestoes.map((objeto) => {
          return <Sugestao usuario={objeto.usuario} razao={objeto.razao} />;
        })}
      </div>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
