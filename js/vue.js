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
            {nombre: "Facultad de Ciencias Exactas UNNE", titulo: "Analista Programador universitario", finalizacion: "Jul - 2024", imagen: "images/instituciones/facena.jpg", certificado: "images/instituciones/historia_academica-1.png", pdf: "documents/pdf/historia_academica.pdf", npdf: "historia_academica.pdf"},
            {nombre: "Argentina Programa", titulo: "Desarrollador Fullstack Junior", finalizacion: "Dic - 2022", imagen: "images/instituciones/argentina-programa.jpg", certificado: "images/certificados/Certificado_YoProgramo/Certificado_YoProgramo.png", pdf: "documents/pdf/Certificado_YoProgramo.pdf", npdf: "Certificado_YoProgramo.pdf"},
            {nombre: "Educación IT", titulo: "Desarrollador Fullstack Java", finalizacion: "Nov - 2021", imagen: "images/instituciones/educacion-it.jpg", certificado: "images/certificados/CertificadoDigitalers2021/CertificadoDigitalers2021-1.png", pdf: "documents/pdf/Certificado digit@lers 2021.pdf", npdf: "Certificado digit@lers 2021.pdf"},
            {nombre: "E-Learning UTN BA", titulo: "Desarrollador Web", finalizacion: "Oct - 2017", imagen: "images/instituciones/logo-utn.ba.jpg", certificado: "images/certificados/CertificadoUTN/CertificadoUTN-1.png", pdf: "documents/pdf/CertificadoUTN.pdf", npdf: "CertificadoUTN.pdf"},
          ],
          frameworks:[
            {nombre: "Angular", imagen: "images/skills/frameworks/angular.png"},
            {nombre: "NodeJs", imagen: "images/skills/frameworks/nodejs.png"},
            {nombre: "Spring Boot", imagen: "images/skills/frameworks/spring-boot.png"},
            {nombre: "Codeigniter", imagen: "images/skills/frameworks/codeigniter.png"},
          ],
          librerias:[
            {nombre: "ReactJs", imagen: "images/skills/librerias/react.png"},
            {nombre: "VueJs", imagen: "images/skills/librerias/vuejs.png"},
            {nombre: "Jquery", imagen: "images/skills/librerias/jquery.png"},
            {nombre: "Bootstrap", imagen: "images/skills/librerias/bootstrap.png"},
          ],
          lenguajes:[
            {nombre: "Java", imagen: "images/skills/lenguajes/java.png"},
            {nombre: ".NET", imagen: "images/skills/lenguajes/.net.png"},
            {nombre: "Typescript", imagen: "images/skills/lenguajes/typescript.png"},
            {nombre: "JavaScript", imagen: "images/skills/lenguajes/javascript.png"},
            {nombre: "PHP", imagen: "images/skills/lenguajes/php.png"},
            {nombre: "SQL", imagen: "images/skills/lenguajes/sql.png"},
            {nombre: "Json", imagen: "images/skills/lenguajes/json.png"},
            {nombre: "HTML5", imagen: "images/skills/lenguajes/html5.png"},
            {nombre: "CSS3", imagen: "images/skills/lenguajes/css3.png"},
            {nombre: "Ruby", imagen: "images/skills/lenguajes/ruby.png"},
          ],
          herramientas:[
            {nombre: "Git", imagen: "images/skills/herramientas/git.png"},
            {nombre: "GitHub", imagen: "images/skills/herramientas/github.png"},
            {nombre: "Postman", imagen: "images/skills/herramientas/postman.png"},
            {nombre: "MySQL", imagen: "images/skills/herramientas/mysql.png"},
            {nombre: "SQL Server", imagen: "images/skills/herramientas/sqlserver.png"},
            {nombre: "Maven", imagen: "images/skills/herramientas/maven.png"},
            {nombre: "Visual Code", imagen: "images/skills/herramientas/microsoft_visual_studio_code.png"},
            {nombre: "Visual Studio", imagen: "images/skills/herramientas/visual_studio.png"},
            {nombre: "Eclipse", imagen: "images/skills/herramientas/eclipse.png"},
            {nombre: "UML", imagen: "images/skills/herramientas/uml.png"},
            {nombre: "Xampp", imagen: "images/skills/herramientas/xampp.png"},
            {nombre: "Hibernate", imagen: "images/skills/herramientas/hibernate.png"},
            {nombre: "Enterprise Architect", imagen: "images/skills/herramientas/enterprise_architect.jpg"},
          ],
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

        verInstituciones(imagen, nombre, titulo, finalizacion, certificado, pdf, npdf){

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
                      <div class="card-footer">
                        <a class="btn btn-danger btn-block m-2 bi-file-earmark-pdf"  href="`+pdf+`" download="`+npdf+`" target="_blank" rel="noopener noreferrer"> Descargar pdf</a>
                      </div>
                    </div>`,
            confirmButtonColor: "rgb(34, 3, 70)",
            showCloseButton: true
              });
          
        }
     
    },

  }).mount('#app')