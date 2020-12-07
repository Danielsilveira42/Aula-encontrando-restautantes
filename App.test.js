import  React  from  'react' ;
importar  {  render  }  de  '@ testing-library / react' ;
importar  aplicativo  de  './App' ;

test ( 'renderiza aprender a reagir link' ,  ( )  =>  {
  const  { getByText }  =  render ( < App / > ) ;
  const  linkElement  =  getByText ( / learn react / i ) ;
  esperar ( linkElement ) . toBeInTheDocument ( ) ;
} ) ;