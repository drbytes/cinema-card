class CinemaCard extends HTMLElement {

  set hass(hass) {

    loadCSS('/local/css/materialdesignicons.min.css');
    loadCSS('/local/css/materialize.min.css');
    loadCSS('/local/css/font-awesome.min.css');

    function loadCSS(url) {
      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    }

    if (!this.content) {

      const card = document.createElement('ha-card');
      //card.header = this.config.title;
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      card.appendChild(this.content);
      this.appendChild(card);


      var html = `
      <link rel='stylesheet' href='/local/css/materialdesignicons.min.css'>
      <link rel='stylesheet' href='/local/css/font-awesome.min.css'>
      <link rel='stylesheet' href='/local/css/materialize.min.css'>
      <div id="textbox">
      <p style="vertical-align: middle;float: left;font-family: 'Roboto', 'Noto', sans-serif;font-size: 24px;font-weight: 400;">
      ${this.config.title}</p>
      <p style="float: right;"><a class="btn-small waves-effect waves-light ${this.config.masterbutton.color}">
      <i class="mdi ${this.config.masterbutton.icon} mdi-24px findmeHere" entity="${this.config.masterbutton.entity}" state="${this.config.masterbutton.state}"></i></a></p>
      </div>
      <div style="clear: both; text-align:left;">
      <p>`;

      var counter = 0;
      for (var i = 0; i < this.config.buttons.length; i++) {
        if (counter > 300) {
          counter = 0;
          html = html + "</p><P>";
        }

        if (this.config.buttons[i].type) {
          if (this.config.buttons[i].type == 'break') {
            html = html + "</p><P>";
            counter = 0;
          } else if (this.config.buttons[i].type == 'space') {
            html = html + "<span style='margin: 0 30px;'>";
            counter += 30;
          } else if (this.config.buttons[i].type == 'doublespace') {
            html = html + "<span style='margin: 0 60px;'>";
            counter += 60;
          } else if (this.config.buttons[i].type == 'linebreak') {
            html = html + "</p><hr width='100%'><P>";
            counter = 0;
          }
        } else {
          html = html + `<a class='btn-small waves-effect waves-light 
            ${this.config.buttons[i].color}'><i class='mdi ${this.config.buttons[i].icon} mdi-24px findmeHere' entity='
            ${this.config.buttons[i].entity}' state='${this.config.buttons[i].state}'></i></a>&nbsp;`;
          counter += 60;
        }
      }

      this.content.innerHTML = html + "</P></div>";

      this.querySelectorAll(".findmeHere").forEach(element => {
        element.addEventListener('click', event => {
          hass.callService('homeassistant', element.getAttribute("state").trim(), { entity_id: element.getAttribute("entity").trim() });
        })
      });
    }
  }

  setConfig(config) {
    this.config = config;
  }

  getCardSize() {
    return this.config.cardsize;
  }
}

customElements.define('cinema-card', CinemaCard);