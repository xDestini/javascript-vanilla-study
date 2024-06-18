# Preguntas de entrevista

-- Al iniciar un proyecto.

¿Como iniciar un sistema de patrón de diseño?
- Realice preguntas claratorías para reducir el alcance y definir los requisitos.

## ¿Para quién está diseñando el sistema y porque?
## ¿Qué expectativas tienen en terminos de funcionalidad?
## Deberías preguntar que cosas un cliente simplemente asumiría que estarán en el sistema pero que tal vez no piensen en primera instancia
## Que pasa si nuestro sistema se vuelve popular, como se ve el crecimiento x2 o 10 veces y como influiría eso en el diseño.
## Que problema debe resolver su sistema.
## Haga preguntas aclaratorias si algo no esta totalmente claro, normalmente los requisitos son vagos/ambiguos.
## Escribe cada uno de los requerimientos y base en ellos su diseño.

Criterios: crear un diseño para un sistema que cumpla con los requisitos capturados (por ejemplo, restricciones, escalabilidad, mantenimiento).

Los elementos que suelen incluir son: requisito no funcionales (cantidad de carga, distribución de carga, seguridad), formas de interactuar con el sistema (acceso de usuarios, procesos programados, comunicación síncrona/asincrónica) y flujo de datos.

Mencione explícitamente todas las suposiciones que se están haciendo.
Dedique la mayor parte del tiempo a los requisitos críticos identificados y a la funcionalidad principal.
Justifique las decisiones de diseño que se toman.
Diseñe la solución a escala, es decir, que funcionen más transacciones sin problemas.

Criterios: Diseñe para brindar un buen desempeño operativo pero también un plan para fallas y medición de resultados (métricas).

Tip: asegúrese de incorporar metricas de resiliencia en su diseño.

- ¿Cuáles son las métricas comerciales y técnicas clave para el sistema?
- ¿Cómo alguien usará eso para identificar problemas?
- ¿Cuáles son los posibles cuellos de botella o puntos débiles?
- ¿Qué puntos de falla existen?
- ¿Qué redundancia podemos incorporar para reducir los puntos únicos de falla?
- ¿Cómo puede alguien obtener registros y depurar el sistema?

Criterios: Identificar posibles deficiencias y compensaciones con diferentes diseños (por ejemplo, rendimiento, fallas, tolerancia, dependencias).

Si hay varias formas de diseñar un sistema que satisfaga los requisitos, describa las ventajas y desventajas de ambos enfoques, elija una y explique por qué.

Tipos de escalimientos: 
caching, balanceadores de carga, bases de datos no relacionales, micro servicios s y sharding.
