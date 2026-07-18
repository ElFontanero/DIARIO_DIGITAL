const FRASES = [
"🌟 Nunca olvides lo valiosa que eres.",
"🌟 Dios siempre tiene un propósito para tu vida.",
"🌟 Sigue brillando como la estrella que eres.",
"🌟 Espero que hoy tengas un día hermoso.",
"🌟 Nunca pierdas esa sonrisa tan bonita.",
"🌟 Acuérdate de descansar un poquito. 😠",
"🌟 Hoy también tienes prohibido rendirte.",
"🌟 Nunca dudes de cuánto te aprecia Dios."
];

const VERSICULOS = [
'"Todo lo puedo en Cristo que me fortalece."<br><b>Filipenses 4:13</b>',
'"Porque yo sé los pensamientos que tengo acerca de vosotros..."<br><b>Jeremías 29:11</b>',
'"Echando toda vuestra ansiedad sobre Él."<br><b>1 Pedro 5:7</b>',
'"Jehová es mi pastor; nada me faltará."<br><b>Salmo 23:1</b>',
'"Esfuérzate y sé valiente."<br><b>Josué 1:9</b>'
];
const HOY = new Date();
const NUMERO = Math.floor(
    (HOY - new Date(HOY.getFullYear(),0,0)) / 86400000
);
const FRASE = FRASES[NUMERO % FRASES.length];
const VERSICULO = VERSICULOS[NUMERO % VERSICULOS.length];
const FECHA = HOY.toLocaleDateString("es-MX");
const HORA = HOY.toLocaleTimeString("es-MX",{
hour:"2-digit",
minute:"2-digit"
});
document.getElementById("FRASE_DIA").innerHTML = FRASE;
document.getElementById("VERSICULO_DIA").innerHTML = VERSICULO;
document.getElementById("FECHA_DIA").innerHTML = FECHA + "<br>" + HORA;
