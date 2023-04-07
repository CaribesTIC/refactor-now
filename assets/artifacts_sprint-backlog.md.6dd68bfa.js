import{_ as e,c as a,o as r,N as o}from"./chunks/framework.f942ffd7.js";const i="/scrum/assets/sprint-backlog1.f1f85011.jpg",l="/scrum/assets/sprint-backlog2.03b018ad.jpg",s="/scrum/assets/sprint-backlog3.2bd14300.jpg",t="/scrum/assets/sprint-backlog4.7f065d88.jpg",_=JSON.parse('{"title":"Pila del Sprint","description":"","frontmatter":{},"headers":[],"relativePath":"artifacts/sprint-backlog.md"}'),n={name:"artifacts/sprint-backlog.md"},d=o('<h1 id="pila-del-sprint" tabindex="-1">Pila del Sprint <a class="header-anchor" href="#pila-del-sprint" aria-label="Permalink to &quot;Pila del Sprint&quot;">​</a></h1><blockquote><p>La Pila del Sprint es una lista reducida de ítems de la Pila del Producto, que han sido negociados entre el Dueño del Producto y el Equipo de Desarrollo durante la planificación del Sprint. Esta lista, se genera al comienzo de cada Sprint y representa aquellas características que el equipo se compromete a desarrollar durante la iteración actual.</p></blockquote><p>La Pila del Sprint es la lista que descompone las funcionalidades de la Pila del Producto (Historias de Usuario) en las tareas necesarias para construir un incremento: una parte completa y operativa del producto. La realiza el equipo durante la reunión de planificación del Sprint, auto-asignando cada tarea a un miembro del equipo, e indicando en la misma lista cuánto esfuerzo se prevé que falta para terminarla.</p><p>La Pila del Sprint descompone el trabajo en unidades de tamaño adecuado para monitorizar el avance a diario, e identificar riesgos y problemas sin necesidad de procesos de gestión complejos. Los ítems incluidos en la Pila del Sprint se dividen en tareas las cuales generalmente, no demanden una duración superior a un día de trabajo del miembro del equipo que se haya asignado dicha tarea. Se actualiza diariamente por el equipo y de manera permanente, muestra:</p><ul><li>Las tareas pendientes, en curso y terminadas.</li><li>La estimación del esfuerzo pendiente de cada tarea sin concluir.</li><li>El nombre del miembro del equipo que se ha asignado dicha tarea.</li></ul><p>Generalmente, la Pila del Sprint, se visualiza mediante un tablero físico, montado en alguna de las paredes de la sala de desarrollo.</p><p><img src="'+i+'" alt="sprint-backlog"></p><p>Es muy frecuente, a la vez de ser una práctica recomendada, que cada tarea sea a la vez <em>&quot;etiquetada&quot;</em>, diferenciando por ejemplo cuando representa una corrección de error, una tarea de diseño, una prueba, etc.</p><p><img src="'+l+'" alt="sprint-backlog"></p><h2 id="dividiendo-historias-de-usuario-en-tareas" tabindex="-1">Dividiendo Historias de Usuario en tareas <a class="header-anchor" href="#dividiendo-historias-de-usuario-en-tareas" aria-label="Permalink to &quot;Dividiendo Historias de Usuario en tareas&quot;">​</a></h2><p>La estrategia consiste en desmembrar el item a la mínima expresión posible, encuadrada en un mismo tipo de actividad. El desmembramiento debe hacerse <em>&quot;de lo general a lo particular, y de lo particular al detalle&quot;</em>.</p><p><img src="'+s+'" alt="sprint-backlog"></p><p><strong>Análisis General</strong>: Es aquel que responde a la pregunta <em>¿qué es?</em></p><p><strong>Por ejemplo</strong>: Un sistema de validación de usuarios registrados</p><p><strong>Análisis Particular</strong>: Es el que responde a la pregunta <em>¿cómo hacerlo?</em></p><p><strong>Por ejemplo</strong>: Arquitectura MVC (requiere hacer el modelo, la lógica y la GUI de la vista y el controlador).</p><p><strong>Análisis Detallado</strong>: Es el que responde a la pregunta general <em>¿qué tareas se necesitan hacer para lograrlo?</em> Los detalles, son aquellas restricciones que deberán considerarse para todo lo anterior.</p><p><strong>Por ejemplo</strong>: La creación del modelo, repercutirá en la base de datos. Por lo cual, tras crear los nuevos modelos, habrá que correr el ORM para que modifique las tablas.</p><h2 id="otro-detalle-a-considerar-es-el-tiempo-que-demanda-cada-tarea" tabindex="-1">Otro detalle a considerar, es el tiempo que demanda cada tarea. <a class="header-anchor" href="#otro-detalle-a-considerar-es-el-tiempo-que-demanda-cada-tarea" aria-label="Permalink to &quot;Otro detalle a considerar, es el tiempo que demanda cada tarea.&quot;">​</a></h2><p><strong>Por ejemplo</strong>: Correr un ORM lleva solo algunos minutos, pues no puede ser considerado una única tarea. Entonces, puede <em>&quot;sumarse como detalle&quot;</em> a la tarea <em>&quot;crear modelos&quot;</em>. De manera contraria, documentar en el manual del usuario, llevará todo un día de trabajo. Por lo cual, debe asignarse a una única tarea.</p><p><strong>Entonces se debe</strong>:</p><ul><li><p>Crear el modelo Usuario y correr el ORM para modificar las tablas</p><ul><li>Etiqueta: programación</li><li>Esfuerzo: 2 h</li></ul></li><li><p>Diseñar un formulario HTML para insertar usuario y contraseña</p><ul><li>Etiqueta: diseño</li><li>Esfuerzo: 4 h</li></ul></li><li><p>Desarrollar la lógica de la vista del formulario para el logueo</p><ul><li>Etiqueta: programación</li><li>Esfuerzo: 4 h</li></ul></li><li><p>Crear el controlador para el modelo</p><ul><li>Etiqueta: programación</li><li>Esfuerzo: 6 h</li></ul></li><li><p>Correr las pruebas e integrar</p><ul><li>Etiqueta: prueba</li><li>Esfuerzo: 1 h</li></ul></li></ul><p>Finalmente, dichas tareas se plasmarán en diferentes fichas (una tarea en cada uno). Los miembros del equipo decidirán qué tareas se asignará cada uno y se colocarán las fichas en el tablero:</p><p><img src="'+t+'" alt="sprint-backlog"></p><p>Es también una herramienta para la comunicación visual directa del equipo.</p><h2 id="condiciones" tabindex="-1">Condiciones <a class="header-anchor" href="#condiciones" aria-label="Permalink to &quot;Condiciones&quot;">​</a></h2><ul><li>Sólo el equipo la puede modificar durante el Sprint.</li><li>Es realizada de forma conjunta por todos los miembros del equipo.</li><li>Cubre todas las tareas identificadas por el equipo para conseguir el objetivo del Sprint.</li><li>Es visible para todo el equipo. Idealmente en un tablero o pared en el mismo espacio físico donde trabaja el equipo.</li><li>Las tareas demasiado grandes deben descomponerse en otras más pequeñas. Se deben considerar “grandes” las tareas que necesitan más de un día para realizarse.</li></ul><h2 id="formato-y-soporte" tabindex="-1">Formato y soporte <a class="header-anchor" href="#formato-y-soporte" aria-label="Permalink to &quot;Formato y soporte&quot;">​</a></h2><p>Son soportes habituales:</p><ul><li>Tablero físico o pared.</li><li>Hoja de cálculo.</li><li>Herramienta colaborativa o de gestión de proyectos.</li></ul><p>Y sobre el más adecuado a las características del proyecto, oficina y equipo, lo apropiado es diseñar el formato más cómodo para todos, teniendo en cuenta los siguientes criterios:</p><ul><li>Incluir sólo la información estrictamente necesaria.</li><li>Facilitar la consulta y la comunicación diaria y directa del equipo.</li><li>Debe servir de medio para registrar en cada reunión de Apertura Diaria del Sprint, el tiempo que le <em>“debería”</em> quedar a cada tarea.</li><li>Incluir la siguiente información: Pila del Sprint, persona responsable de cada tarea, estado en el que se encuentra y tiempo de trabajo que queda para completarla.</li></ul><blockquote><p>Durante el Sprint, el equipo actualiza a diario en ella los <em>“tiempos pendientes”</em> de cada tarea. Al mismo tiempo, con estos datos traza en el Gráfico de Avance el trabajo consumido.</p></blockquote>',33),c=[d];function u(p,m,q,g,b,h){return r(),a("div",null,c)}const P=e(n,[["render",u]]);export{_ as __pageData,P as default};
