import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

  :root {
	--color-primary: green;
	--color-primary-accent: lime;
	--color-success: #33c648;
	--color-warning: #ffbb55;
	--color-white: #ffffff;
	--color-text: #111111;
	--color-muted: #a0a0a4;
	--radius-1: 4px;	font-size: 22px !important;
		line-height: 30px;
	--radius-2: 0.8rem;
	--radius-3: 1.2rem;
	--radius-4: 2rem;
	--radius-5: 100%;
	--transition: all 400ms ease;
	--color-text: #ffffff;
	--color-ui-primary: #0a0a0c;
	--color-ui-secondary: #171719;
	--color-ui-variant: #1f1f21;
	--gradient-1: linear-gradient(
		to right,
		var(--color-primary) 0%,
		var(--color-primary-accent) 100%
	);
	--gradient-2: linear-gradient(
		190deg,
		var(--color-primary) 0%,
		rgba(18, 82, 78, 0.5) 100%
	);
	--glow-1: radial-gradient(rgba(18, 82, 78, 0.5) 0%, rgba(0, 0, 0, 0.5));
}

* {
	margin: 0;
	padding: 0;
	border: none;
	outline: none;
	text-decoration: none;
	box-sizing: border-box;
	scrollbar-width: thin;
	scrollbar-color: var(--color-primary) transparent;
}

html,
body {
	min-height: 100vh;
	font-family: 'Sora', sans-serif;
	color: var(--color-text);
	scroll-behavior: smooth;
	overscroll-behavior: contain;
	background: var(--color-ui-primary);
}

body {
	overflow: hidden;
	overflow-y: auto;
	max-width: 2000px;
	margin: auto;
}

a {
	text-decoration: none;
	color: var(--color-text);
	display: inline-block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 500;
}

p {
	font-size: 15px;
	font-weight: 400;
	line-height: 21px;
}

img {
	width: 100%;
	object-fit: cover;
	min-height: 100%;
	display: block;
	transition: var(--transition);
}

small {
	display: block;
	font-size: 13px;
	line-height: 18px;
}

ul li {
	list-style: none;
	padding: 0;
	margin: 0;
}


`;
