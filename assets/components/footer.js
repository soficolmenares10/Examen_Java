class AppFooter extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `

      <footer class="footer">

        <div class="footer-content">

          <h3>
            Hotel El Rincón del Carmen
          </h3>

          <p>
            Lujo, comodidad y experiencias inolvidables.
          </p>

          <div class="footer-info">

            <p>
              📍 Medellín, Colombia
            </p>

            <p>
              📞 +57 300 000 0000
            </p>

            <p>
              ✉ contacto@rincondelcarmen.com
            </p>

          </div>

          <div class="footer-copy">

            <p>
              © 2026 Todos los derechos reservados
            </p>

          </div>


        </div>

      </footer>
    `;
  }
}

customElements.define(
  'app-footer',
  AppFooter
);// usa git checkout <nombre-de-la-rama