import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://yjfurafknxwoaqqrvhkf.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_8AFJy2_o3iMBt6rjXeduGA_F9oGL3VB';
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

const form = document.getElementById('reservar-form');

function closeRegistrationUI() {
    const heroBadge = document.getElementById('hero-badge');
    const heroBadgeIcon = document.getElementById('hero-badge-icon');
    const heroBadgeText = document.getElementById('hero-badge-text');
    if (heroBadge) {
        heroBadge.className = 'inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-950/55 px-4 py-2 text-red-400 font-label-md text-label-md backdrop-blur-md';
    }
    if (heroBadgeIcon) {
        heroBadgeIcon.innerText = 'block';
    }
    if (heroBadgeText) {
        heroBadgeText.innerText = 'Cupos agotados';
    }

    const headerBtn = document.getElementById('header-reserve-btn');
    if (headerBtn) {
        headerBtn.innerText = 'Cupos agotados';
        headerBtn.className = 'hidden md:inline-flex items-center justify-center bg-outline-variant/20 text-on-surface-variant/50 font-label-md text-label-md px-6 py-3 rounded-full cursor-not-allowed pointer-events-none';
        headerBtn.href = 'javascript:void(0)';
    }

    const heroBtn = document.getElementById('hero-reserve-btn');
    if (heroBtn) {
        heroBtn.innerText = 'Cupos agotados';
        heroBtn.className = 'inline-flex items-center justify-center bg-outline-variant/20 text-on-surface-variant/50 font-label-md text-label-md px-8 py-4 rounded-full cursor-not-allowed pointer-events-none';
        heroBtn.href = 'javascript:void(0)';
    }

    const formEl = document.getElementById('reservar-form');
    if (formEl) {
        formEl.classList.add('hidden');
    }
    const fullMsg = document.getElementById('full-message');
    if (fullMsg) {
        fullMsg.classList.remove('hidden');
        fullMsg.classList.add('flex');
    }
}

async function checkCapacity() {
    try {
        const { data: count, error } = await supabase.rpc('get_registros_count');
        if (error) {
            console.error('Error al obtener el conteo de registros:', error);
            return false;
        }
        if (count >= 10) {
            closeRegistrationUI();
            return true;
        }
        return false;
    } catch (err) {
        console.error('Error al verificar la capacidad:', err);
        return false;
    }
}

// Verificar capacidad al cargar la página
checkCapacity();

if (form) {
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        if (SUPABASE_URL.includes('TU-PROYECTO') || SUPABASE_PUBLISHABLE_KEY.includes('TU_SUPABASE')) {
            alert('Configura la URL y la publishable key de Supabase antes de publicar.');
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Doble verificación al enviar el formulario
        const isFull = await checkCapacity();
        if (isFull) {
            alert('Lo sentimos, todos los cupos para este evento ya se han completado.');
            return;
        }

        const registro = {
            nombre: document.getElementById('nombre').value.trim(),
            universidad: document.getElementById('universidad').value.trim(),
            semestre: document.getElementById('semestre').value,
            correo: document.getElementById('correo').value.trim().toLowerCase(),
            telefono: document.getElementById('telefono').value.trim(),
        };

        const { error } = await supabase
            .from('registros')
            .insert(registro);

        if (error) {
            console.error(error);

            if (error.code === '23505') {
                alert('Este correo ya fue registrado.');
            } else if (error.code === '42501') {
                alert('El registro no está habilitado en este momento. Por favor intenta más tarde.');
            } else {
                alert('No se pudo enviar el registro. Intenta nuevamente.');
            }

            submitButton.disabled = false;
            submitButton.textContent = 'Reservar mi espacio';
            return;
        }

        const successTime = document.getElementById('success-time');
        if (successTime) {
            successTime.innerText = 'Miércoles 1 de julio de 2026 · 5:00 PM';
        }

        this.style.opacity = '0';
        this.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            this.classList.add('hidden');
            const msg = document.getElementById('success-message');
            if (msg) {
                msg.classList.remove('hidden');
                msg.classList.add('flex');
                msg.style.opacity = '0';
                msg.style.transition = 'opacity 0.5s ease';
                setTimeout(() => { msg.style.opacity = '1'; }, 50);
            }
        }, 300);
    });
}
