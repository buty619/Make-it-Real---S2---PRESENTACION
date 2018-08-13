app.controller('MainController', ['$scope', function($scope) { 
    $scope.products = [{

      Titulo:'Universidad', 
      Descripcion: 'Graduado en Ingeniería electrónica de la universidad Distrital Francisco Jose de Caldas.', 
      Alt: 'Universidad Distrital', 
      scr: 'images/portafolio/ud.jpg'
    },
    {
      Titulo:'Edx', 
      Descripcion: 'En continua capacitación para el desarrollo web, a través de la plataforma de educación web EdX.', 
      Alt: 'Edx', 
      scr: 'images/portafolio/edx.jpg'
    },
    {
      Titulo:'Make it Real', 
      Descripcion: 'Actualmente realizando curso FRONTEND de la plataforma educativa Make It Real.', 
      Alt: 'Make it Real', 
      scr: 'images/portafolio/make.jpg'
    },
    {
      Titulo:'Experiencia Laboral', 
      Descripcion: 'Experiencia de 3 años como ingeniero de proyectos en la empresa de telecomun. de Bogota.', 
      Alt: 'ETB', 
      scr: 'images/portafolio/etb.jpg'
    },
    {
      Titulo:'GitHub', 
      Descripcion: 'Actualmente en proceso de construcción de un portafolio en GitHub de los desarrollos realizados.', 
      Alt: 'GitHub', 
      scr: 'images/portafolio/Github.jpg'
    },
    {
      Titulo:'Codecademy', 
      Descripcion: 'Desarrollando cursos en AngularJS y ReactJS en la plataforma online Codecademy.', 
      Alt: 'Codecademy', 
      scr: 'images/portafolio/code.jpg'
    }
    ]
  }]);