   function saveNavState(state) {
       if (THD_CACHE_NAV_PERSIST) {
           localStorage.setItem('navState', JSON.stringify(state));
       }
   }
   