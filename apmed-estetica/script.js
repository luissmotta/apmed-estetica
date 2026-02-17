/* ===========================
   APMED STETICA - SCRIPT.JS (Otimizado)
   =========================== */

/* --- Utils --- */
const loadScript = (src) => new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    s.defer = true;
    document.body.appendChild(s);
});

/* --- Interaction Trigger Pattern --- */
let interacted = false;
const callbacks = [];

function onFirstInteraction(callback) {
    if (interacted) {
        callback();
        return;
    }
    callbacks.push(callback);
}

const triggerEvents = ['scroll', 'touchstart', 'click', 'keydown', 'mousemove'];
const trigger = () => {
    if (interacted) return;
    interacted = true;
    callbacks.forEach(cb => cb());
    triggerEvents.forEach(e => window.removeEventListener(e, trigger));
};

triggerEvents.forEach(e => window.addEventListener(e, trigger, {
    passive: true
}));
setTimeout(() => {
    if (!interacted) trigger();
}, 6000); // Fallback mais rápido

/* ===========================
   CORE FUNCTIONALITY
   =========================== */
document.addEventListener('DOMContentLoaded', () => {

    // --- Header & Scroll Effects (Optimized with RAF) ---
    const header = document.getElementById('header');
    const scrollTop = document.getElementById('scrollTop');
    const scrollProgress = document.getElementById('scrollProgress');
    const heroSection = document.querySelector('.hero');
    let ticking = false;

    function updateScroll() {
        const scrollY = window.scrollY;

        // Header class
        // Use hardcoded 800px if hero not found to avoid crash, mostly consistent
        const heroHeight = heroSection ? heroSection.offsetHeight : 800;
        const triggerPoint = heroHeight - 100;

        if (scrollY > triggerPoint) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        // Scroll to Top Button
        if (scrollY > 300) scrollTop.classList.add('visible');
        else scrollTop.classList.remove('visible');

        // Progress Bar (Calculation)
        // Optimization: Use document.body.scrollHeight/offsetHeight to avoid forced layout thrash if possible, 
        // but scrollHeight is necessary. Ticking prevents it from running too often.
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight - winHeight;
        const progress = (scrollY / docHeight) * 100;
        if (scrollProgress) scrollProgress.style.width = progress + '%';

        ticking = false;
    }

    if (header || scrollTop || scrollProgress) {
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        }, {
            passive: true
        });
    }

    // Scroll to Top Action
    if (scrollTop) {
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        const mobileLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-cta');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Card CTA Action ---
    const ctaCard = document.querySelector('.proc-card-cta');
    if (ctaCard) {
        ctaCard.addEventListener('click', () => {
            const contato = document.getElementById('contato');
            if (contato) contato.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // --- Forms Init (Static Part) ---
    initForms();
});

/* ===========================
   LAZY LOAD LIBRARIES (AOS, IntlTelInput)
   =========================== */
onFirstInteraction(async () => {
    try {
        // Load in parallel
        await Promise.all([
            loadScript('https://unpkg.com/aos@2.3.1/dist/aos.js'),
            loadScript('https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/intlTelInput.min.js')
        ]);

        // Init AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                once: true,
                disableMutationObserver: true, // CLS Prevention
                offset: 80,
                duration: 2000,
                easing: 'ease-out-quad'
            });
            setTimeout(() => AOS.refresh(), 500); // Ensure elements are found
        }

        // Init IntlTelInput
        const phoneInput = document.getElementById('telefone');
        if (phoneInput && typeof intlTelInput !== 'undefined') {
            const iti = intlTelInput(phoneInput, {
                initialCountry: 'br',
                preferredCountries: ['br'],
                separateDialCode: true,
                strictMode: true,
                utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
            });
            phoneInput.itiInstance = iti;
            // Add class to styling
            phoneInput.closest('.form-group')?.classList.add('iti-loaded');
        }

    } catch (err) {
        console.warn('Lib load error:', err);
    }
});

/* ===========================
   FORM LOGIC
   =========================== */
function initForms() {
    const forms = document.querySelectorAll('form[data-form]');
    forms.forEach(form => form.addEventListener('submit', handleFormSubmit));
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('[type="submit"]');
    const feedback = form.querySelector('.form-feedback');

    // Validation
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        }
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.classList.add('error');
                isValid = false;
            }
        }
    });

    if (!isValid) {
        if (feedback) feedback.textContent = 'Preencha todos os campos corretamente.';
        return;
    }

    // Loading State
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
        const formData = new FormData(form);

        // Get Phone Number from Instance if available
        const phoneInput = form.querySelector('#telefone');
        if (phoneInput && phoneInput.itiInstance) {
            // Check if valid number
            if (!phoneInput.itiInstance.isValidNumber()) {
                if (phoneInput.value.trim() !== '') {
                    // If user typed something but it's invalid, warn them
                    // Or just proceed with what they typed? 
                    // Let's strict check
                    // phoneInput.classList.add('error');
                    // throw new Error('Número de telefone inválido');
                }
            }
            formData.set('telefone', phoneInput.itiInstance.getNumber());
        }

        const response = await fetch(form.getAttribute('action') || window.location.pathname, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
            if (typeof fbq === 'function') fbq('track', 'Lead');

            const action = form.getAttribute('action');
            if (action && !action.includes('#')) { // Only redirect if it's a real URL
                window.location.href = action;
                return;
            }

            if (feedback) {
                feedback.textContent = 'Enviado com sucesso!';
                feedback.classList.add('success');
            }
            form.reset();
        } else {
            throw new Error('Erro no envio');
        }
    } catch (error) {
        console.error('Form error:', error);
        if (feedback) {
            feedback.textContent = 'Erro ao enviar. Verifique os dados.';
            feedback.classList.add('error');
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}
