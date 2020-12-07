importar  estilizado  de  'componentes estilizados' ;

exportar  const  Overlay  =  estilizado . div `
  posição: fixa;
  topo: 0;
  direita: 0;
  esquerda: 0;
  inferior: 0;
  display: flex;
  justificar o conteúdo: centro;
  alinhar-itens: centro;
  largura: 100%;
  altura: 100%;
  fundo: rgba (78, 89, 131, 0,5);
  filtro de fundo: desfoque (5px);
  índice z: 999;
` ;
Sobreposição . displayName  =  'Sobreposição' ;

export  const  Dialog  =  estilizado . div `
  display: flex;
  direção flexível: coluna;
  justify-content: espaço entre;
  altura máxima: calc (100% - 144px);
  largura: 500px;
  preenchimento: 24px;
  cor de fundo: #ffffff;
  sombra da caixa: 0px 0px 32px rgba (78, 89, 131, 0,2);
  raio da borda: 8px;
` ;
Dialog . displayName  =  'Diálogo' ;