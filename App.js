import  React  from  'react' ;
importar  {  ThemeProvider  }  de  'componentes com estilo' ;
import  {  Reset  }  de  'styled-reset' ;

import  Home  from  './pages/Home' ;
importar  tema  de  './theme' ;

function  App ( )  {
  return  (
    < ThemeProvider  theme = { theme } >
      < Reset / >
      < Home / >
    < / ThemeProvider >
  ) ;
}

exportar  aplicativo padrão  ;