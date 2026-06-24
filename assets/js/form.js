import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://yjfurafknxwoaqqrvhkf.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_8AFJy2_o3iMBt6rjXeduGA_F9oGL3VB';
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

const form = document.getElementById('reservar-form');

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

        const registro = {
            nombre: document.getElementById('nombre').value.trim(),
            universidad: document.getElementById('universidad').value.trim(),
            correo: document.getElementById('correo').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            sesion: document.getElementById('sesion')?.value || 'lista-espera'
        };

        const { error } = await supabase
            .from('registros')
            .insert(registro);

        if (error) {
            console.error(error);

            if (error.code === '23505') {
                alert('Este correo ya fue registrado.');
            } else {
                alert('No se pudo enviar el registro. Intenta nuevamente.');
            }

            submitButton.disabled = false;
            submitButton.textContent = 'Unirme a la lista';
            return;
        }

        const successTime = document.getElementById('success-time');
        if (successTime) {
            successTime.innerText = 'Próxima edición por confirmar';
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
