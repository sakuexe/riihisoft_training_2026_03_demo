/**
 * @extends HTMLElement
 */
class RiihisoftNavigation extends HTMLElement {
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
        nav {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(20px);
          background: oklch(from var(--color-bg) l c h / 0.5);
          border-bottom: 1px solid var(--color-border);
          container: --navigation / inline-size;
        }

        nav>div {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: min(100% - 2rem, 1200px);
          margin-inline: auto;
        }

        .brand {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: 0.025em;

          &>img {
            margin-inline-end: var(--spacing-xs);
          }

          &>span {
            color: var(--color-brand);
          }
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        a {
          color: currentColor;
          text-decoration: none;

          &:not(.brand) {
            display: inline-block;
            padding-inline: var(--spacing-sm);
            padding-block: var(--spacing-md);
          }

          &:hover {
            background-color: var(--color-border);
          }
        }
      </style>

      <nav>
        <div>
          <a href="../#top" class="brand">
            <img src="./images/riihisoft_logo_no_text.png" alt="RiihiShop logo" width="32" height="37">
            Riihi<span>Beans</span>
          </a>
          <ul>
            <li><a href="index.html#products">Products</a></li>
            <li><a href="index.html#why">Why Socks?</a></li>
            <li><a href="index.html#compare">Compare</a></li>
            <li><a href="index.html#faq">FAQ</a></li>
          </ul>
        </div>
      </nav>

    `;
  }
}

customElements.define("rs-nav", RiihisoftNavigation);
