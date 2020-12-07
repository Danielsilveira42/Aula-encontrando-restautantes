import  React  from  'react' ;
importar  ReactDOM  de  ' react -dom' ;
import  {  Provider  }  from  'react-redux' ;
import  '@ material / react-text-field / dist / text-field.css' ;
import  '@ material / react-material-icon / dist / material-icon.css' ;
importar  'slick-carousel / slick / slick.css' ;
import  'slick-carousel / slick / slick-theme.css' ;

importar  aplicativo  de  './App' ;
importar  loja  de  './redux/store' ;

ReactDOM . render (
  < React . StrictMode >
    < Provider  store = { store } >
      < App / >
    < / Provedor >
  < / React . StrictMode > ,
  documento . getElementById ( 'root' )
) ;