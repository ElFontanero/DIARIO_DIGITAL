<?PHP
$FRASES = ARRAY(
"🌟 Nunca olvides lo valiosa que eres.",
"🌟 Dios siempre tiene un propósito para tu vida.",
"🌟 Sigue brillando como la estrella que eres.",
"🌟 Espero que hoy tengas un día hermoso.",
"🌟 Nunca pierdas esa sonrisa tan bonita.",
"🌟 Acuérdate de descansar un poquito. 😠",
"🌟 Hoy también tienes prohibido rendirte.",
"🌟 Nunca dudes de cuánto te aprecia Dios."
);
$VERSICULOS = ARRAY(
'"Todo lo puedo en Cristo que me fortalece." <BR><B>Filipenses 4:13</B>',
'"Porque yo sé los pensamientos que tengo acerca de vosotros..." <BR><B>Jeremías 29:11</B>',
'"Echando toda vuestra ansiedad sobre Él." <BR><B>1 Pedro 5:7</B>',
'"Jehová es mi pastor; nada me faltará." <BR><B>Salmo 23:1</B>',
'"Esfuérzate y sé valiente." <BR><B>Josué 1:9</B>'
);
$NUMERO = DATE("z");
$INDICEFRASE = $NUMERO % COUNT($FRASES);
$INDICEVERSICULO = $NUMERO % COUNT($VERSICULOS);
$FRASE = $FRASES[$INDICEFRASE];
$VERSICULO = $VERSICULOS[$INDICEVERSICULO];
$FECHA = DATE("d/m/Y");
$HORA = DATE("h:i A");
?>
