/**
 * Bola 8
 *
 * Aplicación que te aporta respuestas a las preguntas que tengas
 * agitando tu Pebble!
 *
 */

var UI = require('ui');
var Vector2 = require('vector2');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

// Creación de la ventana principal
var main = new UI.Card({
  title: 'Bola mágica 8',
  banner: 'images/magicball100.png',
  body: 'Pulsa el botón central',
  style: 'small'
});

// Muestra la ventana principal
main.show();

main.on('click', 'up', function(e) {
  //Aquí va lo que se muestra cuando se pulsa el botón de arriba
});


//Cuando se pulsa el botón central, carga la pantalla de la pregunta 
main.on('click', 'select', function(e) {
  var pregunta = new UI.Card({
  title: 'Piensa una pregunta',
  subtitle: 'y agita el Pebble' ,
  banner: 'images/magicball100.png'
  });

  pregunta.show();
  
  // Si se agita el Pebble carga una de las respuesta de forma aleatoria
  pregunta.on('accelTap', function(e) {
    var numero = Math.floor((Math.random() * 20) + 1);
    Vibe.vibrate('short');
    
    var fraseRespuesta = new UI.Text({
      position: new Vector2(0, 20),
      size: new Vector2(144, 168),
      color: 'white',
      textAlign: 'center',
      font: 'gothic-28-bold',
      text: 'Gothic 28 Bold'
    });
    
    var respuesta = new UI.Window({
      backgroundColor: 'black'
    });
    
    // Respuestas!
    switch (numero)
    {
      case 1: 
          fraseRespuesta.text('¡Claro que sí! ¡No lo dudes ni un minuto!');
          respuesta.add(fraseRespuesta);
          break;

      case 2: 
          fraseRespuesta.text('No está claro. Vuelve a intentarlo...');
          respuesta.add(fraseRespuesta);
          break;

      case 3: 
          fraseRespuesta.text('¡Ni de coña! No cuentes con ello');
          respuesta.add(fraseRespuesta);
          break;
       
      case 4: 
          fraseRespuesta.text('Es cierto. Está clarísimo.');
          respuesta.add(fraseRespuesta);              
          break;        
        
      case 5: 
          fraseRespuesta.text('Mmm... No sé. Mejor pregúntalo otro día');
          respuesta.add(fraseRespuesta);        
          break;        

      case 6: 
          fraseRespuesta.text('Buen pronóstico. Tiene buena pinta');
          respuesta.add(fraseRespuesta);
          break;    
 
      case 7: 
          fraseRespuesta.text('Ten confianza. Lo conseguirás fijo');
          respuesta.add(fraseRespuesta);        
          break;

      case 8: 
          fraseRespuesta.text('Probablemente. Tengo buenas vibraciones');
          respuesta.add(fraseRespuesta);        
          break;

      case 9: 
          fraseRespuesta.text('Uf... Está muy complicada la cosa');
          respuesta.add(fraseRespuesta);        
          break;
       
      case 10: 
          fraseRespuesta.text('Muy dudoso. ¡Horizonte muy nublado!');
          respuesta.add(fraseRespuesta);        
          break; 
        
      case 11: 
          fraseRespuesta.text('Sí, sí, sí, sí, sí y mil veces sí');
          respuesta.add(fraseRespuesta);
          break;

      case 12: 
          fraseRespuesta.text('Pregunta demasiado complicada ¡solo soy un reloj!');
          respuesta.add(fraseRespuesta);
          break;

      case 13: 
          fraseRespuesta.text('No apostaría por ello ni de broma');
          respuesta.add(fraseRespuesta);
          break;
       
      case 14: 
          fraseRespuesta.text('El oráculo de Matrix dice que SÍ');
          respuesta.add(fraseRespuesta);              
          break;        
        
      case 15: 
          fraseRespuesta.text('Lo siento pero no va a pasar...');
          respuesta.add(fraseRespuesta);        
          break;        

      case 16: 
          fraseRespuesta.text('Yo diría que sí pero soy solo un reloj');
          respuesta.add(fraseRespuesta);
          break;    
 
      case 17: 
        fraseRespuesta.text('Por mucho que insistas la respuesta es la misma: NO');
          respuesta.add(fraseRespuesta);        
          break;

      case 18: 
          fraseRespuesta.text('No suelo ser negativo pero... ¡NO!');
          respuesta.add(fraseRespuesta);        
          break;

      case 19: 
          fraseRespuesta.text('No quieres que te responda a esa pregunta...');
          respuesta.add(fraseRespuesta);        
          break;
       
      case 20: 
          fraseRespuesta.text('Sí, si lo deseas con todas tus fuerzas');
          respuesta.add(fraseRespuesta);        
          break;           
    }
        
    respuesta.show();
  });
  
});

main.on('click', 'down', function(e) {
  //Aquí va lo que se muestra cuando se pulsa el botón de arriba
});

Accel.init();