
Jet.router.use({
  history:false,
  base:'/jet-demo',
  index:'/',
  trueBase:true,
  router:{
    '/':'/intro',
    '/about':'/about',
    '/donate':'/donate'
  }
});
      