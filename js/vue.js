// Data para formulario de contacto vue

const { createApp } = Vue
createApp({
    data(){
        return{
          nombre: "",
          asunto: "",
          correo: "",
          mensaje: "",
          error:""
        }
    },
    methods: {
    validar(){
        if(this.nombre === "" || this.asunto === "" || this.correo === "" || this.mensaje === "" ){
            this.error = "⛔ Complete todos los campos"

        }else{
            console.log('Contacto recibido!!!')
            this.enviar()
        }
    },

      enviar(){
        fetch('https://66de46b8de4426916ee0c347.mockapi.io/mails', {
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({"nombre" : this.nombre,
                                "correo": this.correo, 
                                "asunto" : this.asunto,
                                "mensaje": this.mensaje })
        })
        .then(response => response.json())
        .then(data=> console.log('Data: ',data))
        this.alertaEnviado()
        //cerramos el modal
        this.cerrarModal()
        //vacio los campos del formulario
        this.vaciarCampos()
      },
      cerrarModal(){
        var genericModalEl = document.getElementById('myModalContacto')
        var modal = bootstrap.Modal.getInstance(genericModalEl)
        modal.hide()
        },

        alertaEnviado(){
        Swal.fire({
        icon: 'question',
        iconHtml: '<i class="bi bi-envelope-plus"></i>',
        title: '"'+ this.nombre + '": gracias por tu interés ☺️',
        text: 'Te estaré contactando a la brevedad!',
        showConfirmButton: false,
        timer: 6000
        })
        },

        vaciarCampos(){
        this.nombre = ""
        this.correo = ""
        this.asunto = ""
        this.mensaje = ""
        this.error = ""
        }
     
    }

  }).mount('#app')