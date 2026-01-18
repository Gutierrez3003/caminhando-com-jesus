// js/script.js – Caminhando com Jesus: 52 semanas completas + localStorage

const semanas = [
    // Mês 1-3: Quem é Deus e quem somos nós
    { titulo: "Semana 1 – Deus é amor e me criou", historia: "Há toooodo o tempo existia Deus. Ele é amor puro! Um dia disse: “Vou criar o mundo!” Fez o sol, o mar, os animais… e depois criou você, porque queria um filho/uma filha para amar muito.", atividade: "Desenhar você com um coração gigante e escrever “Deus me ama!”", oracao: "Deus bom, obrigado por me criar. Eu te amo muito! Amém.", gesto: "abraço forte" },
    { titulo: "Semana 2 – Deus é Pai, Filho e Espírito Santo", historia: "Deus é um só, mas são três Pessoas que se amam tanto que são um só Deus: Papai Deus, Jesus Filho e o Espírito Santo que é como vento de amor.", atividade: "Acender 3 velinhas de aniversário e soprar juntas dizendo “Deus é Trindade!”", oracao: "Pai, Filho e Espírito Santo, vivam no meu coração! Amém.", gesto: "mãos em forma de pomba" },
    { titulo: "Semana 3 – Meu Anjo da Guarda", historia: "Quando você nasceu Deus deu um anjo só para você! Ele fica do seu lado o dia todo, te protege e te ajuda a ser bonzinho.", atividade: "Brincar de “anjo invisível”: fechar olhos e andar pela sala sentindo o anjo guiar.", oracao: "Anjo de Deus, meu bom guardador, que me amas, me guarda e me protege sempre.", gesto: "mão no ombro" },
    { titulo: "Semana 4 – Jesus é o Filho de Deus que veio ao mundo", historia: "Deus amava tanto a gente que mandou seu Filho Jesus vir ser criança como nós! Ele veio para nos ensinar a amar.", atividade: "Embrulhar uma boneca como Menino Jesus e colocar num presépio de caixa de sapato.", oracao: "Jesus, bem-vindo no meu coração! Amém.", gesto: "cruz na testa" },
    { titulo: "Semana 5 – Maria é a mamãe de Jesus", historia: "Maria disse “sim” a Deus e virou a mamãe do Salvador. Ela ama você como filho também e cuida de você sempre.", atividade: "Fazer coroinha de flores de papel crepom para uma imagem de Maria.", oracao: "Ave Maria, cheia de graça, o Senhor é contigo...", gesto: "mãos juntas" },
    { titulo: "Semana 6 – São José, o pai adotivo de Jesus", historia: "São José cuidava de Jesus e Maria com trabalho e carinho. Ele é o protetor das famílias como a nossa.", atividade: "Brincar de carpintaria com blocos de madeira ou massinha.", oracao: "São José, proteja minha família! Amém.", gesto: "mãos de martelo" },
    { titulo: "Semana 7 – A Sagrada Família", historia: "Jesus, Maria e José moravam juntinhos, rezavam juntos e trabalhavam. São a família mais santa do mundo!", atividade: "Desenhar sua família ao lado da Sagrada Família.", oracao: "Jesus, Maria e José, eu vos dou o coração e a alma minha! Amém.", gesto: "abraço em família" },
    { titulo: "Semana 8 – Jesus nasceu no Natal", historia: "Numa noite fria em Belém, Jesus nasceu numa manjedoura porque não tinha lugar na estalagem. Os anjos cantaram!", atividade: "Montar presépio com caixas e bonequinhos de papel.", oracao: "Obrigado Jesus por nascer para mim! Amém.", gesto: "beijar o Menino Jesus" },
    { titulo: "Semana 9 – Jesus cresceu como eu", historia: "Jesus também foi bebê, criança, aprendeu a andar, falar e ajudar em casa. Ele entende como é ser como você.", atividade: "Colar fotos de quando vocês eram bebês ao lado de Jesus menino.", oracao: "Jesus, cresce no meu coração! Amém.", gesto: "mão no coração" },
    { titulo: "Semana 10 – Jesus me ama muito", historia: "Jesus ama cada criança do mundo inteiro, inclusive você, com nome e sobrenome! Ele morreu por amor a você.", atividade: "Escrever o nome dentro de um coração grande de cartolina.", oracao: "Jesus, eu sei que tu me amas! Amém.", gesto: "abraço em si mesmo" },
    { titulo: "Semana 11 – Eu sou filho/a amado/a de Deus", historia: "Deus te criou especial e único. Você é o tesouro mais precioso Dele, mais que ouro ou diamantes.", atividade: "Fazer um espelho com cartolina e escrever “Eu sou amado/a de Deus!”", oracao: "Deus Pai, eu sou teu filho/a! Amém.", gesto: "sorriso grande" },
    { titulo: "Semana 12 – O Batismo – eu entrei na família de Deus", historia: "No Batismo, água e óleo te lavaram e o Espírito Santo entrou em você. Agora você é da família de Jesus!", atividade: "Brincar de Batismo com uma boneca e água perfumada.", oracao: "Obrigado pelo meu Batismo! Amém.", gesto: "água na cabeça" },

    // Mês 4-6: A vida de Jesus
    { titulo: "Semana 13 – Jesus faz milagres porque ama", historia: "Jesus curava doentes e acalmava tempestades porque queria mostrar o amor de Deus em ação.", atividade: "Fazer onda de papel azul e soprar para “acalmar” como Jesus.", oracao: "Jesus, faz milagre no meu coração! Amém.", gesto: "mãos estendidas" },
    { titulo: "Semana 14 – Jesus ensina a rezar o Pai-Nosso", historia: "Jesus ensinou: “Pai nosso que estais nos céus...” para a gente falar com Deus como com um papai bom.", atividade: "Cantar o Pai-Nosso com gestos (pão = mãos como pão).", oracao: "Pai nosso, que estais nos céus...", gesto: "mãos no céu" },
    { titulo: "Semana 15 – Jesus quer que a gente perdoe", historia: "Jesus disse: “Perdoai setenta vezes sete” porque o perdão faz o coração leve como pluma.", atividade: "Fazer balão de perdão: desenhar erro e “soltar” amarrando.", oracao: "Jesus, me ajuda a perdoar! Amém.", gesto: "mãos abertas" },
    { titulo: "Semana 16 – Jesus multiplicou os pães (partilha)", historia: "Com 5 pães e 2 peixes, Jesus alimentou milhares! Partilhar é multiplicar o amor.", atividade: "Dividir biscoitos em “milagres” com a família.", oracao: "Jesus, ensina-me a partilhar! Amém.", gesto: "mãos dando" },
    { titulo: "Semana 17 – Jesus acolhe as crianças", historia: "Jesus pegou as crianças no colo e disse: “Deixai vir a mim as criancinhas!” Ele ama vocês primeiro.", atividade: "Fazer almofada “colo de Jesus” com tecido macio.", oracao: "Jesus, me pega no colo! Amém.", gesto: "braços abertos" },
    { titulo: "Semana 18 – A entrada de Jesus em Jerusalém (Ramos)", historia: "Povo jogava ramos e dizia “Hosana!” quando Jesus entrou na cidade montado num burrinho.", atividade: "Fazer ramos de papel verde e desfilar cantando.", oracao: "Hosana a Jesus Rei! Amém.", gesto: "mãos acenando" },
    { titulo: "Semana 19 – Jesus lava os pés dos amigos (servir)", historia: "Na Última Ceia, Jesus lavou os pés dos discípulos para mostrar que servir é amar.", atividade: "Lavar pés de boneca com água morna e toalha.", oracao: "Jesus, me ensina a servir! Amém.", gesto: "mãos lavando" },
    { titulo: "Semana 20 – A Última Ceia – Jesus dá a Eucaristia", historia: "Jesus pegou pão e vinho: “Isto é o meu Corpo...”. Na Missa, Ele vem para nós!", atividade: "Fazer pãozinho de massinha e “consagrar” com oração.", oracao: "Jesus Eucaristia, fica comigo! Amém.", gesto: "mãos como cálice" },
    { titulo: "Semana 21 – Jesus morre na cruz por amor", historia: "Na cruz, Jesus sofreu por nossos pecados, mas disse “Pai, perdoa-lhes” com amor enorme.", atividade: "Fazer cruz de palitos e colar corações.", oracao: "Jesus na cruz, eu te amo! Amém.", gesto: "mãos em cruz" },
    { titulo: "Semana 22 – Jesus ressuscitou! Aleluia!", historia: "No terceiro dia, Jesus venceu a morte! O túmulo vazio e Maria Madalena viu Ele vivo!", atividade: "Esconder “Jesus ressuscitado” e caça ao tesouro.", oracao: "Aleluia! Jesus vive! Amém.", gesto: "pular de alegria" },
    { titulo: "Semana 23 – Jesus sobe ao céu", historia: "Jesus subiu ao céu com os anjos, prometendo: “Eu estou sempre convosco até o fim dos tempos.”", atividade: "Fazer “nuvem” de algodão e subir boneco com balão.", oracao: "Jesus, volta logo! Amém.", gesto: "olhar para o céu" },
    { titulo: "Semana 24 – O Espírito Santo desce no Pentecostes", historia: "Línguas de fogo e vento forte! O Espírito Santo deu coragem aos apóstolos para espalhar o amor.", atividade: "Soprar “vento” em velas e desenhar chaminhas.", oracao: "Vem Espírito Santo, enche meu coração! Amém.", gesto: "sopro forte" },

    // Mês 7-9: Nossos amigos do céu (santos)
    { titulo: "Semana 25 – São Francisco (amigo dos animais)", historia: "São Francisco amava tanto Jesus que chamava os animais de “irmão lobo, irmã passarinho”. Ele cuidava da natureza.", atividade: "Fazer fantoche de bichinhos com saco de papel e cantar louvor.", oracao: "São Francisco, ajuda-me a cuidar da criação! Amém.", gesto: "mãos como patas" },
    { titulo: "Semana 26 – Santa Teresinha (pequenas coisas com amor)", historia: "Santa Teresinha ia ao céu com “pequenas flores” de amor nas coisas simples do dia a dia.", atividade: "Colar pétalas de papel em um caminho para o céu.", oracao: "Santa Teresinha, me ensina a amar nas pequenas coisas! Amém.", gesto: "jogar flores" },
    { titulo: "Semana 27 – São João Paulo II (o papa que brincava com crianças)", historia: "O papa João Paulo II viajava o mundo rezando e brincava com crianças, dizendo “Não tenham medo!”", atividade: "Fazer máscara de papa e “viajar” pela casa.", oracao: "São João Paulo, reza por nós! Amém.", gesto: "mão abençoando" },
    { titulo: "Semana 28 – Santa Jacinta e São Francisco de Fátima", historia: "Os pastorzinhos de Fátima viram Maria e rezavam muito pelo Papa e pela paz no mundo.", atividade: "Fazer coroa de rosas e rezar mistério do terço.", oracao: "Jacinta e Francisco, me ensinem a rezar! Amém.", gesto: "mãos no terço" },
    { titulo: "Semana 29 – São João Bosco (amigo das crianças)", historia: "Dom Bosco brincava e ensinava meninos pobres a serem santos, com truques de mágica e futebol.", atividade: "Brincar de circo com lenços e bolas.", oracao: "São João Bosco, cuida das crianças! Amém.", gesto: "bola no ar" },
    { titulo: "Semana 30 – Santa Mônica e Santo Agostinho", historia: "Santa Mônica chorou e rezou pela conversão do filho Agostinho, que virou grande santo.", atividade: "Fazer lágrima de papel que vira coração (virar do avesso).", oracao: "Santa Mônica, reza pela minha família! Amém.", gesto: "lágrima virando sorriso" },
    { titulo: "Semana 31 – São José de Anchieta (santo brasileiro!)", historia: "Padre Anchieta veio ao Brasil e ensinava catequese cantando para crianças indígenas, com peças de teatro.", atividade: "Cantar musiquinha indígena simples + desenhar cruz com penas.", oracao: "São José de Anchieta, reza pelo Brasil! Amém.", gesto: "dança indígena" },
    { titulo: "Semana 32 – Santa Paulina (primeira santa brasileira)", historia: "Madre Paulina cuidava de doentes e pobres no sul do Brasil, com coração cheio de Jesus sofredor.", atividade: "Fazer cartinha de carinho para alguém doente da família.", oracao: "Santa Paulina, ajuda os doentes! Amém.", gesto: "mão no doente" },
    { titulo: "Semana 33 – São Frei Galvão", historia: "Frei Galvão fazia pílulas milagrosas de oração e construía igrejas em São Paulo com fé enorme.", atividade: "Fazer “pílula” de papel com oração dentro.", oracao: "Frei Galvão, faz milagre para nós! Amém.", gesto: "rolar papel" },
    { titulo: "Semana 34 – Beata Nhá Chica", historia: "Nhá Chica, escrava libertada, rezava e ajudava pobres em Minas Gerais, construindo a igreja de São Francisco.", atividade: "Construir “igrejinha” com caixas de papelão.", oracao: "Nhá Chica, me ensina a rezar! Amém.", gesto: "mãos rezando" },
    { titulo: "Semana 35 – São Padre Pio", historia: "Padre Pio tinha estigmas de Jesus e ouvia confissões o dia todo, dizendo “Reze, confie e não tenha medo.”", atividade: "Fazer luva vermelha como estigma e “ouvir” confissão de boneca.", oracao: "Padre Pio, reza por mim! Amém.", gesto: "mãos com marcas" },
    { titulo: "Semana 36 – Santa Madre Teresa de Calcutá", historia: "Madre Teresa cuidava dos mais pobres na Índia, vendo Jesus neles e dizendo “Deus ama os esquecidos.”", atividade: "Fazer sari de papel e “cuidar” de bonecos doentes.", oracao: "Madre Teresa, me faz amar os pobres! Amém.", gesto: "abraço ao pobre" },

    // Mês 10-12: A Igreja e os sacramentos
    { titulo: "Semana 37 – A Igreja é a família de Deus", historia: "A Igreja é como uma grande família de Jesus, com padres, bispos e todos nós rezando juntos.", atividade: "Desenhar a Igreja como casa grande com todo mundo dentro.", oracao: "Igreja de Jesus, une-nos! Amém.", gesto: "círculo de mãos" },
    { titulo: "Semana 38 – A Missa é uma festa", historia: "Na Missa, cantamos, ouvimos Jesus na Palavra e comemos Ele na Eucaristia. É festa do céu na terra!", atividade: "Fazer missal de papel com desenhos das partes da Missa.", oracao: "Obrigado pela Missa! Amém.", gesto: "sininho tocando" },
    { titulo: "Semana 39 – A Confissão – Jesus me perdoa", historia: "No confessionário, Jesus perdoa tudo pela boca do padre, como um banho novo na alma.", atividade: "Fazer “banho” de confissão com boneca e água colorida.", oracao: "Jesus, me perdoa sempre! Amém.", gesto: "mãos limpando" },
    { titulo: "Semana 40 – A Eucaristia – Jesus fica dentro de mim", historia: "Na hóstia, Jesus vem inteiro para morar no nosso coração e nos dar força para amar.", atividade: "Fazer hóstia de massinha branca redondinha e “comer” com reverência.", oracao: "Jesus, eu te recebo no meu coraçãozinho! Amém.", gesto: "mãos no peito" },
    { titulo: "Semana 41 – A Crisma – o Espírito Santo me faz forte", historia: "Na Crisma, o Espírito Santo desce como em Pentecostes, dando dons para sermos apóstolos.", atividade: "Soprar “fogo” de papel e colar nas mãos.", oracao: "Vem Espírito Santo na Crisma! Amém.", gesto: "chama nas mãos" },
    { titulo: "Semana 42 – O Matrimônio – família abençoada", historia: "No casamento, Deus abençoa o papai e a mamãe para formar família santa como a de Nazaré.", atividade: "Fazer alianças de papel e “casar” bonecos.", oracao: "Deus, abençoa as famílias! Amém.", gesto: "anéis trocados" },
    { titulo: "Semana 43 – A Ordem – os padres ajudam Jesus", historia: "Padres são amigos de Jesus que rezam Missa, batizam e guiam o rebanho como bons pastores.", atividade: "Fazer estola de padre com pano e “batizar” boneca.", oracao: "Obrigado pelos padres! Amém.", gesto: "mão em ombro" },
    { titulo: "Semana 44 – A Unção dos enfermos – Jesus cuida dos doentes", historia: "Óleo santo traz Jesus para curar corpo e alma dos doentes, dando paz e força.", atividade: "Fazer frasco de óleo com glitter e “ungir” boneca doente.", oracao: "Jesus, cura os doentes! Amém.", gesto: "mão na testa" },
    { titulo: "Semana 45 – Os mandamentos (versão positiva: Amar a Deus e ao próximo)", historia: "Deus deu 10 jeitos de amar: honra papai e mamãe, não mentir, não roubar... tudo por amor!", atividade: "Fazer plaquinha com coração e “não matar = amar”.", oracao: "Deus, me ajuda a amar! Amém.", gesto: "dedos em V de vitória" },
    { titulo: "Semana 46 – As Bem-aventuranças (ser feliz do jeito de Jesus)", historia: "Jesus disse: “Felizes os mansos, os que choram... pois herdarão a terra e o céu!”", atividade: "Desenhar carinha feliz para cada bem-aventurança.", oracao: "Feliz de ti, Jesus! Amém.", gesto: "polegar para cima" },

    // Mês 13: Tempo litúrgico e Maria
    { titulo: "Semana 47 – Advento – esperando Jesus", historia: "Advento é tempo de preparar o coração para o Natal, como Maria esperando Jesus na barriga.", atividade: "Fazer coroa de Advento com 4 velas de papel.", oracao: "Vem Jesus, eu te espero! Amém.", gesto: "mãos esperando" },
    { titulo: "Semana 48 – Natal – Jesus nasceu!", historia: "Noite santa! Jesus veio como bebê para ser nosso Salvador. Cantemos glória!", atividade: "Cantar “Noite Feliz” com gestos e luzes.", oracao: "Glória a Deus nas alturas! Amém.", gesto: "estrelas no céu" },
    { titulo: "Semana 49 – Quaresma – caminhar com Jesus", historia: "Quaresma é 40 dias de jejum, oração e esmola, caminhando com Jesus para a cruz.", atividade: "Fazer caminho de cruz com 14 pedrinhas pintadas.", oracao: "Jesus, eu caminho contigo! Amém.", gesto: "passos lentos" },
    { titulo: "Semana 50 – Semana Santa", historia: "Domingo de Ramos à Páscoa: entramos com Jesus, ceamos, cruz e ressurreição!", atividade: "Encenar Semana Santa com fantoches simples.", oracao: "Semana Santa, salva-nos! Amém.", gesto: "ramos na mão" },
    { titulo: "Semana 51 – Tempo Pascal – tempo de alegria", historia: "50 dias de festa! Jesus vivo, batismos, Espírito Santo – pura alegria!", atividade: "Fazer ovo de Páscoa de papel e esconder “surpresas”.", oracao: "Aleluia na Páscoa! Amém.", gesto: "pular alto" },
    { titulo: "Semana 52 – Maria, Rainha do céu (mês de maio)", historia: "Jesus coroou Maria como Rainha do céu porque ela foi a melhor mamãe do mundo.", atividade: "Fazer coroa de papel e coroar imagem de Nossa Senhora.", oracao: "Ó Maria, Mãe e Rainha, guia-me ao teu Filho Jesus! Amém.", gesto: "coroa na cabeça" }
];

