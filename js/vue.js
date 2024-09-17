// Data para formulario de contacto vue

const { createApp } = Vue
createApp({
    data(){
        return{
          nombre: "",
          asunto: "",
          correo: "",
          mensaje: "",
          error:"",
          certificados:[
            { nombre: "Vue.JS", duracion: "15 hs", imagen: "images/certificados/VueJS Certificado/Certificado-Vue.JS-EducaciónIT.png"},
            { nombre: "#YoProgramo", duracion: "9 meses", imagen: "images/certificados/Certificado_YoProgramo/Certificado_YoProgramo.png"},
            { nombre: "#SeProgramar", duracion: "3 meses", imagen: "images/certificados/argentina_programa_octubre_diciembre_2021/argentina_programa_octubre_diciembre_2021-1.png"},
            { nombre: "Habilidades Blandas", duracion: "6 hs", imagen: "images/certificados/Habilidades Blandas Certificado/Certificado-Habilidades-Blandas-EducaciónIT.png"},
            { nombre: "Fullstack Java", duracion: "130 hs", imagen: "images/certificados/CertificadoDigitalers2021/CertificadoDigitalers2021-1.png"},
            { nombre: "Desarrollo Web", duracion: "2 meses", imagen: "images/certificados/CertificadoUTN/CertificadoUTN-1.png"},
            { nombre: "Base De Datos", duracion: "12 hs", imagen: "images/certificados/CertificacionBaseDeDatos/CertificacionBaseDeDatos-1.png"},
            { nombre: "Java Hibernate", duracion: "12 hs", imagen: "images/certificados/certificado Java Hibernate/certificado Java Hibernate-1.png"},
            { nombre: "Java Spring", duracion: "15 hs", imagen: "images/certificados/Java Spring certificado/Java Spring certificado-1.png"},
            { nombre: "Java J2SE", duracion: "45 hs", imagen: "images/certificados/Java Standard Web Programming, J2SE Certificado/Java Standard Web Programming, J2SE Certificado-1.png"},
            { nombre: "JavaScript", duracion: "18 hs", imagen: "images/certificados/Javascript desde cero certificado/Javascript desde cero certificado-1.png"},
            { nombre: "Java No Programadores", duracion: "15 hs", imagen: "images/certificados/Java para no programadores certificado/Java para no programadores certificado-1.png"},
            { nombre: "React.JS", duracion: "12 hs", imagen: "images/certificados/ReactJS Certificado/ReactJS Certificado-1.png"},
            { nombre: "Git", duracion: "12 hs", imagen: "images/certificados/certificadoGit/certificadoGit-1.png"},
            { nombre: "Seguridad Informática", duracion: "2 hs", imagen: "images/certificados/Diego-David Almirón-Seguridad Informática/Diego-David Almirón-Seguridad Informática-1.png"},
            { nombre: "Oracle", duracion: "2 hs", imagen: "images/certificados/Diego David Almirón-Oracle/Diego David Almirón-Oracle-1.png"},
            { nombre: "Fundamentos Web", duracion: "15 hs", imagen: "images/certificados/Fundamentos Web certificado/Fundamentos Web certificado-1.png"},
            { nombre: "Corrien Tech", duracion: "2 hs", imagen: "images/certificados/CorrienTech/CorrienTech.png"},
          ],
          instituciones:[
            {nombre: "Educación IT", titulo: "Desarrollador Fullstack Java", finalizacion: "Nov - 2021", imagen: "images/instituciones/educacion-it.jpg", certificado: "images/certificados/CertificadoDigitalers2021/CertificadoDigitalers2021-1.png"},
            {nombre: "E-Learning UTN BA", titulo: "Desarrollador Web", finalizacion: "Oct - 2017", imagen: "images/instituciones/logo-utn.ba.jpg", certificado: "images/certificados/CertificadoUTN/CertificadoUTN-1.png"},
            {nombre: "Argentina Programa", titulo: "Desarrollador Fullstack Junior", finalizacion: "Dic - 2022", imagen: "images/instituciones/argentina-programa.jpg", certificado: "images/certificados/Certificado_YoProgramo/Certificado_YoProgramo.png"},
            {nombre: "Facultad de Ciencias Exactas UNNE", titulo: "Analista Programador universitario", finalizacion: "Jul - 2024", imagen: "images/instituciones/facena.jpg", certificado: "images/instituciones/historia_academica-1.png"},
          ]
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
        },

        verCertificado(nombre, imagen, duracion) {
          Swal.fire({
          title: nombre,
          imageUrl: imagen,
          text: 'Duración: '+duracion,
          width: 800,
          imageWidth: 800,
          confirmButtonColor: "rgb(34, 3, 70)"
          
          });
        },

        verInstituciones(imagen, nombre, titulo, finalizacion, certificado){

          Swal.fire({
            imageUrl: imagen,
            width: 1000,
            imageWidth: 300,
            icon: 'question',
            iconHtml: '<i class="bi bi-award-fill" style="color: rgb(34, 3, 70);"></i>',
            html:`<div class="card border-dark border-2" style="font-family:'Anton';">
                      <div class="card-header h4 bg-secondary text-white border-dark border-2">`+nombre+`</div>
                      <div class="card-body">
                        <p class="bi bi-award-fill"> Título:<span class="text-secondary"> `+titulo+`</span></p>
                        <p class="bi-calendar"> Finalización:<span class="text-secondary"> `+finalizacion+`</span></p>
                        <img class="img-fluid" src="`+certificado+`" alt="">
                      </div>
                    </div>`,
            confirmButtonColor: "rgb(34, 3, 70)",
            showCloseButton: true
              });
          
        }
     
    },

  }).mount('#app')