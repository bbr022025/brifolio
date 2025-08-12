## Version history

#### v.0.04 - Color Scheme & Typography for Design System in Figma

- A color palette for light/dark-mode has been developed in Figma.
- A typography set-up has been developed in Figma.

#### v.0.06 - Button component in Figma.

- A basic button component has been developed using properties and variables.

#### v.0.08 - Card component in Figma.

- Card component has been developed in Figma.

### v.0.1 - Hero component

#### v.0.12 - Interactive webpage in Figma

- The menu slides between pages.

### v.0.2 - Basic components developed in React

#### v.0.22 - Hero component

#### v.0.24 - button component

#### v.0.26 - card component

#### v.0.28 - basic website sections sketched out

### v.0.3 - Basic mobile-first website running!

## Version Plan

### v.1.0 - Mobile-first website

A mobile-first portfolio website made in react that meets the standards of the WCAG 2.1 AA.
It has a hero with a CTA that directs the user to the menu. The menu itself opens up to the various section cards.
The user can return to the menu by tapping the burger icon (not available from the hero).

#### v.1.02 - Interactive components in Figma

- Buttons are interactive with hover and click effects.

### v.2.0 - Responsive website

A responsive portfolio website made in react. It has a hero with a CTA that directs the user to the menu.
The website is based on horizontal snap scrolling. All buttons are hexagons.

## Colors

### Bright mode

- color scheme 1: https://www.realtimecolors.com/?colors=171717-39a7db-dccec7-f58447-faead6&fonts=Inter-Inter#how
- color scheme 2: https://www.realtimecolors.com/?colors=171717-dccec7-39a7db-f58447-faead6&fonts=Inter-Inter

### Dark mode

### ?

```CSS

/* Bright mode */
  --text: hsl(0, 0%, 9%);
  --background: hsl(199, 69%, 54%);
  --primary: hsl(20, 23%, 82%);
  --secondary: hsl(21, 90%, 62%);
  --accent: hsl(33, 78%, 91%);

  /* Dark mode */


```

## Typography

```CSS

@import url('https://fonts.googleapis.com/css?family=Inter:700|Inter:400');

body {
  font-family: 'Inter';
  font-weight: 400;
}

h1, h2, h3, h4, h5 {
  font-family: 'Inter';
  font-weight: 700;
}

html {font-size: 100%;} /* 16px */

h1 {font-size: 4.210rem; /* 67.36px */}

h2 {font-size: 3.158rem; /* 50.56px */}

h3 {font-size: 2.369rem; /* 37.92px */}

h4 {font-size: 1.777rem; /* 28.48px */}

h5 {font-size: 1.333rem; /* 21.28px */}

small {font-size: 0.750rem; /* 12px */}

```
