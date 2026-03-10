/**
 * GEOSYSTEM CORE v6.1
 * Lógica de Transmisión y Captura de Datos
 */

// 1. Reloj de Sincronía Global
function iniciarReloj() {
    const reloj = document.getElementById('reloj-v6') || document.getElementById('reloj-principal');
    if (reloj) {
        setInterval(() => {
            reloj.innerText = new Date().toLocaleTimeString();
        }, 1000);
    }
}

// 2. Motor de Reproducción del Manifiesto
function desplegarManifiesto() {
    const videoContainer = document.getElementById('youtube-core');
    const player = document.getElementById('video-frame');
    
    // ID del video: ACTUALIZACIÓN DE SISTEMA.. 7%
    const emisorID = "JGToOtVf0f8"; 

    if (player) {
        player.src = `https://www.youtube.com/embed/${emisorID}?autoplay=1&rel=0&modestbranding=1&border=0`;
        videoContainer.classList.remove('hidden');
    }
}

// 3. Sistema de Captura de Datos (Suscripciones/Donaciones)
function iniciarCaptura(tipo) {
    // Estas URLs deben dirigirse a tus formularios de recolección de correo
    const formularios = {
        'donacion': 'https://tu-web.com/registro-donantes',
        'suscripcion': 'https://tu-web.com/registro-suscriptores',
        'colaboracion': 'https://tu-web.com/registro-colaboradores'
    };

    const logBox = document.getElementById('agent-orders');
    if (logBox) {
        logBox.innerHTML += `<p class="agent-log text-cyan-400">> REQUIRIENDO DATOS: ${tipo.toUpperCase()}...</p>`;
    }

    // Redirección para capturar datos personales
    window.open(formularios[tipo], '_blank');
}

// 4. Validación de Acceso GX
function triggerCore() {
    const input = document.getElementById('master-key') || document.getElementById('pass-input');
    const key = input.value.trim().toUpperCase();
    
    if (key === "GX-8-7-IMMORTAL") {
        // Efecto visual de éxito
        document.body.classList.add('sync-flash');
        setTimeout(() => document.body.classList.remove('sync-flash'), 500);

        // Activación de módulos
        desplegarManifiesto();
        const synergy = document.getElementById('synergy-panel') || document.getElementById('portal-sinergia');
        if (synergy) synergy.classList.remove('hidden');

        // Log de sistema
        const logBox = document.getElementById('agent-orders');
        if (logBox) {
            logBox.innerHTML = '<p class="agent-log text-cyan-400">> 7% UPDATE DETECTED. TRANSMITIENDO...</p>';
        }

        // Limpiar formulario de acceso
        const actionBox = document.getElementById('action-box') || document.getElementById('login-form');
        if (actionBox) {
            actionBox.innerHTML = '<div class="text-cyan-400 text-center py-2 border border-cyan-900 font-bold animate-pulse text-[8px]">SISTEMA SINCRONIZADO</div>';
        }
    } else {
        alert("ERROR: CREDENCIAL INVÁLIDA");
    }
}

// Inicialización al cargar la página
window.addEventListener('DOMContentLoaded', iniciarReloj);
