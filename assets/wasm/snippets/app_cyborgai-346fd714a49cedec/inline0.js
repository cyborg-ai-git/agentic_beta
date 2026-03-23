
    export function js_stt_start(lang) {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
            window._stt_recognition = new SR();
            window._stt_recognition.continuous = true;
            window._stt_recognition.interimResults = true;
            window._stt_recognition.lang = lang;
            window._stt_transcript = '';
            window._stt_recognition.onresult = function(event) {
                var transcript = '';
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }
                window._stt_transcript = transcript;
            };
            window._stt_recognition.start();
        }
    }
    export function js_stt_stop() {
        if (window._stt_recognition) { window._stt_recognition.stop(); }
        var t = window._stt_transcript || '';
        window._stt_transcript = '';
        return t;
    }
    export function js_stt_get_transcript() {
        return window._stt_transcript || '';
    }
