/**
 * @extends HTMLElement
 */
class RiihisoftFooter extends HTMLElement {
  static get observedAttributes() {
    return ["language"];
  }

  static themeSheetPromise = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  async render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        footer {
          border-block-start: 1px solid var(--color-border);
          color: var(--color-text-muted);
        }

        footer > div {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;

          width: min(100% - 2rem, 1200px);
          margin-inline: auto;
          margin-block: var(--spacing-xl) var(--spacing-3xl);
        }
      </style>

      <footer id="footer">
        <div>
          <div>
            <strong>RiihiBeans</strong><br />
            Programming enhancing beans for every variant of the cloud.
          </div>
          <div>
            &copy; 2026 Riihisoft · Gia Matikainen · Saku Karttunen
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("rs-footer", RiihisoftFooter);
