export  const  Types  =  {
    SET_RESTAURANTS : 'restaurantes / SET_RESTAURANTS' ,
    SET_RESTAURANT : 'restaurantes / SET_RESTAURANT' ,
  } ;
  
  const  initialState  =  {
    restaurantes : [ ] ,
    restauranteSelecionado : nulo ,
  } ;
  
  exportar  redutor de função padrão  ( estado = estado inicial , ação ) {    
    switch  ( ação . tipo )  {
       Tipos de caso . SET_RESTAURANTS :
        return  { ... estado ,  restaurantes : ação . carga útil  } ;
       Tipos de caso . SET_RESTAURANT :
        return  { ... estado ,  restauranteSelecionado : ação . carga útil  } ;
      padrão :
         estado de retorno ;
    }
  }
  
  export  function  setRestaurants ( restaurantes )  {
    return  {
      tipo : Tipos . SET_RESTAURANTS ,
      carga útil : restaurantes ,
    } ;
  }
  
  export  function  setRestaurant ( restaurant )  {
    return  {
      tipo : Tipos . SET_RESTAURANT ,
      carga útil : restaurante ,
    } ;
  }