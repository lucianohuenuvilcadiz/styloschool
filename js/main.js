addEventListener('DOMContentLoaded', () => {
    setInterval(slide,6000);
    
  })
   
  
  
  function slide() {
      let idSlide = document.getElementsByClassName('carousel-slide');
      for (index of idSlide){
        switch (index.style.marginLeft){
            case "":
                index.style.marginLeft = "0%"
                break;
            case "0%":
                index.style.marginLeft = "-100%";
                break;
            // case "-100%":
            //     index.style.marginLeft = "-200%"
            //     break;
            // case "-200%":
            //     index.style.marginLeft = "-300%"
            //     break;
            case "-100%":
                index.style.marginLeft = "0%"
                break;
        }
      }

  }



function cambiarDerecha()   {
    let idSlide = document.getElementsByClassName('carousel-slide');
    for (index of idSlide){

        switch (index.style.marginLeft){
            case "":
                index.style.marginLeft = "-100%"
                break;
            case '0%':
                index.style.marginLeft = "-100%";
                break;

            // case "-100%":
            //     index.style.marginLeft = "-200%"
            //     break;
            // case "-200%":
            //     index.style.marginLeft = "-300%"
            //     break;
            case "-100%":
                index.style.marginLeft = "0%"
                break;

        }
    }
}


function cambiarIzquierda()   {
    let idSlide = document.getElementsByClassName('carousel-slide');
    for (index of idSlide){
        switch (index.style.marginLeft){
            case "":
                index.style.marginLeft = "-100%"
                break;
            case "0%":
                index.style.marginLeft = "-100%";
                break;
            // case "-100%":
            //     index.style.marginLeft = "0%"
            //     break;
            // case "-200%":
            //     index.style.marginLeft = "-100%"
            //     break;
            case "-100%":
                index.style.marginLeft = "0%"
                break;
        }
    }
}

  
  
  

const navresponsive = () => {
    let buttonNav = document.getElementById("button-responsive");
    switch (buttonNav.style.left){
        case "":
            buttonNav.style.left = "0%"
            break;
        case "0%":
            buttonNav.style.left = "-100%";
            break;
        case "-100%":
            buttonNav.style.left = "0%";
            break;
    }
  } 
  

  
  
  

//Slide scroll page 

const scrollnav = () => $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
            
            window.location.hash = hash;
        });
      } 
    });

});


/* VALIDACI??N DE FORMULARIO*/


let validaCorreo = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

let errores = {
    name:"El nombre es inv??lido",
    correo: "El correo es inv??lido",
    numero: "El n??mero es inv??lido",
    asunto: "El asunto es inv??lido",
    mensaje: "El mensaje es inv??lido",
    success:"El formulario fue enviado correctamente"
}



    

function submitform() {

    const form = document.getElementById("form");
    let err = document.querySelector(".err");   


    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let name = e.target.name.value;
        let number = e.target.number.value;
        let email = e.target.email.value;
        let college = e.target.college.value;
        let asunto = e.target.asunto.value;
        let message = e.target.message.value;

 
        if(validarCampos(name, number, email, asunto, message, err)){
            err.classList.remove("errorForm");
            err.classList.add("successForm");
            err.innerHTML = "Se ha enviado el formulario correctamente";
         }else{
            err.classList.remove("successForm");
            err.classList.add("errorForm");





            /*Validaci??n ajax */
            var datos = 'correo=' + email + '&mensaje=' + message;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: datos,
                success: function(res) {
                    console.log("holamundo")
                },
                error: function(res) {
                    console.log("error")
                }
            });
        }

    })

}




const validarCampos = (name, number, email, asunto, message, err) => {

  
    if (name.length < 2 || name.length > 20){
        err.innerHTML = `Error: ${errores.name}`;
        return false;
    } else if (number.length > 11 || number.length < 8) {
        err.innerHTML = `Error: ${errores.numero}`;
        return false
    } else if (message.length < 10 ) {
        err.innerHTML = `Error: ${errores.mensaje}`;
        return false;
    } else if (!validaCorreo.test(email)){
        err.innerHTML = `Error: ${errores.correo}`;
        return false;
    } else if (asunto.length < 4){
        err.innerHTML = `Error: ${errores.asunto}`;
        return false;
    }  
    
    return true;

}


