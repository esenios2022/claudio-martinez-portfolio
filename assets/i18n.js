/* =====================================================================
   PORTAL BABÁ FUN FUN · i18n.js
   Cambio de idioma ES <-> PT en vivo, sin recargar, persistente.
   Traduce por textContent normalizado -> innerHTML en portugués.
   Los términos sagrados (Axé, Orixás, Babá Fun Fun, Pachamama, etc.)
   se mantienen intencionalmente sin traducir.
   ===================================================================== */
(function () {
  const KEY = "bff-lang";
  const norm = s => (s || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  const ES_TITLE = document.title;

  /* ---- Títulos de pestaña ---- */
  const TITLES = {
    "Babá Fun Fun · El Puente entre la Tierra Ancestral y la Conciencia Cuántica": "Babá Fun Fun · A Ponte entre a Terra Ancestral e a Consciência Quântica",
    "Mi Sendero · Babá Fun Fun · Claudio Fabián Martínez Lorenzo": "Meu Caminho · Babá Fun Fun · Claudio Fabián Martínez Lorenzo",
    "Códigos de Luz · Simbología Sagrada de esta Dimensión · Babá Fun Fun": "Códigos de Luz · Simbologia Sagrada desta Dimensão · Babá Fun Fun",
    "ThetaHealing® · Reprogramación Subconsciente · Babá Fun Fun": "ThetaHealing® · Reprogramação Subconsciente · Babá Fun Fun",
    "Terapia Cuántica Atlante · Comandos Atlantes · Babá Fun Fun": "Terapia Quântica Atlante · Comandos Atlantes · Babá Fun Fun",
    "Agendar · Registro de Atendimiento · Babá Fun Fun": "Agendar · Registro de Atendimento · Babá Fun Fun"
  };

  /* ---- Placeholders de formulario ---- */
  const PH = {
    "Tu nombre y apellido": "Seu nome e sobrenome",
    "tucorreo@ejemplo.com": "seuemail@exemplo.com",
    "Ciudad, país": "Cidade, país",
    "Cuéntame con tus palabras lo que te trae hasta aquí: lo que sientes, lo que se repite, lo que anhelas transformar.": "Conte-me com suas palavras o que te traz até aqui: o que você sente, o que se repete, o que anseia transformar."
  };

  /* ---- Diccionario principal: textContent ES -> innerHTML PT ---- */
  const T = {
    /* ===== HEADER / FOOTER ===== */
    "Portal de Sanación": "Portal de Cura",
    "Inicio": "Início",
    "Mi Sendero": "Meu Caminho",
    "El Método": "O Método",
    "Simbología sagrada de esta dimensión": "Simbologia sagrada desta dimensão",
    "Reprogramación subconsciente": "Reprogramação subconsciente",
    "Terapia Cuántica Atlante": "Terapia Quântica Atlante",
    "Canalizada por Marcos Berenelli": "Canalizada por Marcos Berenelli",
    "Tarifas": "Valores",
    "Contacto": "Contato",
    "Agendar Atendimiento": "Agendar Atendimento",
    "Seamos un solo corazón": "Sejamos um só coração",
    "El puente entre la Tierra ancestral y la conciencia cuántica. Más de 10 años guiando retornos a la esencia.": "A ponte entre a Terra ancestral e a consciência quântica. Mais de 10 anos guiando retornos à essência.",
    "El Portal": "O Portal",
    "Tarifas y Programas": "Valores e Programas",
    "Cursos & Formación": "Cursos & Formação",
    "Conecta": "Conecte-se",

    /* ===== HOME · HERO ===== */
    "Sanación Multidimensional · Linaje Ancestral": "Cura Multidimensional · Linhagem Ancestral",
    "Claudio Fabián MartínezTerapeuta Cuántico Multidimensional": "Claudio Fabián Martínez<br>Terapeuta Quântico Multidimensional",
    "El Puente entre la Tierra Ancestral y la Conciencia Cuántica": "A Ponte entre a Terra Ancestral e a Consciência Quântica",
    "Más de 10 años guiando retornos a la esencia. Desbloquea tu subconsciente, limpia tu linaje celular y eleva tu frecuencia a través de la sabiduría iniciática y la medicina multidimensional.": "Mais de 10 anos guiando retornos à essência. Desbloqueie seu subconsciente, limpe sua linhagem celular e eleve sua frequência através da sabedoria iniciática e da medicina multidimensional.",
    "Reservar mi Sesión · 1h 30min": "Reservar minha Sessão · 1h 30min",
    "Conocer mi Historia": "Conhecer minha História",

    /* ===== HOME · RESONANCIA ===== */
    "¿Sientes que tus bloqueos provienen de algo más profundo que tu mente consciente?": "Você sente que seus bloqueios vêm de algo mais profundo que sua mente consciente?",
    "¿Sientes que repites patrones que no te pertenecen, o que tu energía está estancada a nivel celular y espiritual?": "Você sente que repete padrões que não te pertencem, ou que sua energia está estagnada a nível celular e espiritual?",
    "Estás en un espacio seguro. El verdadero camino de sanación no consiste en “repararte”, sino en recordar quién eres verdaderamente antes de que el mundo te impusiera sus limitaciones. Para llegar a las estrellas, primero debemos enraizar profundamente en la Tierra.": "Você está em um espaço seguro. O verdadeiro caminho de cura não consiste em <em>“consertar você”</em>, mas em lembrar quem você é verdadeiramente antes de que o mundo lhe impusesse suas limitações. Para chegar às estrelas, primeiro precisamos enraizar profundamente na Terra.",

    /* ===== HOME · MÉTODO ===== */
    "El Método Integrado": "O Método Integrado",
    "Una sola sesión. Todos los linajes, tejidos en uno.": "Uma só sessão. Todas as linhagens, tecidas em uma.",
    "Cada encuentro es un solo proceso, vivo e integrado. En él convergen estas tres herramientas, sostenidas por la sabiduría ancestral y mi canalización de las energías arcangélicas — todo tejido en uno, al servicio de tu despertar.": "Cada encontro é um só processo, vivo e integrado. Nele convergem estas três ferramentas, sustentadas pela sabedoria ancestral e minha canalização das energias arcangélicas — tudo tecido em um, a serviço do seu despertar.",
    "Códigos de Luz": "Códigos de Luz",
    "Simbología sagrada de esta dimensión. Sellos y geometrías que, activados a través de mi frecuencia, reorganizan tu campo y restauran tus cuerpos sutiles.": "Simbologia sagrada desta dimensão. Selos e geometrias que, ativados através da minha frequência, reorganizam seu campo e restauram seus corpos sutis.",
    "Conocer este pilar →": "Conhecer este pilar →",
    "Reprogramación subconsciente en ondas cerebrales theta. Indagación guiada para disolver creencias limitantes y traumas directamente en la raíz de la mente.": "Reprogramação subconsciente em ondas cerebrais theta. Investigação guiada para dissolver crenças limitantes e traumas diretamente na raiz da mente.",
    "Activación energética multidimensional mediante los Comandos Cuánticos Atlantes, Realineamiento de tus cuerpos sutiles y geometría sagrada.": "Ativação energética multidimensional mediante os Comandos Quânticos Atlantes, Realinhamento dos seus corpos sutis e geometria sagrada.",
    "A estos tres pilares se suman la sabiduría ancestral de los Andes y los Orixás y la canalización de las energías Arcangélicas. No eliges una técnica: recibes el método completo, integrado en cada encuentro.": "A estes três pilares somam-se a <strong>sabedoria ancestral</strong> dos Andes e dos Orixás e a <strong>canalização das energias Arcangélicas</strong>. Você não escolhe uma técnica: recebe o método completo, integrado em cada encontro.",

    /* ===== HOME · CÓMO FUNCIONA ===== */
    "Cómo Funciona": "Como Funciona",
    "Tu proceso comienza con un registro": "Seu processo começa com um registro",
    "Un camino simple y cuidado, desde el primer contacto hasta tu sesión.": "Um caminho simples e cuidado, desde o primeiro contato até sua sessão.",
    "Completas el registro": "Você preenche o registro",
    "Llenas el formulario con tu nombre, fecha y hora de nacimiento, y una breve descripción de lo que estás viviendo.": "Você preenche o formulário com seu nome, data e hora de nascimento, e uma breve descrição do que está vivendo.",
    "Recibo tus datos": "Recebo seus dados",
    "Tu registro llega directo a mí y queda guardado. Lo analizo de forma cuántica y diseño un protocolo de sanación único para ti.": "Seu registro chega direto a mim e fica guardado. Eu o analiso de forma quântica e desenho um protocolo de cura único para você.",
    "Agendamos tu sesión": "Agendamos sua sessão",
    "Coordinamos día y hora por WhatsApp y confirmamos tu programa: una sesión, ocho o doce.": "Combinamos dia e hora pelo WhatsApp e confirmamos seu programa: uma sessão, oito ou doze.",
    "Vivimos el encuentro": "Vivemos o encontro",
    "1h 30min de trabajo integrado, en vivo por Zoom, en un contenedor de absoluta seguridad y compasión.": "1h 30min de trabalho integrado, ao vivo por Zoom, em um contêiner de absoluta segurança e compaixão.",
    "Dentro de la Sesión": "Dentro da Sessão",
    "100% online, desde la comodidad de tu casa": "100% online, do conforto da sua casa",
    "No necesitas moverte de tu espacio: llegamos a tu sala. Nos encontramos en vivo por Zoom —te envío el enlace por WhatsApp— y desde tu celular o computadora vivimos juntos la sesión durante 1h 30min.": "Você não precisa sair do seu espaço: chegamos à sua sala. Nos encontramos ao vivo por <strong>Zoom</strong> —envio o link pelo WhatsApp— e do seu celular ou computador vivemos juntos a sessão durante 1h 30min.",
    "A partir de tu registro analizo tu campo de forma cuántica y diseño un protocolo de sanación único para ti. Por eso cada encuentro es distinto: responde exactamente a lo que tu momento necesita — rápido, profundo y efectivo.": "A partir do seu registro analiso seu campo de forma quântica e desenho um <strong>protocolo de cura único para você</strong>. Por isso cada encontro é diferente: responde exatamente ao que o seu momento precisa — rápido, profundo e efetivo.",
    "Lo único que necesitas: un dispositivo con Zoom y un lugar tranquilo donde puedas estar contigo.": "A única coisa que você precisa: um dispositivo com Zoom e um lugar tranquilo onde possa estar consigo.",
    "Lo que puedes experimentar": "O que você pode experimentar",
    "Durante la sesión la energía se mueve. Es natural —y buena señal— que tu cuerpo lo registre de distintas formas:": "Durante a sessão a energia se move. É natural —e bom sinal— que seu corpo registre isso de diferentes formas:",
    "Bostezos y ganas de respirar hondo": "Bocejos e vontade de respirar fundo",
    "Sueño o una relajación muy profunda": "Sono ou um relaxamento muito profundo",
    "Frío o calor recorriendo el cuerpo": "Frio ou calor percorrendo o corpo",
    "Incomodidad o pequeños dolores que vienen y se van": "Desconforto ou pequenas dores que vêm e vão",
    "Todo es parte del proceso: el cuerpo soltando lo que ya no necesita cargar.": "Tudo faz parte do processo: o corpo soltando o que já não precisa carregar.",
    "Completar mi registro": "Preencher meu registro",

    /* ===== HOME · SOBRE MÍ ===== */
    "El Facilitador del Sendero": "O Facilitador do Caminho",
    "Conocido en Tierra de los Orixás como Babá Fun Fun": "Conhecido na Terra dos Orixás como Babá Fun Fun",
    "Mi camino no se ha forjado en aulas teóricas, sino en iniciaciones reales con las fuerzas de la naturaleza, el cosmos y el espíritu.": "Meu caminho não foi forjado em salas de aula teóricas, mas em iniciações reais com as forças da natureza, o cosmos e o espírito.",
    "Las Iniciaciones de mi Vida": "As Iniciações da Minha Vida",
    "Sabiduría del Axé — Consagrado en la medicina ancestral de los Orixás como Babá Fun Fun, canalizando su fuerza vital, paz y claridad.": "<strong>Sabedoria do Axé</strong> — Consagrado na medicina ancestral dos Orixás como Babá Fun Fun, canalizando sua força vital, paz e clareza.",
    "Linaje Congo — Consagrado en la fuerza de 7 Rayo, conectando con el poder transmutador, protector y de justicia de la tierra.": "<strong>Linhagem Congo</strong> — Consagrado na força de 7 Raios, conectando com o poder transmutador, protetor e de justiça da terra.",
    "Medicinas de la Floresta — Portador de la sabiduría de la selva, tras casi dos años de inmersión y ceremonias con Yopo, Ayahuasca, Wilka, Bufo, Xanga, Rapé y Facilitador de Kambó.": "<strong>Medicinas da Floresta</strong> — Portador da sabedoria da selva, após quase dois anos de imersão e cerimônias com Yopo, Ayahuasca, Wilka, Bufo, Xanga, Rapé e Facilitador de Kambó.",
    "Tradición Andina — Munay-Ki Ritos Sagrados y Hatun Karpay junto a los maestros y Paqos de la Nación Q'ero.": "<strong>Tradição Andina</strong> — Munay-Ki Ritos Sagrados e Hatun Karpay junto aos mestres e Paqos da Nação Q'ero.",
    "Frecuencia Arcangélica — Iniciación sagrada con los arcángeles Miguel, Uriel y Rafael y Símbolos Arcoíris.": "<strong>Frequência Arcangélica</strong> — Iniciação sagrada com os arcanjos Miguel, Uriel e Rafael e Símbolos Arco-íris.",
    "Frecuencia Arcturiana — Iniciado en los cuatro niveles hasta la maestría, abriendo el canal con la conciencia estelar de Arcturus.": "<strong>Frequência Arcturiana</strong> — Iniciado nos quatro níveis até a maestria, abrindo o canal com a consciência estelar de Arcturus.",
    "Tambor Chamánico — Iniciado por la Abuela Sol de México en la sanación a través del sonido y el ritmo sagrado.": "<strong>Tambor Xamânico</strong> — Iniciado pela Avó Sol do México na cura através do som e do ritmo sagrado.",
    "Ashram de Gaia — Iniciado en el Sexto Rayo, Iniciación Kumara Multidimensional , Iniciacion Familia Sagrada, junto a la Maestra Joanita Molina (SP).": "<strong>Ashram de Gaia</strong> — Iniciado no Sexto Raio, Iniciação Kumara Multidimensional, Iniciação Família Sagrada, junto à Mestra Joanita Molina (SP).",
    "Conocer mi sendero completo": "Conhecer meu caminho completo",

    /* ===== HOME · TARIFAS ===== */
    "Sesiones · 100% Online en vivo por Zoom": "Sessões · 100% Online ao vivo por Zoom",
    "Vívelo desde la comodidad de tu casa": "Viva isso do conforto da sua casa",
    "No tienes que ir a ningún lado: nos encontramos en vivo por Zoom y lo vivimos desde tu propia sala. Podemos coordinar ahora mismo y empezar a transformar eso que estás viviendo. Son técnicas muy efectivas Te invito a vivirlas y comprobarlo por ti mismo.": "Você não precisa ir a lugar nenhum: nos encontramos ao vivo por Zoom e vivemos isso da sua própria sala. Podemos combinar agora mesmo e começar a transformar aquilo que você está vivendo. São técnicas muito efetivas. Convido você a vivê-las e comprovar por si mesmo.",
    "Sesión Individual": "Sessão Individual",
    "Atendimiento Único": "Atendimento Único",
    "Por encuentro": "Por encontro",
    "100% online, en vivo por Zoom": "100% online, ao vivo por Zoom",
    "1 sesión integrada de 1h 30min": "1 sessão integrada de 1h 30min",
    "Diagnóstico multidimensional": "Diagnóstico multidimensional",
    "Los tres pilares en un solo encuentro": "Os três pilares em um só encontro",
    "Limpieza energética y reprogramación": "Limpeza energética e reprogramação",
    "Integración cósmica y terrenal": "Integração cósmica e terrena",
    "Reservar y registrarme": "Reservar e me registrar",
    "El más transitado": "O mais procurado",
    "Jornada de Transformación": "Jornada de Transformação",
    "Sendero de 8 Sesiones": "Caminho de 8 Sessões",
    "Pago único o en cuotas": "Pagamento único ou parcelado",
    "8 sesiones integradas de 1h 30min": "8 sessões integradas de 1h 30min",
    "El mismo proceso, en profundidad sostenida": "O mesmo processo, em profundidade sustentada",
    "Acompañamiento continuo entre encuentros": "Acompanhamento contínuo entre encontros",
    "Valor preferencial · Descuento de R$444 menos": "Valor preferencial · Desconto de R$444",
    "Plan 2 Meses": "Plano de 2 Meses",
    "Renacimiento Multidimensional": "Renascimento Multidimensional",
    "Sendero de 12 Sesiones": "Caminho de 12 Sessões",
    "12 sesiones integradas de 1h 30min": "12 sessões integradas de 1h 30min",
    "Alquimia profunda del alma": "Alquimia profunda da alma",
    "Valor preferencial · Descuento de R$999 menos": "Valor preferencial · Desconto de R$999",
    "El recorrido más hondo para la limpieza de linajes y la ascensión": "O percurso mais profundo para a limpeza de linhagens e a ascensão",
    "Plan de 3 Meses": "Plano de 3 Meses",
    "Medios de Pago": "Formas de Pagamento",
    "Transferencia": "Transferência",
    "Tras tu registro coordinamos juntos la forma de pago y te envío el enlace seguro. Los valores en dólar son referenciales y pueden variar según la cotización del día.": "Após seu registro combinamos juntos a forma de pagamento e envio o link seguro. Os valores em dólar são referenciais e podem variar conforme a cotação do dia.",

    /* ===== HOME · TESTIMONIOS ===== */
    "Historias de Alquimia": "Histórias de Alquimia",
    "La voz de quienes recordaron su luz": "A voz de quem recordou sua luz",
    "Una fobia que cargué treinta años se disolvió en una sola sesión de ThetaHealing. Por primera vez sentí que tocaba la raíz, no la rama.": "Uma fobia que carreguei trinta anos se dissolveu em uma só sessão de ThetaHealing. Pela primeira vez senti que tocava a raiz, não o galho.",
    "Reprogramé mis bloqueos de escasez en el nivel “Yo y el Creador”. Mi relación con la abundancia cambió desde adentro, no por esfuerzo.": "Reprogramei meus bloqueios de escassez no nível “Eu e o Criador”. Minha relação com a abundância mudou de dentro, não por esforço.",
    "Integré de forma pacífica y transformadora mis experiencias con la medicina. El contenedor de Fabián es de una seguridad absoluta.": "Integrei de forma pacífica e transformadora minhas experiências com a medicina. O contêiner do Fabián é de uma segurança absoluta.",
    "Sanación de fobias": "Cura de fobias",
    "Abundancia financiera": "Abundância financeira",

    /* ===== HOME · PROYECTOS ===== */
    "Más Allá del Consultorio": "Além do Consultório",
    "Proyectos & Colaboraciones": "Projetos & Colaborações",
    "Mi trabajo también vive en comunidad: escuelas, plataformas y proyectos colectivos que expanden esta medicina más allá de la sesión individual.": "Meu trabalho também vive em comunidade: escolas, plataformas e projetos coletivos que expandem esta medicina além da sessão individual.",
    "Escuela & Formación": "Escola & Formação",
    "Plataforma de cursos y formación vibracional online: un espacio para aprender y anclar la frecuencia Mahatma, abierto a quienes inician su propio sendero de servicio.": "Plataforma de cursos e formação vibracional online: um espaço para aprender e ancorar a frequência Mahatma, aberto a quem inicia seu próprio caminho de serviço.",
    "Visitar la plataforma →": "Visitar a plataforma →",
    "Red de Terapeutas · Brasil": "Rede de Terapeutas · Brasil",
    "Plataforma colaborativa de terapeutas Integrativos en Brasil, donde participo junto a otros facilitadores para acercar la sanación multidimensional a más personas.": "Plataforma colaborativa de terapeutas Integrativos no Brasil, onde participo junto a outros facilitadores para aproximar a cura multidimensional de mais pessoas.",
    "Conocer el proyecto →": "Conhecer o projeto →",

    /* ===== HOME · CONTACTO ===== */
    "Tu despertar comienza con una conversación": "Seu despertar começa com uma conversa",
    "No ofrezco respuestas rápidas, sino un contenedor seguro para tu proceso. Escríbeme y demos juntos el primer paso.": "Não ofereço respostas rápidas, mas um contêiner seguro para o seu processo. Escreva-me e demos juntos o primeiro passo.",
    "Escribir por WhatsApp": "Escrever pelo WhatsApp",

    /* ===== CÓDIGOS DE LUZ ===== */
    "El Método · Terapia I": "O Método · Terapia I",
    "Simbología sagrada de esta dimensión. Geometrías y sellos vivos que reorganizan tu campo cuando son activados por una frecuencia portadora.": "Simbologia sagrada desta dimensão. Geometrias e selos vivos que reorganizam seu campo quando são ativados por uma frequência portadora.",
    "Reservar una sesión": "Reservar uma sessão",
    "La Llave Geométrica": "A Chave Geométrica",
    "El lenguaje con el que la conciencia se reorganiza": "A linguagem com que a consciência se reorganiza",
    "Los Códigos de Luz son símbolos sagrados que pertenecen al lenguaje original de la creación. No son adornos: son instrucciones vibracionales. Cuando un código entra en tu campo, tu sistema energético lo reconoce y recuerda un orden anterior a tus heridas.": "Os Códigos de Luz são símbolos sagrados que pertencem à linguagem original da criação. Não são adornos: são <strong>instruções vibracionais</strong>. Quando um código entra no seu campo, seu sistema energético o reconhece e lembra uma ordem anterior às suas feridas.",
    "Toda forma sagrada —desde la flor de la vida hasta los sellos andinos y atlantes— guarda una frecuencia precisa. Trabajar con ellos es devolverle al cuerpo y al alma su geometría original.": "Toda forma sagrada —desde a flor da vida até os selos andinos e atlantes— guarda uma frequência precisa. Trabalhar com eles é devolver ao corpo e à alma sua geometria original.",
    "Cómo trabaja sobre ti": "Como trabalha em você",
    "Del símbolo a la célula": "Do símbolo à célula",
    "El código actúa en capas: primero en tu campo sutil, luego en tu emoción, finalmente en la materia.": "O código atua em camadas: primeiro no seu campo sutil, depois na sua emoção, finalmente na matéria.",
    "Resonancia": "Ressonância",
    "El símbolo entra en tu campo y tu sistema lo reconoce como una memoria de orden y armonía.": "O símbolo entra no seu campo e seu sistema o reconhece como uma memória de ordem e harmonia.",
    "Disolución": "Dissolução",
    "Las frecuencias densas —miedo, estancamiento, patrones heredados— pierden cohesión y se liberan.": "As frequências densas —medo, estagnação, padrões herdados— perdem coesão e se liberam.",
    "Reorganización": "Reorganização",
    "Tus cuerpos sutiles y chakras se reordenan alrededor de la geometría restaurada.": "Seus corpos sutis e chakras se reordenam ao redor da geometria restaurada.",
    "Anclaje": "Ancoragem",
    "El nuevo patrón se asienta a nivel celular para que el cambio sea sostenible en tu día a día.": "O novo padrão se assenta a nível celular para que a mudança seja sustentável no seu dia a dia.",
    "El Activador": "O Ativador",
    "Un símbolo dormido necesita una frecuencia que lo encienda": "Um símbolo adormecido precisa de uma frequência que o acenda",
    "Los códigos no operan solos. Son llaves que requieren una mano que las gire. A través de mi frecuencia —forjada en las iniciaciones de los Orixás, los Andes y los Reinos Angélicos— activo el símbolo y lo dirijo con intención precisa hacia donde tu proceso lo necesita.": "Os códigos não operam sozinhos. São chaves que requerem uma mão que as gire. Através da minha frequência —forjada nas iniciações dos Orixás, dos Andes e dos Reinos Angélicos— <strong style='color:var(--oro-glow);'>ativo</strong> o símbolo e o direciono com intenção precisa para onde o seu processo precisa.",
    "Es la diferencia entre mirar una partitura y escuchar la música: yo presto la vibración que da vida al código dentro de tu campo, en un contenedor de absoluta seguridad.": "É a diferença entre olhar uma partitura e escutar a música: eu empresto a vibração que dá vida ao código dentro do seu campo, em um contêiner de absoluta segurança.",
    "Indicado para": "Indicado para",
    "Cuándo trabajar con Códigos de Luz": "Quando trabalhar com Códigos de Luz",
    "Sensación de estancamiento energético que no cede con el trabajo mental.": "Sensação de estagnação energética que não cede com o trabalho mental.",
    "Necesidad de sellar y proteger el aura tras procesos intensos.": "Necessidade de selar e proteger a aura após processos intensos.",
    "Deseo de elevar tu frecuencia de manifestación y alinear tus cuerpos sutiles.": "Desejo de elevar sua frequência de manifestação e alinhar seus corpos sutis.",
    "Acompañamiento a la limpieza de patrones heredados a nivel vibracional.": "Acompanhamento à limpeza de padrões herdados a nível vibracional.",

    /* ===== THETAHEALING ===== */
    "El Método · Terapia II": "O Método · Terapia II",
    "Reprogramación del subconsciente en el nivel más profundo de la mente. Disuelve en la raíz las creencias y los traumas que gobiernan tu vida sin que lo sepas.": "Reprogramação do subconsciente no nível mais profundo da mente. Dissolve na raiz as crenças e os traumas que governam sua vida sem que você saiba.",
    "La Onda Theta": "A Onda Theta",
    "Donde el subconsciente realmente escucha": "Onde o subconsciente realmente escuta",
    "El 95% de tu vida la dirige el subconsciente. Por eso la voluntad consciente rara vez basta para cambiar un patrón profundo. ThetaHealing accede a las ondas cerebrales theta —el mismo estado de la meditación profunda y el sueño ligero— donde las creencias se pueden identificar y transformar de raíz.": "95% da sua vida é dirigida pelo subconsciente. Por isso a vontade consciente raramente basta para mudar um padrão profundo. O ThetaHealing acessa as ondas cerebrais <strong>theta</strong> —o mesmo estado da meditação profunda e do sono leve— onde as crenças podem ser identificadas e transformadas pela raiz.",
    "Desarrollada por Vianna Stibal en 1995, es hoy una de las técnicas de transformación de creencias más difundidas del mundo, practicada y enseñada en más de 180 países.": "Desenvolvida por Vianna Stibal em 1995, é hoje uma das técnicas de transformação de crenças mais difundidas do mundo, praticada e ensinada em mais de 180 países.",
    "Países donde se practica": "Países onde é praticada",
    "Año de su desarrollo": "Ano de seu desenvolvimento",
    "Millones": "Milhões",
    "De personas que la utilizan en el mundo": "De pessoas que a utilizam no mundo",
    "El Proceso · “Digging”": "O Processo · “Digging”",
    "Indagación guiada hasta la creencia raíz": "Investigação guiada até a crença raiz",
    "No tratamos el síntoma de superficie. Cavamos —con precisión y respeto— hasta la creencia que sostiene todo el edificio.": "Não tratamos o sintoma de superfície. Cavamos —com precisão e respeito— até a crença que sustenta todo o edifício.",
    "Identificar": "Identificar",
    "Reconocemos juntos el patrón, el miedo o el bloqueo que se repite en tu vida.": "Reconhecemos juntos o padrão, o medo ou o bloqueio que se repete na sua vida.",
    "Excavar": "Escavar",
    "A través del digging rastreamos la creencia raíz: la decisión original que aún te gobierna.": "Através do <em>digging</em> rastreamos a crença raiz: a decisão original que ainda te governa.",
    "Disolver": "Dissolver",
    "En estado theta, la creencia limitante se libera de forma instantánea, no por esfuerzo.": "Em estado theta, a crença limitante se libera de forma instantânea, não por esforço.",
    "Sustituir": "Substituir",
    "Anclamos sentimientos y creencias nuevas que sí te sostienen, sembradas en lo profundo.": "Ancoramos sentimentos e crenças novas que de fato te sustentam, semeadas no profundo.",
    "Certificación Avanzada": "Certificação Avançada",
    "Terapeuta certificado hasta “Yo y el Creador”": "Terapeuta certificado até <em>“Eu e o Criador”</em>",
    "El nivel más profundo de la práctica. No solo aplico una técnica: la fusiono con mis iniciaciones sagradas para que la reprogramación ocurra en un contenedor de máxima profundidad espiritual. Aquí cerramos la brecha entre lo místico y lo preciso.": "O nível mais profundo da prática. Não apenas aplico uma técnica: eu a fundo com minhas iniciações sagradas para que a reprogramação ocorra em um contêiner de máxima profundidade espiritual. Aqui fechamos a lacuna entre o místico e o preciso.",
    "Conocer mi linaje": "Conhecer minha linhagem",

    /* ===== TERAPIA CUÁNTICA ATLANTE ===== */
    "El Método · Terapia III": "O Método · Terapia III",
    "La física cuántica del alma. Comandos atlantes que reconfiguran tu geometría sagrada hacia frecuencias elevadas de manifestación.": "A física quântica da alma. Comandos atlantes que reconfiguram sua geometria sagrada rumo a frequências elevadas de manifestação.",
    "La Tecnología del Alma": "A Tecnologia da Alma",
    "Comandos que reordenan tu campo multidimensional": "Comandos que reordenam seu campo multidimensional",
    "La Terapia Cuántica Atlante trabaja con los Comandos Cuánticos Atlantes: instrucciones energéticas de origen atlante que actúan directamente sobre tus cuerpos sutiles y chakras. No es relajación: es una reconfiguración precisa de tu geometría interna.": "A Terapia Quântica Atlante trabalha com os <strong>Comandos Quânticos Atlantes</strong>: instruções energéticas de origem atlante que atuam diretamente sobre seus corpos sutis e chakras. Não é relaxamento: é uma reconfiguração precisa da sua geometria interna.",
    "Cada comando alinea una capa de tu ser con frecuencias más elevadas, devolviendo coherencia a campos que el trauma, el linaje o el tiempo habían desordenado.": "Cada comando alinha uma camada do seu ser com frequências mais elevadas, devolvendo coerência a campos que o trauma, a linhagem ou o tempo haviam desordenado.",
    "Sobre la Técnica": "Sobre a Técnica",
    "¿Qué es la Terapia Cuántica Atlante?": "O que é a <span class='gold-name'>Terapia Quântica Atlante</span>?",
    "Los Comandos Cuánticos Atlantes son una tecnología de reprogramación energética que permite interactuar con el campo cuántico de forma precisa, consciente y estructurada. Basados en la sabiduría ancestral atlante, actúan como «instrucciones de software» para la conciencia: transmutan energías discordantes, limpian memorias celulares y restauran el equilibrio original del Ser.": "Os Comandos Quânticos Atlantes são uma tecnologia de reprogramação energética que permite interagir com o campo quântico de forma precisa, consciente e estruturada. Baseados na sabedoria ancestral atlante, atuam como «instruções de software» para a consciência: transmutam energias discordantes, limpam memórias celulares e restauram o equilíbrio original do Ser.",
    "Como practicante formado en esta técnica, la utilizo para ofrecerte un camino de evolución acelerada:": "Como praticante formado nesta técnica, eu a utilizo para oferecer a você um caminho de evolução acelerada:",
    "Eliminamos bloqueos y residuos energéticos en minutos.": "Eliminamos bloqueios e resíduos energéticos em minutos.",
    "Instalamos nuevas frecuencias de salud, prosperidad y propósito.": "Instalamos novas frequências de saúde, prosperidade e propósito.",
    "Esta técnica no sustituye otros procesos: los potencia, permitiéndote ser el director consciente de tu propia realidad energética.": "Esta técnica não substitui outros processos: os potencializa, permitindo que você seja o diretor consciente da sua própria realidade energética.",
    "Técnica canalizada por Marcos Brenelli, aplicada por Claudio Fabián Martínez Lorenzo, practicante avanzado certificado.": "Técnica canalizada por Marcos Brenelli, aplicada por Claudio Fabián Martínez Lorenzo, praticante avançado certificado.",
    "El Alineamiento": "O Alinhamento",
    "Qué se reconfigura en la sesión": "O que se reconfigura na sessão",
    "Cuerpos sutiles": "Corpos sutis",
    "Alineamiento de tus campos energéticos para que vibren en coherencia entre sí.": "Alinhamento dos seus campos energéticos para que vibrem em coerência entre si.",
    "Geometría sagrada": "Geometria sagrada",
    "Reconfiguración de tu patrón geométrico interno hacia su forma original y luminosa.": "Reconfiguração do seu padrão geométrico interno rumo à sua forma original e luminosa.",
    "Frecuencia de manifestación": "Frequência de manifestação",
    "Elevación de tu vibración para que tu realidad externa responda a tu nuevo estado.": "Elevação da sua vibração para que sua realidade externa responda ao seu novo estado.",
    "Reconfigura tu geometría sagrada": "Reconfigure sua geometria sagrada",
    "Una sesión de alineamiento multidimensional, en un contenedor de absoluta seguridad y compasión espiritual.": "Uma sessão de alinhamento multidimensional, em um contêiner de absoluta segurança e compaixão espiritual.",
    "Ver programas y tarifas": "Ver programas e valores",

    /* ===== MI SENDERO ===== */
    "Sobre Mí · El Facilitador del Sendero": "Sobre Mim · O Facilitador do Caminho",
    "Conocido en la tradición Yoruba como Babá Fun Fun": "Conhecido na tradição Iorubá como <span class='gold-name' style='font-size:1.15em;'>Babá Fun Fun</span>",
    "Mi camino de servicio es el resultado de una década de caminata, iniciación y entrega, recorriendo los puentes que conectan la sabiduría ancestral con la ciencia cuántica del presente.": "Meu caminho de serviço é o resultado de uma década de caminhada, iniciação e entrega, percorrendo as pontes que conectam a sabedoria ancestral com a ciência quântica do presente.",
    "El Camino": "O Caminho",
    "Iniciaciones reales, no aulas teóricas": "Iniciações reais, não salas de aula teóricas",
    "Llevo más de una década recorriendo el mundo para recordar la medicina que ya habita en el corazón humano. He caminado por las montañas sagradas de Cusco siendo iniciado por sacerdotes Paqos de la Nación Q'ero; he vibrado con el poder protector de los Orixás; he aprendido de las profundidades de la psique humana de la mano de las Plantas Maestras, y he cruzado el velo multidimensional a través de la física cuántica del alma.": "Há mais de uma década percorro o mundo para lembrar a medicina que já habita no coração humano. Caminhei pelas montanhas sagradas de Cusco sendo iniciado por sacerdotes Paqos da Nação Q'ero; vibrei com o poder protetor dos Orixás; aprendi das profundezas da psique humana pela mão das Plantas Mestras, e cruzei o véu multidimensional através da física quântica da alma.",
    "Como terapeuta avanzado de ThetaHealing certificado hasta “Yo y el Creador”, fusiono el misticismo sagrado con herramientas precisas de reprogramación mental. No ofrezco respuestas rápidas, sino el espacio seguro donde el alma recuerda su propia maestría.": "Como terapeuta avançado de ThetaHealing certificado até <em>“Eu e o Criador”</em>, fundo o misticismo sagrado com ferramentas precisas de reprogramação mental. Não ofereço respostas rápidas, mas o espaço seguro onde a alma lembra sua própria maestria.",
    "Mi Linaje y Medicina": "Minha Linhagem e Medicina",
    "Las ocho iniciaciones de mi vida": "As oito iniciações da minha vida",
    "Ocho fuentes de iniciación —la tierra, la floresta, el Monte, los Andes, el sonido, el cosmos y el espíritu— que rara vez convergen en un solo facilitador.Esa convergencia es el corazón de mi trabajo.": "Oito fontes de iniciação —a terra, a floresta, o Monte, os Andes, o som, o cosmos e o espírito— que raramente convergem em um só facilitador.<br>Essa convergência é o coração do meu trabalho.",
    "Sabiduría del Axé": "Sabedoria do Axé",
    "Consagrado en la medicina ancestral de los Orixás como Babá Fun Fun, canalizando su fuerza vital, su paz y su claridad.": "Consagrado na medicina ancestral dos Orixás como <span class='gold-name'>Babá Fun Fun</span>, canalizando sua força vital, sua paz e sua clareza.",
    "Linaje del Congo": "Linhagem do Congo",
    "Iniciación en la fuerza de los Siete Rayos, conectando con el poder transmutador, protector y de justicia de la tierra.": "Iniciação na força dos Sete Raios, conectando com o poder transmutador, protetor e de justiça da terra.",
    "Medicinas de la Floresta": "Medicinas da Floresta",
    "Portador de la sabiduría de la selva, tras casi dos años de inmersión y ceremonias con Ayahuasca, Wilca, Bufo, Changa, Rapé y la aplicación de Kambó.": "Portador da sabedoria da selva, após quase dois anos de imersão e cerimônias com Ayahuasca, Wilca, Bufo, Changa, Rapé e a aplicação de Kambó.",
    "Tradición Andina": "Tradição Andina",
    "Munay-Ki y los ritos de Hatun Karpay recibidos directamente en los Andes, junto a los maestros y Paqos de la Nación Q'ero.": "Munay-Ki e os ritos de Hatun Karpay recebidos diretamente nos Andes, junto aos mestres e Paqos da Nação Q'ero.",
    "Frecuencia Arcangélica": "Frequência Arcangélica",
    "Canal abierto mediante la iniciación sagrada con los arcángeles Miguel, Uriel y Rafael, junto al uso de los Símbolos Arcoíris.": "Canal aberto mediante a iniciação sagrada com os arcanjos Miguel, Uriel e Rafael, junto ao uso dos Símbolos Arco-íris.",
    "Frecuencia Arcturiana": "Frequência Arcturiana",
    "Iniciado en los cuatro niveles hasta la maestría, abriendo el canal con la conciencia estelar de Arcturus.": "Iniciado nos quatro níveis até a maestria, abrindo o canal com a consciência estelar de Arcturus.",
    "Tambor Chamánico": "Tambor Xamânico",
    "Iniciado por la Abuela Sol de México en la sanación a través del sonido y el ritmo sagrado.": "Iniciado pela Avó Sol do México na cura através do som e do ritmo sagrado.",
    "Ashram de Gaia": "Ashram de Gaia",
    "Iniciado en el Sexto Rayo, Iniciación Kumara Multidimensional y de la Familia Sagrada, junto a la Maestra Joanita Molina (SP).": "Iniciado no Sexto Raio, Iniciação Kumara Multidimensional e da Família Sagrada, junto à Mestra Joanita Molina (SP).",
    "Al unir estas iniciaciones con ThetaHealing y T.Q.A. fusiono el misticismo profundo con herramientas claras de psicología, reprogramación mental y terapia cuántica: una persona profundamente espiritual y, a la vez, alguien que maneja instrumentos precisos para tu transformación.": "Ao unir estas iniciações com <strong style='color:var(--oro-glow);'>ThetaHealing</strong> e <strong style='color:var(--oro-glow);'>T.Q.A.</strong> fundo o misticismo profundo com ferramentas claras de psicologia, reprogramação mental e terapia quântica: uma pessoa profundamente espiritual e, ao mesmo tempo, alguém que maneja instrumentos precisos para a sua transformação.",
    "Saberes Integrados": "Saberes Integrados",
    "Lo que he caminado para servirte": "O que percorri para te servir",
    "Nación Q'ero · Cusco — Iniciaciones sagradas con los últimos Inkas; el poder del arraigo y el linaje de la Pachamama.": "<strong>Nação Q'ero · Cusco</strong> — Iniciações sagradas com os últimos Incas; o poder do enraizamento e a linhagem da Pachamama.",
    "Medicina de los Orixás — La fuerza telúrica, el equilibrio elemental y la protección ancestral.": "<strong>Medicina dos Orixás</strong> — A força telúrica, o equilíbrio elemental e a proteção ancestral.",
    "Linaje Congo · Nganga — Consagrado sobre Siete Rayos; iniciación de raíz africana que sella el compromiso con la fuerza y la protección ancestral.": "<strong>Linhagem Congo · Nganga</strong> — Consagrado sobre Sete Raios; iniciação de raiz africana que sela o compromisso com a força e a proteção ancestral.",
    "Plantas de Poder — Estudio integrativo y expansión de la conciencia (Yopo, Ayahuasca, Iboga, Wilca, Bufo, Sananga, Changa, Rapé, Mapacho) y Facilitador de Medicina Kambó.": "<strong>Plantas de Poder</strong> — Estudo integrativo e expansão da consciência (Yopo, Ayahuasca, Iboga, Wilca, Bufo, Sananga, Changa, Rapé, Mapacho) e Facilitador de Medicina Kambó.",
    "Tambor Chamánico — Iniciado por la Abuela Sol de México en la sanación a través del Sonido y el Ritmo Sagrado Ancestral.": "<strong>Tambor Xamânico</strong> — Iniciado pela Avó Sol do México na cura através do Som e do Ritmo Sagrado Ancestral.",
    "ThetaHealing® · “Yo y el Creador” — Reprogramación del subconsciente y liberación de programas limitantes desde su raíz.": "<strong>ThetaHealing® · “Eu e o Criador”</strong> — Reprogramação do subconsciente e liberação de programas limitantes desde sua raiz.",
    "Comandos Cuánticos Atlantes · Universidad Rainbow Alliance — La física cuántica del alma (T.Q.A.), Sistema Creador canalizada por Marcos Berenelli.": "<strong>Comandos Quânticos Atlantes · Universidade Rainbow Alliance</strong> — A física quântica da alma (T.Q.A.), Sistema Criador canalizada por Marcos Berenelli.",
    "Frecuencia Arcangélica — Iniciación sagrada con los arcángeles Miguel, Uriel, Rafael y Símbolos de Luz Arcoíris.": "<strong>Frequência Arcangélica</strong> — Iniciação sagrada com os arcanjos Miguel, Uriel, Rafael e Símbolos de Luz Arco-íris.",
    "Frecuencia Arcturiana — Iniciado en los cuatro niveles hasta la maestría, abriendo el canal con la conciencia estelar de Arcturus.": "<strong>Frequência Arcturiana</strong> — Iniciado nos quatro níveis até a maestria, abrindo o canal com a consciência estelar de Arcturus.",
    "Ashram de Gaia — Iniciado en el Sexto Rayo, Iniciación Kumara Multidimensional y de la Familia Sagrada, junto a la Maestra Joanita Molina (SP).": "<strong>Ashram de Gaia</strong> — Iniciado no Sexto Raio, Iniciação Kumara Multidimensional e da Família Sagrada, junto à Mestra Joanita Molina (SP).",

    /* ===== AGENDAR ===== */
    "Registro de Atendimiento": "Registro de Atendimento",
    "Demos juntos el primer paso": "Demos juntos o primeiro passo",
    "Completa tu registro con calma y sinceridad. Cada dato me ayuda a preparar tu diagnóstico multidimensional antes de nuestro encuentro. Lo que compartas se guarda en un espacio de absoluta confidencialidad.": "Preencha seu registro com calma e sinceridade. Cada dado me ajuda a preparar seu diagnóstico multidimensional antes do nosso encontro. O que você compartilhar se guarda em um espaço de absoluta confidencialidade.",
    "Tus datos sagrados": "Seus dados sagrados",
    "Formulario de Registro": "Formulário de Registro",
    "Nombre completo *": "Nome completo <span class='req'>*</span>",
    "Correo electrónico *": "E-mail <span class='req'>*</span>",
    "WhatsApp / Teléfono": "WhatsApp / Telefone",
    "Programa de tu interés": "Programa de seu interesse",
    "Sesión Única": "Sessão Única",
    "Jornada de 8": "Jornada de 8",
    "Renacimiento de 12": "Renascimento de 12",
    "Aún no lo sé · oriéntame": "Ainda não sei · me oriente",
    "Fecha de nacimiento *": "Data de nascimento <span class='req'>*</span>",
    "Hora de nacimiento": "Hora de nascimento",
    "Si la conoces — nos ayuda en la lectura.": "Se você a conhece — nos ajuda na leitura.",
    "Ciudad y país de nacimiento": "Cidade e país de nascimento",
    "¿Qué estás viviendo? *": "O que você está vivendo? <span class='req'>*</span>",
    "No hace falta que sea perfecto. Escribe desde el corazón.": "Não precisa ser perfeito. Escreva desde o coração.",
    "Autorizo de forma libre, expresa e informada el tratamiento de mis datos personales —incluidos los datos sensibles que decida compartir— con la finalidad exclusiva de gestionar mi registro y atendimiento terapéutico, conforme a la Ley N° 18.331 de Protección de Datos Personales (Uruguay) y a la Ley General de Protección de Datos — LGPD, Lei nº 13.709/2018 (Brasil). Comprendo que mis datos se tratan de manera confidencial, no se comparten con terceros, y que puedo solicitar su acceso, rectificación o eliminación en cualquier momento. *": "Autorizo de forma livre, expressa e informada o tratamento dos meus dados pessoais —incluídos os dados sensíveis que eu decida compartilhar— com a finalidade exclusiva de gerir meu registro e atendimento terapêutico, conforme a <strong>Lei N° 18.331 de Proteção de Dados Pessoais (Uruguai)</strong> e a <strong>Lei Geral de Proteção de Dados — LGPD, Lei nº 13.709/2018 (Brasil)</strong>. Compreendo que meus dados são tratados de maneira confidencial, não são compartilhados com terceiros, e que posso solicitar seu acesso, retificação ou eliminação a qualquer momento. <span class='req'>*</span>",
    "Enviar mi registro": "Enviar meu registro",
    "Enviar por WhatsApp": "Enviar pelo WhatsApp",
    "Al enviar, tu registro se abre como un correo dirigido a esenios2022@gmail.com y se guarda una copia en este dispositivo. Tus datos son tratados con absoluta confidencialidad y nunca se comparten con terceros.": "Ao enviar, seu registro se abre como um e-mail direcionado a <strong>esenios2022@gmail.com</strong> e se guarda uma cópia neste dispositivo. Seus dados são tratados com absoluta confidencialidade e nunca são compartilhados com terceiros.",
    "Tu registro está en camino 🙏": "Seu registro está a caminho 🙏",
    "Gracias por tu confianza. Se abrió tu correo con todos los datos listos para enviar — solo confírmalo desde tu app de correo. Pronto me pondré en contacto contigo para coordinar tu sesión.": "Obrigado pela sua confiança. Seu e-mail foi aberto com todos os dados prontos para enviar — basta confirmá-lo no seu app de e-mail. Em breve entrarei em contato com você para combinar sua sessão.",
    "Volver al inicio": "Voltar ao início"
  };

  /* ---------------- MOTOR ---------------- */
  const SEL = ".eyebrow,.display,.lead,p,.di-list li,.price-list li,.btn,.therapy-link,.proj-link,.proj-tag," +
    ".price-name,.price-kicker,.price-meta,.price-tag-best,.testi-quote,.testi-detail," +
    ".pay-chip,.pay-note,.lbl,.brand-sub,.navlink,.sm-title,.sm-desc,.bento-card h4," +
    ".step h4,.gold-name,footer h3,footer h4,footer a,label,option,.hint,.form-privacy";

  function apply(lang) {
    const list = document.querySelectorAll(SEL);
    let blocker = null;
    list.forEach(el => {
      if (!el.isConnected) return;
      if (blocker && blocker !== el && blocker.contains(el)) return;
      if (el.getAttribute("data-i18n-es") === null) {
        el.setAttribute("data-i18n-es", el.innerHTML);
        el.setAttribute("data-i18n-key", norm(el.textContent));
      }
      const key = el.getAttribute("data-i18n-key");
      const hasPT = Object.prototype.hasOwnProperty.call(T, key);
      if (lang === "pt" && hasPT) {
        el.innerHTML = T[key];
        blocker = el;
      } else {
        el.innerHTML = el.getAttribute("data-i18n-es");
        if (hasPT) blocker = el;
      }
    });

    // Placeholders
    document.querySelectorAll("[placeholder]").forEach(el => {
      if (el.getAttribute("data-i18n-ph-es") === null) {
        el.setAttribute("data-i18n-ph-es", el.getAttribute("placeholder") || "");
      }
      const k = norm(el.getAttribute("data-i18n-ph-es"));
      const pt = PH[k];
      el.setAttribute("placeholder", (lang === "pt" && pt != null) ? pt : el.getAttribute("data-i18n-ph-es"));
    });

    // Título de pestaña
    document.title = (lang === "pt" && TITLES[ES_TITLE]) ? TITLES[ES_TITLE] : ES_TITLE;
    document.documentElement.lang = lang;

    // Estado del switch
    document.querySelectorAll(".lang-opt").forEach(b =>
      b.classList.toggle("is-active", b.dataset.lang === lang));

    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function current() {
    let l = "es";
    try { l = localStorage.getItem(KEY) || "es"; } catch (e) {}
    return l === "pt" ? "pt" : "es";
  }

  // Bind switch
  document.querySelectorAll(".lang-opt").forEach(btn => {
    btn.addEventListener("click", () => apply(btn.dataset.lang));
  });

  apply(current());
})();
