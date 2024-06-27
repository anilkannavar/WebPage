 
    setInterval(() => {
        my();
    }, 1000);
  function my(){
      document.getElementById('time').innerHTML=new Date().toLocaleTimeString();
     }
     my();