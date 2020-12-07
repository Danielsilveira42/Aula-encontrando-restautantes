import  React  from  ' react ' ;
importar com  estilo , { quadros-chave } de  ' componentes com estilo ' ;

const  keyFrameLoading  =  keyframes `
  0% {
    opacidade : 0,5 ;
  }
  100% {
    opacidade : 1 ;
  }
` ;

exportar  const  LoadingSkeleton  =  estilizado . div `
  cor de fundo : cinza ;
  raio da borda : 6 px ;
  margem inferior : 10 px ;
  largura mínima : $ {(props) => props.width};
  altura : $ {(adereços) => props.height};
  animação : $ {keyFrameLoading} 500 ms  infinito  alternativo ;
` ;

exportação  padrão ({ largura , altura }) => <Carregando o esqueleto largura = {largura} altura = {altura} />;