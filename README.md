# Simple Wu-Tang Name Generator

Answer six multiple-choice questions to generate a Wu-Tang-inspired name.

## Overview

Simple Wu-Tang Name Generator asks six questions about preferences such as vibe, element, animal, energy, time of day, and style.

The browser sends the selected answers to a Node.js server. The server uses those answers to select and combine two name parts, then returns the generated name to the page.

## Features

- Six-question multiple-choice form
- Client-side answer collection and validation
- Node.js HTTP server
- API endpoint for generating the result
- Two eight-name lists used to create the final name
- Up to 64 possible name combinations
- Result displayed directly in the browser

## Technologies

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" title="HTML">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://nodejs.org/" title="Node.js">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40">
  </a>
</p>

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/nilesleesmith/simple-wu-tang-name-generator.git
```

2. Open the project folder:

```bash
cd simple-wu-tang-name-generator
```

3. Start the Node.js server:

```bash
node server.js
```

4. Open the application in a browser:

```text
http://localhost:8000
```

No additional packages or installation steps are required.

## Live Site

https://simple-wu-tang-name-generator.onrender.com

## Screenshots

![Simple Wu-Tang Name Generator desktop view](./screenshots/simple-wu-tang-name-generator-desktop.png)
