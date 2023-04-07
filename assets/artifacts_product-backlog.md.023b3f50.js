import{_ as e,c as a,o,N as i}from"./chunks/framework.f942ffd7.js";const b=JSON.parse('{"title":"Pila del Producto","description":"","frontmatter":{},"headers":[],"relativePath":"artifacts/product-backlog.md"}'),r={name:"artifacts/product-backlog.md"},l=i('<h1 id="pila-del-producto" tabindex="-1">Pila del Producto <a class="header-anchor" href="#pila-del-producto" aria-label="Permalink to &quot;Pila del Producto&quot;">​</a></h1><blockquote><p>La Pila del Producto es, básicamente, una lista priorizada de requisitos funcionales o Historias de Usuario. Cosas que el usuario quiere, descritas usando la terminología del usuario. Llamamos a esto historias, o a veces simplemente elementos de la Pila.</p></blockquote><p>La Pila del Producto es el inventario de funcionalidades, mejoras, tecnología y corrección de errores que deben incorporarse al producto a través de los sucesivos Sprints. En él, el Dueño del Producto, mantiene una lista actualizada de requerimientos funcionales para el software. Esta lista, representa <em><strong>«qué es lo que se pretende»</strong></em> pero sin mencionar <em><strong>«cómo hacerlo»</strong></em>, ya que de esto último, se encargará el equipo.</p><p>Esta pila representa todo aquello que esperan el Dueño del Producto, todos los usuarios, y en general los interesados. Todo lo que suponga un trabajo que debe realizar el equipo debe estar reflejado en esta pila.</p><p><strong>Estos son algunos ejemplos de posibles entradas a una pila de producto</strong>:</p><ul><li>Permitir a los usuarios la consulta de las obras publicadas por un determinado autor.</li><li>Reducir el tiempo de instalación del programa.</li><li>Mejorar la escalabilidad del sistema.</li><li>Permitir la consulta de una obra a través de un API web.</li></ul><p><strong>La Pila del Producto, es creada y modificada únicamente por el Dueño del Producto</strong>. Durante la ceremonia de planificación, el Equipo de Desarrollo obtendrá los items del producto, que deberá desarrollar durante el Sprint y de él, partirán para generar la Pila del Sprint.</p><blockquote><p><em>...“La Pila del Producto nunca está completa. La primera versión para el desarrollo, tan sólo establece los requisitos inicialmente conocidos, y que son entendidos mejor. La Pila del Producto evoluciona a medida que el producto y el entorno en el que se utilizará evoluciona. La Pila del Producto es dinámica, ya que cambia constantemente para identificar qué necesita el producto para ser adecuado, competitivo y útil...” (Scrum Guide, 2008, pág.18)</em></p></blockquote><p>La pila (de requisitos) del producto nunca se da por completada, al contrario, está en continuo crecimiento y evolución. Al comenzar el proyecto incluye los requisitos inicialmente conocidos y mejor entendidos, y conforme avanza el desarrollo, y evoluciona el entorno en el que será usado, se va desarrollando. En definitiva su continuo dinamismo refleja aquello que el producto necesita incorporar para ser lo más adecuado a las circunstancias, en todo momento.</p><p>Para comenzar el desarrollo se necesita la visión del objetivo del negocio que se quiere conseguir con el proyecto, comprendido y conocido por todo el equipo, y los elementos suficientes en la pila para llevar a cabo el primer Sprint.</p><p>Habitualmente se comienza a elaborar la pila con el resultado de una reunión de <em>“tormenta de ideas”</em>, o un proceso de <em>“exploración”</em> donde colabora todo el equipo partiendo de la visión del Dueño del Producto.</p><p>El formato de la visión no es relevante. Según los casos, puede ser una presentación informal del responsable del producto, un informe de requisitos del departamento involucrado, u otros. Sin embargo, sí es importante disponer de una visión real, comprendida y compartida por todo el equipo.</p><p>El propietario del producto mantiene la pila ordenada por la importancia de los elementos, siendo los más prioritarios los que confieren mayor valor al producto, o por alguna razón resultan más necesarios, y determinan las actividades de desarrollo inmediatas.</p><p>El detalle de los requisitos en la Pila del Producto debe ser proporcional a la importancia (prioridad): Los elementos de mayor importancia deben tener mayor nivel de comprensión y detalle que los del resto. De esta forma el Equipo de Desarrollo puede descomponer un elemento de alta importancia en tareas con la precisión suficiente para ser hecho en un Sprint.</p><blockquote><p>Los elementos de la Pila del Producto que pueden ser incorporados a un Sprint se denominan “preparados” o “accionables” y son los que pueden seleccionarse en la reunión de planificación del Sprint.</p></blockquote><h2 id="preparacion-de-la-pila-del-producto" tabindex="-1">Preparación de la Pila del Producto <a class="header-anchor" href="#preparacion-de-la-pila-del-producto" aria-label="Permalink to &quot;Preparación de la Pila del Producto&quot;">​</a></h2><p>Se denomina “preparación” (grooming) de la Pila del Producto a las actividades de priorización, detalle y estimación de los elementos que la componen. Es un proceso que realizan de forma puntual, en cualquier momento, continua y colaborativa, el Dueño del Producto y el Equipo de Desarrollo. No debe consumir más del 10% de la capacidad de trabajo del equipo.</p><p>La responsabilidad de estimar el esfuerzo previsible para cada elemento, es de las personas del equipo que previsiblemente harán el trabajo.</p><h2 id="formato-de-la-pila-del-producto" tabindex="-1">Formato de la Pila del Producto <a class="header-anchor" href="#formato-de-la-pila-del-producto" aria-label="Permalink to &quot;Formato de la Pila del Producto&quot;">​</a></h2><p>El agilismo propone y prefiere la comunicación verbal o de visualización directa, a la escrita. La Pila del Producto no es un documento formal de requisitos, sino un artefacto de referencia para el equipo. La Pila del Producto, es una lista de items que representan los requerimientos funcionales esperados para el software.</p><p>Si se emplea formato de lista, es recomendable que al menos incluya la siguiente información para cada elemento:</p><ul><li>Id.</li><li>Grado de Importancia.</li><li>Descripción (de funcionalidad/requisito, denominado “Historia de Usuario”).</li><li>Esfuerzo que demanda.</li><li>Granulidad de los Items.</li><li>Criterios de aceptación.</li><li>Notas (Observación)</li></ul><h2 id="id" tabindex="-1">Id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;Id&quot;">​</a></h2><p>Es un identificador único, simplemente un número auto-incremental. Esto nos permite no perder la pista a las historias cuando cambiamos su nombre.</p><h2 id="grado-de-importancia" tabindex="-1">Grado de Importancia <a class="header-anchor" href="#grado-de-importancia" aria-label="Permalink to &quot;Grado de Importancia&quot;">​</a></h2><p>Los items de la Pila del Producto, deben guardar un orden de importancia y para que el Dueño del Producto logre establecer el Grado de Importancia, debe apoyarse en la siguiente base:</p><ul><li>Riesgos de implementarla.</li><li>Coherencia con los intereses del negocio.</li><li>Beneficios de implementar una funcionalidad.</li><li>Valor diferencial con respecto a productos de la competencia.</li><li>Pérdida o costo que demande posponer la implementación de una funcionalidad.</li></ul><p>El grado de importancia que el Dueño del Producto le da a la Historia de Usuario debe ser, que mientras más alto es, igual a más importante.</p><blockquote><p><strong>Henrik Kniberg</strong>: <em>Suelo evitar el término “prioridad” porque típicamente “1” se considera la máxima prioridad, lo que es muy incómodo si posteriormente se decide que algo es más importante. ¿Qué prioridad le daríamos a ese nuevo elemento? ¿Prioridad 0? ¿Prioridad -1?</em></p></blockquote><p>Todos los elementos importantes deberían tener diferentes grados de importancia asignados. En realidad, da igual si los elementos menos importantes tienen todos el mismo valor, ya que probablemente no se discutirán durante la planificación de Sprint en cualquier caso.</p><p>Cualquier historia sobre la que el Dueño del Producto piense que tiene una remota posibilidad de incluirse en el Sprint debería tener un nivel de importancia único definido. El grado de importancia se emplea solo para ordenar los elementos por relevancia. Así que si el elemento A tiene una importancia de 20 y el elemento B una importancia de 100, simplemente significa que B es más importante que A. No significa que B sea cinco veces más importante que A. Si B tuviera una importancia de 21, ¡aun significaría lo mismo! Es útil dejar espacio entre la secuencia de números por si aparece un elemento C que es más importante que A pero menos importante que B. Por supuesto, le podríamos dar un grado de importancia de 20,5 a C, pero en vez de ello se aconseja dejar espacio entre números.</p><p>Otras personas aparte del Dueño del Producto pueden añadir sus historias a la Pila de Producto. Pero no pueden asignarles niveles de importancia, ese es un cometido exclusivo del Dueño del Producto. Tampoco pueden establecer estimaciones, ese es un cometido exclusivo del equipo.</p><h2 id="descripcion" tabindex="-1">Descripción <a class="header-anchor" href="#descripcion" aria-label="Permalink to &quot;Descripción&quot;">​</a></h2><blockquote><p>Consiste en la descripción breve de la funcionalidad (requisito), denominada “Historia de Usuario”.</p></blockquote><p>Se trata de una descripción corta de la historia, suficientemente clara como para que el Dueño del Producto comprenda aproximadamente de qué estamos hablando, y suficientemente clara como para distinguirla de las otras historias.</p><p>Normalmente, 2 a 10 palabras.</p><p>Por ejemplo: <strong><em>“Visualizar historial de transacciones”</em></strong>.</p><h2 id="esfuerzo-que-demanda" tabindex="-1">Esfuerzo que demanda <a class="header-anchor" href="#esfuerzo-que-demanda" aria-label="Permalink to &quot;Esfuerzo que demanda&quot;">​</a></h2><p>A diferencia de las metodologías tradicionales, Scrum, propone la estimación de esfuerzo y complejidad que demanda el desarrollo de las funcionalidades, solo para aquellas cuyo orden sea prioritario.</p><p>Estas estimaciones, no se efectúan sobre items poco prioritarios ni tampoco sobre aquellos donde exista un alto grado de incertidumbre. De esta manera, se evita la pérdida de tiempo en estimaciones irrelevantes, postergándolas para el momento en el cual realmente sea necesario comenzar a desarrollarlas.</p><blockquote><p><em>“El equipo da al Dueño del Producto las estimaciones del esfuerzo requerido para cada elemento de la Pila del Producto. Además, el Dueño del Producto es responsable de asignar una estimación del valor del negocio a cada elemento individual. Esto es normalmente una práctica desconocida para el Dueño del Producto. Por esa razón, a veces el Gestor del Proyecto puede enseñar al Dueño del Producto a hacerlo.”</em> (The Scrum Primer, 2009, pág. 8)</p></blockquote><h2 id="granulidad-de-los-items" tabindex="-1">Granulidad de los Items <a class="header-anchor" href="#granulidad-de-los-items" aria-label="Permalink to &quot;Granulidad de los Items&quot;">​</a></h2><p>Los items de la Pila del Producto no necesariamente deben tener una granulidad pareja. Es posible encontrar ítems tales como <em>&quot;es necesario contar con un módulo de control de stock y logística&quot;</em> o uno tan pequeño como <em>&quot;Modificar el color de fondo de los mensajes de error del sistema, de negro a rojo&quot;</em>.</p><blockquote><p><em>“... Los Ítems de tan baja granulidad, suelen agruparse en un formato denominado «Historias de Usuario» mientras que los de alta granulidad, suelen llamarse «temas». Cuando los elementos de la Pila del Producto han sido preparados con este nivel de granularidad, los que están en la parte superior del mismo (los de mayor prioridad, y mayor valor) se descomponen para que quepan en un Sprint...”</em> (Scrum Guide, 2008, pág.19)</p></blockquote><h2 id="criterios-de-aceptacion" tabindex="-1">Criterios de Aceptación <a class="header-anchor" href="#criterios-de-aceptacion" aria-label="Permalink to &quot;Criterios de Aceptación&quot;">​</a></h2><p>Es recomendable que cada ítem de la Pila del Producto, especifique cuales son los criterios de aceptación (o prueba de aceptación que debe superar), para considerar cumplido el requisito.</p><p>Los criterios de aceptación, entonces, no son más que <em>“pautas”</em> o pequeñas <em>“reglas”</em> que una Historia de Usuario debe respetar para considerarla cumplida.</p><p>Por ejemplo, para la Historia de Usuario <em>«Como administrador del sistema necesito agregar productos al catálogo»</em>, los criterios de aceptación podrían ser:</p><ul><li>Cada producto debe contener: <ul><li>código de producto (opcional).</li><li>descripción de hasta 500 caracteres (opcional).</li><li>precio (obligatorio).</li><li>stock inicial (opcional).</li><li>un nombre (obligatorio).</li><li>una foto (opcional).</li></ul></li><li>No pueden existir dos productos con el mismo nombre de producto o código de producto.</li><li>El nombre del producto jamás puede estar vacío o tener menos de 3 caracteres.</li><li>Cuando no se asigne un stock inicial al producto, éste debe asignarse automáticamente en cero (sin stock).</li></ul><blockquote><p><em>“... Las Pruebas de Aceptación se utilizan a menudo como un atributo más de la Pila del Producto. A menudo pueden sustituir a descripciones de texto más detalladas, que contengan una descripción comprobable, de lo que el elemento de la Pila del Producto debe hacer cuando esté completado...”</em> (Scrum Guide, 2008, pág.19)</p></blockquote><h2 id="notas-observacion" tabindex="-1">Notas (Observación) <a class="header-anchor" href="#notas-observacion" aria-label="Permalink to &quot;Notas (Observación)&quot;">​</a></h2><p>Colocamos cualquier otra información, clarificación, referencia a otras fuentes de información, etc. Normalmente muy breves.</p><h2 id="campos-adicionales-del-formato" tabindex="-1">Campos adicionales del formato <a class="header-anchor" href="#campos-adicionales-del-formato" aria-label="Permalink to &quot;Campos adicionales del formato&quot;">​</a></h2><p>A veces se utiliza campos adicionales en la Pila del Producto, fundamentalmente como comodidad para el Dueño del Producto a la hora de decidir sus prioridades. Dependiendo del tipo de proyecto, funcionamiento del equipo y la organización, pueden ser aconsejables otros campos:</p><ul><li>Persona asignada.</li><li>N° de Sprint en el que se realiza.</li><li>Módulo del sistema al que pertenece.</li><li>Solicitante.</li><li>Entre otros.</li></ul><h2 id="los-formatos-deben-ser-flexibles" tabindex="-1">Los formatos deben ser flexibles <a class="header-anchor" href="#los-formatos-deben-ser-flexibles" aria-label="Permalink to &quot;Los formatos deben ser flexibles&quot;">​</a></h2><p>Es preferible no adoptar formatos rígidos, ya que los resultados del agilismo no dependen de las formas, sino de la institucionalización de sus principios y la implementación adecuada a las características de la empresa y del proyecto. He aquí un sencillo ejemplo de Pila del Producto:</p><table><thead><tr><th style="text-align:center;">Importancia</th><th style="text-align:left;">Descripción</th><th style="text-align:center;">Esfuerzo</th><th style="text-align:center;">Elaborado por</th></tr></thead><tbody><tr><td style="text-align:center;">90</td><td style="text-align:left;">Plataforma tecnológica</td><td style="text-align:center;">XL</td><td style="text-align:center;">A.R.</td></tr><tr><td style="text-align:center;">70</td><td style="text-align:left;">Interfaz de usuario</td><td style="text-align:center;">L</td><td style="text-align:center;">L.M.</td></tr><tr><td style="text-align:center;">60</td><td style="text-align:left;">Un usuario se registra en el sistema</td><td style="text-align:center;">S</td><td style="text-align:center;">C.C.</td></tr><tr><td style="text-align:center;">40</td><td style="text-align:left;">El operador define el flujo y textos de un expediente</td><td style="text-align:center;">S</td><td style="text-align:center;">J.H.</td></tr><tr><td style="text-align:center;">30</td><td style="text-align:left;">xxx</td><td style="text-align:center;">M</td><td style="text-align:center;">A.R.</td></tr></tbody></table><p>Mantenemos esta tabla en una Hoja de Cálculo con <em>“compartir”</em> habilitado (es decir, muchos usuarios pueden editar simultáneamente la hoja). Oficialmente, el Dueño del Producto es el propietario del documento, pero no queremos dejar al resto de usuarios fuera. Muchas veces un desarrollador necesita abrir el documento para clarificar algo o cambiar una estimación de esfuerzo.</p><p>Por la misma razón, no se coloca este documento en el repositorio de control de versiones; en vez de eso, lo almacenamos en una unidad de red compartida. Esta ha demostrado ser la manera más simple de permitir múltiples editores diferentes sin causar problemas de bloqueo o fusión de documentos. Sin embargo, casi todos los demás artefactos se colocan en el repositorio de control de versiones.</p>',60),t=[l];function n(d,s,c,u,p,m){return o(),a("div",null,t)}const f=e(r,[["render",n]]);export{b as __pageData,f as default};
