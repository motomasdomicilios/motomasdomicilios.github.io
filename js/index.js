function isMobile() {
    if (sessionStorage.desktop)
      return false;
    else if (localStorage.mobile)
      return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
  }
  
  const formulario = document.querySelector('#formulario');
  const buttonSubmit = document.querySelector('#submit');
  const urlDesktop = 'https://web.whatsapp.com/';
  const urlMobile = 'whatsapp://';
  const telefono = '+573227380527';
  
  formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    // buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    // buttonSubmit.disabled = true
    setTimeout(() => {
      let name = document.querySelector('#name').value;
      let message = document.querySelector('#message').value;
  
      if (name == null || name == 0 || name == /^\s+$/.test(name)) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo nombre debe estar lleno');
        return false;
      }
      else if (message == null || message == 0 || /^\s+$/.test(message)) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo mensaje debe estar lleno');
        return false;
      }
  
  
      let mensaje = 'send?phone=' + telefono + '&text=%0A*Nombre: *%0A' + name + '%0A*Mensaje: *%0A' + message
      if (isMobile()) {
        window.open(urlMobile + mensaje, '_blank')
      } else {
        window.open(urlDesktop + mensaje, '_blank')
      }
      // buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
      // buttonSubmit.disabled = false
      location.reload();
      alert('Mensaje enviado exitosamente');
    }, 100);
  });