// ==================== NÃO MUDE NADA ABAIXO ====================

function criarSemanas() {
    const container = document.getElementById("semanas");
    container.innerHTML = ""; // limpa o container

    semanas.forEach((semana, index) => {
        const divSemana = document.createElement("div");
        divSemana.className = "semana";
        if (getConcluidas().includes(index)) {
            divSemana.classList.add("concluido");
        }

        divSemana.innerHTML = `
      <h2>${semana.titulo}</h2>
      <div class="conteudo">
        <p><strong>Historinha:</strong> ${semana.historia}</p>
        <p><strong>Atividade:</strong> ${semana.atividade}</p>
        <p><strong>Oração:</strong> ${semana.oracao} <em>(${semana.gesto})</em></p>
        <button onclick="marcarConcluida(${index})">✓ Concluímos esta semana!</button>
      </div>
    `;

        // Evento de clique para abrir/fechar o conteúdo
        divSemana.querySelector("h2").addEventListener("click", () => {
            const conteudo = divSemana.querySelector(".conteudo");
            conteudo.classList.toggle("aberto");
        });

        container.appendChild(divSemana);
    });
}

function marcarConcluida(index) {
    let concluidas = getConcluidas();
    if (!concluidas.includes(index)) {
        concluidas.push(index);
        localStorage.setItem("semanasConcluidas", JSON.stringify(concluidas));
    }
    criarSemanas(); // Recarrega a página com as mudanças
    alert("Parabéns! Semana " + (index + 1) + " concluída com Jesus ❤️ Vamos para a próxima!");
}

function getConcluidas() {
    return JSON.parse(localStorage.getItem("semanasConcluidas") || "[]");
}

// Inicia quando a página carrega
window.onload = criarSemanas;