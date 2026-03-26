# Riihisoft AI/SEO Optimization and CSS Workshop

## CSS improvements

**View Transitions**

```css
/* src/css/viewtransitions.css */
@view-transition {
  navigation: auto;
}

rs-nav {
    view-transition-name: nav;
}

rs-footer {
    view-transition-name: footer;
}

img[data-product-id="1"] {
    view-transition-name: image-1;
}

img[data-product-id="2"] {
    view-transition-name: image-2;
}

img[data-product-id="3"] {
    view-transition-name: image-3;
}

img[data-product-id="4"] {
    view-transition-name: image-4;
}
```

**Scroll driven animations**

```css
/* scrollanimations.css */
section {
    opacity: 0;
    transform: translateY(100px);
    /* rotate: 5turn; */

    animation: fade-in-up ease-in-out both;
    animation-timeline: view();
    /* aloita kun N määrä näkyvissä ja lopeta kun N */
    animation-range: entry 25% cover 40%;
}

@keyframes fade-in-up {
    to {
        opacity: 1;
        transform: translateY(0);
        /* rotate: 0turn; */
    }
}
```

**@supports syntax**

```css
@supports (animation-timeline: view()) {
  section > * {
    opacity: 0;
    transform: translateY(100px);

    animation: fade-in-up linear both;
    animation-timeline: view();
    animation-range: entry 30% cover 50%;
  }
}
```

**Native details element animation**

```css
:root {
    interpolate-size: allow-keywords;
}

details::details-content {
    height: 0;
    opacity: 0;

    transition:
        height 250ms ease,
        opacity 200ms ease,
        content-visibility 250ms allow-discrete;
}

details[open]::details-content {
    height: auto;
    opacity: 1;
}
```

fix snapping

```css
@supports selector(::details-content) and (interpolate-size: allow-keywords) {
    :root {
        interpolate-size: allow-keywords;
    }

    details::details-content {
        height: 0;
        opacity: 0;

        /* fix snapping, either one works by themselves for this */
        overflow: hidden;
        display: flow-root;

        @media (prefers-reduced-motion: no-preference) {
            transition:
                height 250ms ease,
                opacity 200ms ease,
                content-visibility 250ms allow-discrete;
        }
    }

    details[open]::details-content {
        height: auto;
        opacity: 1;
    }
}
```

**Balanced headings**

```css
/* style.css */
h1, h2, h3 {
    text-wrap: balance;
}
```

**Native popovers**

```html
<div class="hero-actions">
  <a class="button primary" href="#products">Shop Beans</a>
  <button popovertarget="menu" class="button secondary">Health warnings</button>
</div>

<div id="menu" popover class="popover-menu">
  <p>
    These beans will make you into a 10x programmer for at least 30 minutes.
    Consume with care!
  </p>
  <div>
    <button type="button" class="button primary">I agree</button>
    <button type="button" class="button secondary" popovertarget="menu" popovertargetaction="hide">
      I am scared!
    </button>
  </div>
</div>
```

```css
/* popover.css */

.popover-menu {
    /* ... */

    /* position */
    position: fixed; 
    inset: 0;
    margin: auto;
}
```

Add a darkened background

```css
.popover-menu::backdrop {
    background: oklch(from var(--color-bg) calc(l * 0.25) c h / 0.5);
    backdrop-filter: blur(15px);
}
```

Add animations

```css
.popover-menu {
    /* ... */

    /* initial closed state */
    opacity: 0;
    transform: translateY(1rem) scale(0.98);

    /* prepare animations */
    @media (prefers-reduced-motion: no-preference) {
        transition:
            opacity 180ms ease,
            transform 180ms ease,
            display 180ms ease allow-discrete,
            overlay 180ms ease allow-discrete;
    }
}

/* animations */
.popover-menu:popover-open {
    opacity: 1;
    transform: translateY(0) scale(1);
    
    /* ensure smooth entry animation */
    @starting-style {
        opacity: 0;
        transform: translateY(1rem) scale(0.98);
    }
}
```

**Anchor positioning**

```html
<button class="icon-button help-button" aria-describedby="tip-save">
  🛈
</button>
<div id="tip-save" role="tooltip" class="tooltip">
  Cleaner code <strong>might</strong> include inline !importants
</div>
```

```css
.help-button {
    /* ... */

    /* setup anchor element to attach to */
    anchor-name: --help-button;
}

.tooltip {
    /* ... */

    /* position to the anchor in .help-button */
    position: absolute;
    position-anchor: --help-button;
    position-area: right center;
}
```

Add hover functionality

```css
.tooltip {
    /* ... */

    /* initial state */
    opacity: 0;
    transform: translateX(-2rem);
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        transition: opacity 150ms ease;
        transition-property: opacity, transform;
    }
}

.help-button:hover+.tooltip,
.help-button:focus-visible+.tooltip {
    opacity: 1;
    transform: translateY(0);
}
```
