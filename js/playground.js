/* Interactive translation playground: self-contained (no GSAP dependency).
   Real empty-state screenshots are the base; HTML bubbles replicate the app's
   MessageBubble on top. All translations are canned (data.js): no network. */

import { LANGS, SCENARIOS, PHRASES } from './data.js';
import { createToggleGroup } from './ui.js';

const state = { scenario: 'sport', phrase: 0, langs: ['es', 'ja'] };

const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

export function initPlayground() {
    const controls = $('#pgControls');
    const stage = $('#pgStage');
    if (!controls || !stage) return;

    // Follow the last world viewed (set by worlds.js / tabs), once, at init.
    const remembered = sessionStorage.getItem('trWorld');
    if (remembered && SCENARIOS[remembered]) state.scenario = remembered;

    /* Scenario chips */
    const scenarioCtl = createToggleGroup($('#pgScenarios'), {
        onSelect: (i, el) => {
            state.scenario = el.dataset.scenario;
            state.phrase = 0;
            renderPhraseChips();
            render();
        }
    });
    const scenarioIndex = Object.keys(SCENARIOS).indexOf(state.scenario);
    if (scenarioIndex > 0) scenarioCtl.select(scenarioIndex, { fire: false });

    /* Phrase chips (re-rendered per scenario) */
    let phraseCtl = null;
    function renderPhraseChips() {
        const row = $('#pgPhrases');
        $$('.chip', row).forEach(c => c.remove());
        PHRASES[state.scenario].forEach((p, i) => {
            const b = document.createElement('button');
            b.className = 'chip';
            b.setAttribute('role', 'radio');
            b.setAttribute('aria-checked', String(i === state.phrase));
            b.tabIndex = i === state.phrase ? 0 : -1;
            b.dataset.phrase = i;
            b.textContent = `“${p.en}”`;
            row.appendChild(b);
        });
        if (!phraseCtl) {
            phraseCtl = createToggleGroup(row, {
                onSelect: (i) => { state.phrase = i; render(); }
            });
        }
    }

    /* Language selects */
    const selects = [$('#pgLang0'), $('#pgLang1')];
    selects.forEach((sel, slot) => {
        sel.addEventListener('change', () => {
            state.langs[slot] = sel.value;
            render();
        });
    });

    /* Speech synthesis (feature-detected) */
    const speechOK = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    if (speechOK) {
        $$('.pg-speaker').forEach(btn => {
            btn.hidden = false;
            btn.addEventListener('click', () => speak(btn));
        });
    }

    function speak(btn) {
        const slot = Number(btn.dataset.speak);
        const lang = state.langs[slot];
        const text = PHRASES[state.scenario][state.phrase].t[lang];
        window.speechSynthesis.cancel();
        $$('.pg-speaker').forEach(b => b.setAttribute('aria-pressed', 'false'));
        const u = new SpeechSynthesisUtterance(text);
        u.lang = LANGS[lang].bcp;
        u.onend = u.onerror = () => btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-pressed', 'true');
        window.speechSynthesis.speak(u);
    }

    /* Render current state into the stage */
    function render(instant = false) {
        const apply = () => {
            const scenario = SCENARIOS[state.scenario];
            const phrase = PHRASES[state.scenario][state.phrase];

            $('#pgPillText').textContent = phrase.en;

            state.langs.forEach((lang, slot) => {
                const phone = $(`.pg-phone[data-slot="${slot}"]`);
                if (!phone) return;
                const meta = LANGS[lang];

                // Base screenshot matches the picked language (baked-in header)
                const pic = $('[data-base]', phone);
                $('source', pic).srcset =
                    `assets/screens/pg-empty-${lang}.webp 600w, assets/screens/pg-empty-${lang}-900.webp 900w`;
                const img = $('img', pic);
                img.src = `assets/screens/pg-empty-${lang}.png`;
                img.alt = `Listener phone, connected in ${meta.name}`;

                // Bubble replica
                const avatar = $('[data-avatar]', phone);
                avatar.textContent = scenario.avatar;
                avatar.classList.toggle('neutral', scenario.neutral);
                $('[data-name]', phone).textContent = scenario.speaker;
                const chip = $('[data-chip]', phone);
                chip.hidden = !scenario.chip;
                if (scenario.chip) chip.textContent = scenario.chip;
                $('[data-flag]', phone).textContent = meta.flag;
                const text = $('[data-text]', phone);
                text.textContent = phrase.t[lang];
                text.setAttribute('lang', lang);
                text.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
            });

            // Single polite announcement (never on the bubbles themselves)
            $('#pgStatus').textContent =
                `Now showing “${phrase.en}” in ${LANGS[state.langs[0]].name} and ${LANGS[state.langs[1]].name}.`;
        };

        // View Transition crossfade for user-initiated updates; instant otherwise
        // (never during initial load: starting a transition there throws)
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!instant && !reduced && document.visibilityState === 'visible' && document.startViewTransition) {
            document.startViewTransition(apply);
        } else {
            apply();
        }
    }

    renderPhraseChips();
    render(true);
}
