/**
 * creates a new cookie
 * example: setCookie('user', 'John', {secure: true, 'max-age': 3600});

 * @param {string} name 
 * @param {any} value 
 * @param {object} options 
 */
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // add other defaults here if necessary
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  function deleteCookie(name) {
    this.setCookie(name, "", {
      'max-age': -1
    })
  }