/* Base UI behaviors: nav, reveals, and the accessible toggle groups
   shared by the worlds tabs and the playground chips. */

export function initUI() {
    // Year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Nav scrolled state
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu
    const toggle = document.getElementById('navToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
        document.querySelectorAll('#navMobile a').forEach(a =>
            a.addEventListener('click', () => {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            })
        );
    }

    // Reveal-on-scroll (subtle; disabled by prefers-reduced-motion in CSS)
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('in'));
    }
}

/* Roving-tabindex radio/tab group (WAI-ARIA pattern). */
export function createToggleGroup(container, { role = 'radio', onSelect = () => {} } = {}) {
    const items = () => Array.from(container.querySelectorAll(`[role="${role}"]`));
    const checkedAttr = role === 'tab' ? 'aria-selected' : 'aria-checked';
    const ctl = { onSelect, select, current: 0 };

    function select(index, { focus = false, fire = true } = {}) {
        const list = items();
        if (!list[index]) return;
        list.forEach((el, i) => {
            const active = i === index;
            el.setAttribute(checkedAttr, String(active));
            el.tabIndex = active ? 0 : -1;
        });
        ctl.current = index;
        if (focus) list[index].focus();
        if (fire) ctl.onSelect(index, list[index]);
    }

    container.addEventListener('click', (e) => {
        const el = e.target.closest(`[role="${role}"]`);
        if (!el) return;
        select(items().indexOf(el));
    });

    container.addEventListener('keydown', (e) => {
        const list = items();
        const i = list.indexOf(document.activeElement);
        if (i === -1) return;
        let next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % list.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + list.length) % list.length;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = list.length - 1;
        if (next !== null) {
            e.preventDefault();
            select(next, { focus: true });
        }
    });

    return ctl;
}

/* Worlds tabs: one panel visible at a time. */
export function initWorldTabs() {
    const tablist = document.querySelector('.worlds-tabs');
    const panels = Array.from(document.querySelectorAll('.world-panel'));
    if (!tablist || !panels.length) return null;

    const ctl = createToggleGroup(tablist, {
        role: 'tab',
        onSelect: (i) => showPanel(i)
    });

    function showPanel(index) {
        panels.forEach((p, i) => { p.hidden = i !== index; });
        const world = panels[index]?.dataset.world;
        if (world) sessionStorage.setItem('trWorld', world);
    }

    showPanel(0);
    return ctl;
}
