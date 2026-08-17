/* Entry — the page is fully readable with none of this running.
   JS adds: nav behavior, world tabs, reveal-on-scroll, the playground. */

import { initUI, initWorldTabs } from './ui.js';
import { initPlayground } from './playground.js';

// Gate reveal styling on JS being present (no-JS = everything visible)
document.documentElement.classList.add('js');

initUI();
initWorldTabs();
initPlayground();
