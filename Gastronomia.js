async function getEmail(place) {
    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//Valida que el email sea valido, es una expresion regular
  
    let isValidEmail = false;
  
    while (!isValidEmail) {
      const result = await Swal.fire({
        text: 'Ingresa tu correo para recibir información sobre: ' + place,
        input: 'text',
        inputValidator: (value) => {
          if (!value) {
            return 'No ingresaste un correo electrónico';
          } else if (!emailValidationRegex.test(value)) {
            return 'La dirección de correo electrónico no es válida';
          } else {
            isValidEmail = true;
          }
        },
      });
  
      if (isValidEmail && result.value) {
        const email = result.value;
  
        Swal.fire({//enviar otra alerta
          text: 'Se te enviará un correo a ' + email,
        });
      }
    }
  }
  