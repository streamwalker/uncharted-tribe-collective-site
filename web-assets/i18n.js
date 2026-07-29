/* Uncharted Tribe Collective — lightweight i18n
   15 languages. Brand name "Uncharted Tribe Collective" is never translated.
   Strings are keyed by data-i18n attributes in the markup. */
(function (w) {
  'use strict';

  var LANGS = [
    { code: 'en', label: 'English',    dir: 'ltr' },
    { code: 'es', label: 'Español',    dir: 'ltr' },
    { code: 'fr', label: 'Français',   dir: 'ltr' },
    { code: 'de', label: 'Deutsch',    dir: 'ltr' },
    { code: 'it', label: 'Italiano',   dir: 'ltr' },
    { code: 'pt', label: 'Português',  dir: 'ltr' },
    { code: 'zh', label: '中文',        dir: 'ltr' },
    { code: 'ja', label: '日本語',      dir: 'ltr' },
    { code: 'ko', label: '한국어',       dir: 'ltr' },
    { code: 'ar', label: 'العربية',      dir: 'rtl' },
    { code: 'hi', label: 'हिन्दी',        dir: 'ltr' },
    { code: 'ru', label: 'Русский',    dir: 'ltr' },
    { code: 'th', label: 'ไทย',         dir: 'ltr' },
    { code: 'tl', label: 'Tagalog',    dir: 'ltr' },
    { code: 'vi', label: 'Tiếng Việt', dir: 'ltr' }
  ];

  var T = {
    en: {
      lang_label:'Language',
      util_ship:'Complimentary shipping for Tribe members.',
      util_join:'Sign In or Join the Tribe',
      nav_archive:'The Archive', search:'Search', account:'Account', cart:'Cart',
      nav_men:'Men', nav_women:'Women', nav_unisex:'Unisex', nav_collections:'Collections',
      nav_fyt:'Find Your Tribe', nav_discover:'Discover',
      intro_eyebrow:'The Route Is Personal',
      intro_h1:'Tell Us How You Wander',
      intro_p:"We will never tell you where to go. That is the entire distinction, and it is load-bearing. These are eight ways members already move through the world — find the one that sounds like yours, and we'll point you to the drops built for it.",
      col_outdoor:'Outdoor Explorer', col_coastal:'Coastal Tribe', col_nomad:'Global Nomad',
      shop_now:'Shop Now',
      quote:'"The route is personal; the direction is shared. We will never tell you where to go. We will only insist that you go somewhere no one selected for you."',
      quote_src:'Article VII — The Founding Charter',
      cta_onedegree:'Start with One Degree',
      foot_tagline:'We exist to turn the impulse to wander into the capacity to choose.',
      foot_collective:'The Collective', foot_articles:'The Articles',
      foot_onedegree:'One Degree Off', foot_fieldnotes:'Field Notes',
      foot_follow:'Follow',
      copyright:'© 2026 Uncharted Tribe Collective · Go Where No One Assigned You.'
    },
    es: {
      lang_label:'Idioma',
      util_ship:'Envío gratuito para los miembros de la Tribu.',
      util_join:'Inicia sesión o únete a la Tribu',
      nav_archive:'El Archivo', search:'Buscar', account:'Cuenta', cart:'Carrito',
      nav_men:'Hombre', nav_women:'Mujer', nav_unisex:'Unisex', nav_collections:'Colecciones',
      nav_fyt:'Encuentra tu Tribu', nav_discover:'Descubrir',
      intro_eyebrow:'La ruta es personal',
      intro_h1:'Cuéntanos cómo viajas',
      intro_p:'Nunca te diremos adónde ir. Esa es toda la diferencia, y es fundamental. Estas son ocho formas en que nuestros miembros ya recorren el mundo: encuentra la que se parezca a la tuya y te mostraremos las piezas creadas para ella.',
      col_outdoor:'Explorador al Aire Libre', col_coastal:'Tribu Costera', col_nomad:'Nómada Global',
      shop_now:'Comprar',
      quote:'«La ruta es personal; la dirección es compartida. Nunca te diremos adónde ir. Solo insistiremos en que vayas a algún lugar que nadie eligió por ti.»',
      quote_src:'Artículo VII — La Carta Fundacional',
      cta_onedegree:'Empieza con Un Grado',
      foot_tagline:'Existimos para convertir el impulso de vagar en la capacidad de elegir.',
      foot_collective:'El Colectivo', foot_articles:'Los Artículos',
      foot_onedegree:'Un Grado de Desvío', foot_fieldnotes:'Notas de Campo',
      foot_follow:'Síguenos',
      copyright:'© 2026 Uncharted Tribe Collective · Ve donde nadie te asignó.'
    },
    fr: {
      lang_label:'Langue',
      util_ship:'Livraison offerte pour les membres de la Tribu.',
      util_join:'Se connecter ou rejoindre la Tribu',
      nav_archive:'Les Archives', search:'Rechercher', account:'Compte', cart:'Panier',
      nav_men:'Homme', nav_women:'Femme', nav_unisex:'Unisexe', nav_collections:'Collections',
      nav_fyt:'Trouvez votre Tribu', nav_discover:'Découvrir',
      intro_eyebrow:'La route est personnelle',
      intro_h1:'Dites-nous comment vous voyagez',
      intro_p:"Nous ne vous dirons jamais où aller. C'est toute la différence, et elle est essentielle. Voici huit façons dont nos membres parcourent déjà le monde : trouvez celle qui vous ressemble, et nous vous montrerons les pièces conçues pour elle.",
      col_outdoor:'Explorateur du Grand Air', col_coastal:'Tribu Côtière', col_nomad:'Nomade Mondial',
      shop_now:'Acheter',
      quote:"« La route est personnelle ; la direction est partagée. Nous ne vous dirons jamais où aller. Nous insisterons seulement pour que vous alliez quelque part que personne n'a choisi pour vous. »",
      quote_src:'Article VII — La Charte Fondatrice',
      cta_onedegree:'Commencez par Un Degré',
      foot_tagline:"Nous existons pour transformer l'envie d'errer en capacité de choisir.",
      foot_collective:'Le Collectif', foot_articles:'Les Articles',
      foot_onedegree:'Un Degré d’Écart', foot_fieldnotes:'Carnets de Route',
      foot_follow:'Suivez-nous',
      copyright:'© 2026 Uncharted Tribe Collective · Allez où personne ne vous a assigné.'
    },
    de: {
      lang_label:'Sprache',
      util_ship:'Kostenloser Versand für Mitglieder der Tribe.',
      util_join:'Anmelden oder der Tribe beitreten',
      nav_archive:'Das Archiv', search:'Suchen', account:'Konto', cart:'Warenkorb',
      nav_men:'Herren', nav_women:'Damen', nav_unisex:'Unisex', nav_collections:'Kollektionen',
      nav_fyt:'Finde deine Tribe', nav_discover:'Entdecken',
      intro_eyebrow:'Die Route ist persönlich',
      intro_h1:'Sag uns, wie du unterwegs bist',
      intro_p:'Wir werden dir nie sagen, wohin du gehen sollst. Das ist der ganze Unterschied, und er trägt alles. Dies sind acht Arten, wie sich unsere Mitglieder bereits durch die Welt bewegen — finde die, die nach dir klingt, und wir zeigen dir die Stücke, die dafür gemacht sind.',
      col_outdoor:'Outdoor-Entdecker', col_coastal:'Küsten-Tribe', col_nomad:'Globaler Nomade',
      shop_now:'Jetzt kaufen',
      quote:'„Die Route ist persönlich; die Richtung ist gemeinsam. Wir werden dir nie sagen, wohin du gehen sollst. Wir bestehen nur darauf, dass du irgendwohin gehst, das niemand für dich ausgewählt hat."',
      quote_src:'Artikel VII — Die Gründungscharta',
      cta_onedegree:'Beginne mit Einem Grad',
      foot_tagline:'Wir existieren, um den Drang zu wandern in die Fähigkeit zu wählen zu verwandeln.',
      foot_collective:'Das Kollektiv', foot_articles:'Die Artikel',
      foot_onedegree:'Ein Grad Abweichung', foot_fieldnotes:'Feldnotizen',
      foot_follow:'Folgen',
      copyright:'© 2026 Uncharted Tribe Collective · Geh dorthin, wohin dich niemand geschickt hat.'
    },
    it: {
      lang_label:'Lingua',
      util_ship:'Spedizione gratuita per i membri della Tribù.',
      util_join:'Accedi o unisciti alla Tribù',
      nav_archive:"L'Archivio", search:'Cerca', account:'Account', cart:'Carrello',
      nav_men:'Uomo', nav_women:'Donna', nav_unisex:'Unisex', nav_collections:'Collezioni',
      nav_fyt:'Trova la tua Tribù', nav_discover:'Scopri',
      intro_eyebrow:'Il percorso è personale',
      intro_h1:'Raccontaci come viaggi',
      intro_p:'Non ti diremo mai dove andare. È tutta qui la differenza, ed è portante. Questi sono otto modi in cui i nostri membri attraversano già il mondo: trova quello che ti somiglia e ti mostreremo i capi creati per lui.',
      col_outdoor:'Esploratore Outdoor', col_coastal:'Tribù Costiera', col_nomad:'Nomade Globale',
      shop_now:'Acquista',
      quote:'«Il percorso è personale; la direzione è condivisa. Non ti diremo mai dove andare. Insisteremo solo perché tu vada da qualche parte che nessuno ha scelto per te.»',
      quote_src:'Articolo VII — La Carta Fondativa',
      cta_onedegree:'Inizia con Un Grado',
      foot_tagline:"Esistiamo per trasformare l'impulso di vagare nella capacità di scegliere.",
      foot_collective:'Il Collettivo', foot_articles:'Gli Articoli',
      foot_onedegree:'Un Grado di Scarto', foot_fieldnotes:'Note di Viaggio',
      foot_follow:'Seguici',
      copyright:'© 2026 Uncharted Tribe Collective · Vai dove nessuno ti ha assegnato.'
    },
    pt: {
      lang_label:'Idioma',
      util_ship:'Frete grátis para os membros da Tribo.',
      util_join:'Entrar ou juntar-se à Tribo',
      nav_archive:'O Arquivo', search:'Buscar', account:'Conta', cart:'Carrinho',
      nav_men:'Masculino', nav_women:'Feminino', nav_unisex:'Unissex', nav_collections:'Coleções',
      nav_fyt:'Encontre a sua Tribo', nav_discover:'Descobrir',
      intro_eyebrow:'A rota é pessoal',
      intro_h1:'Conte-nos como você viaja',
      intro_p:'Nunca diremos para onde você deve ir. Essa é toda a diferença, e ela sustenta tudo. Estas são oito maneiras pelas quais nossos membros já percorrem o mundo — encontre a que se parece com a sua, e mostraremos as peças criadas para ela.',
      col_outdoor:'Explorador ao Ar Livre', col_coastal:'Tribo Costeira', col_nomad:'Nômade Global',
      shop_now:'Comprar',
      quote:'"A rota é pessoal; a direção é compartilhada. Nunca diremos para onde você deve ir. Apenas insistiremos que você vá a algum lugar que ninguém escolheu por você."',
      quote_src:'Artigo VII — A Carta Fundadora',
      cta_onedegree:'Comece com Um Grau',
      foot_tagline:'Existimos para transformar o impulso de vagar na capacidade de escolher.',
      foot_collective:'O Coletivo', foot_articles:'Os Artigos',
      foot_onedegree:'Um Grau de Desvio', foot_fieldnotes:'Notas de Campo',
      foot_follow:'Siga-nos',
      copyright:'© 2026 Uncharted Tribe Collective · Vá aonde ninguém o designou.'
    },
    zh: {
      lang_label:'语言',
      util_ship:'部落成员享免费配送。',
      util_join:'登录或加入部落',
      nav_archive:'档案库', search:'搜索', account:'账户', cart:'购物车',
      nav_men:'男士', nav_women:'女士', nav_unisex:'中性', nav_collections:'系列',
      nav_fyt:'找到你的部落', nav_discover:'探索',
      intro_eyebrow:'路线因人而异',
      intro_h1:'告诉我们你如何远行',
      intro_p:'我们永远不会告诉你该去哪里。这正是全部的区别所在，也是我们的根基。以下是成员们行走世界的八种方式——找到那个像你的，我们会为你指向为它而生的单品。',
      col_outdoor:'户外探索者', col_coastal:'海岸部落', col_nomad:'全球游牧者',
      shop_now:'立即选购',
      quote:'"路线属于个人，方向属于我们共同。我们永远不会告诉你该去哪里。我们只会坚持——去一个无人为你挑选的地方。"',
      quote_src:'第七条 — 创始宪章',
      cta_onedegree:'从一度开始',
      foot_tagline:'我们的存在，是把漂泊的冲动化为选择的能力。',
      foot_collective:'集体', foot_articles:'条款',
      foot_onedegree:'偏离一度', foot_fieldnotes:'田野笔记',
      foot_follow:'关注我们',
      copyright:'© 2026 Uncharted Tribe Collective · 去无人指派你去的地方。'
    },
    ja: {
      lang_label:'言語',
      util_ship:'トライブ会員は送料無料。',
      util_join:'サインイン、またはトライブに参加',
      nav_archive:'アーカイブ', search:'検索', account:'アカウント', cart:'カート',
      nav_men:'メンズ', nav_women:'レディース', nav_unisex:'ユニセックス', nav_collections:'コレクション',
      nav_fyt:'あなたのトライブを見つける', nav_discover:'ディスカバー',
      intro_eyebrow:'ルートは、人それぞれ',
      intro_h1:'あなたの旅のかたちを教えてください',
      intro_p:'どこへ行くべきかを、私たちが告げることはありません。その一点こそがすべての違いであり、揺るがぬ土台です。ここにあるのは、メンバーがすでに世界を歩んでいる八つのかたち。あなたに近いものを見つけてください。そのために作られた一着へご案内します。',
      col_outdoor:'アウトドア・エクスプローラー', col_coastal:'コースタル・トライブ', col_nomad:'グローバル・ノマド',
      shop_now:'購入する',
      quote:'「ルートは個人のもの。方向は分かち合うもの。どこへ行くべきかを告げることはありません。ただ、誰にも選ばれていない場所へ行くことだけを、私たちは求めます。」',
      quote_src:'第七条 — 創設憲章',
      cta_onedegree:'ワン・ディグリーから始める',
      foot_tagline:'さまよいたいという衝動を、選ぶ力に変えるために、私たちは存在します。',
      foot_collective:'コレクティブ', foot_articles:'条文',
      foot_onedegree:'ワン・ディグリー・オフ', foot_fieldnotes:'フィールドノート',
      foot_follow:'フォロー',
      copyright:'© 2026 Uncharted Tribe Collective · 誰にも割り当てられていない場所へ。'
    },
    ko: {
      lang_label:'언어',
      util_ship:'트라이브 멤버 무료 배송.',
      util_join:'로그인 또는 트라이브 가입',
      nav_archive:'아카이브', search:'검색', account:'계정', cart:'장바구니',
      nav_men:'남성', nav_women:'여성', nav_unisex:'유니섹스', nav_collections:'컬렉션',
      nav_fyt:'당신의 트라이브 찾기', nav_discover:'디스커버',
      intro_eyebrow:'길은 저마다 다릅니다',
      intro_h1:'당신이 떠나는 방식을 들려주세요',
      intro_p:'우리는 결코 어디로 가라고 말하지 않습니다. 그것이 전부의 차이이며, 우리를 떠받치는 기둥입니다. 여기 멤버들이 이미 세상을 걷고 있는 여덟 가지 방식이 있습니다. 당신과 닮은 하나를 찾으세요. 그것을 위해 만들어진 제품으로 안내하겠습니다.',
      col_outdoor:'아웃도어 익스플로러', col_coastal:'코스탈 트라이브', col_nomad:'글로벌 노마드',
      shop_now:'쇼핑하기',
      quote:'"길은 개인의 것이고, 방향은 함께 나누는 것입니다. 우리는 결코 어디로 가라고 말하지 않습니다. 다만 누구도 당신을 위해 고르지 않은 곳으로 가라고 말할 뿐입니다."',
      quote_src:'제7조 — 창립 헌장',
      cta_onedegree:'원 디그리로 시작하기',
      foot_tagline:'떠돌고 싶은 충동을 선택하는 힘으로 바꾸기 위해 우리는 존재합니다.',
      foot_collective:'컬렉티브', foot_articles:'조항',
      foot_onedegree:'원 디그리 오프', foot_fieldnotes:'필드 노트',
      foot_follow:'팔로우',
      copyright:'© 2026 Uncharted Tribe Collective · 아무도 당신에게 정해주지 않은 곳으로.'
    },
    ar: {
      lang_label:'اللغة',
      util_ship:'شحن مجاني لأعضاء القبيلة.',
      util_join:'سجّل الدخول أو انضم إلى القبيلة',
      nav_archive:'الأرشيف', search:'بحث', account:'الحساب', cart:'السلة',
      nav_men:'رجال', nav_women:'نساء', nav_unisex:'للجنسين', nav_collections:'المجموعات',
      nav_fyt:'اعثر على قبيلتك', nav_discover:'اكتشف',
      intro_eyebrow:'الطريق شخصي',
      intro_h1:'أخبرنا كيف ترحل',
      intro_p:'لن نخبرك أبدًا إلى أين تذهب. هذا هو الفارق كله، وعليه يقوم كل شيء. هذه ثماني طرق يعبر بها أعضاؤنا العالم بالفعل — اعثر على ما يشبهك، وسنرشدك إلى القطع المصنوعة له.',
      col_outdoor:'مستكشف الطبيعة', col_coastal:'قبيلة الساحل', col_nomad:'الرحّالة العالمي',
      shop_now:'تسوّق الآن',
      quote:'«الطريق شخصي، والاتجاه مشترك. لن نخبرك أبدًا إلى أين تذهب. سنصرّ فقط على أن تذهب إلى مكان لم يخترْه لك أحد.»',
      quote_src:'المادة السابعة — الميثاق التأسيسي',
      cta_onedegree:'ابدأ بدرجة واحدة',
      foot_tagline:'نحن موجودون لنحوّل الرغبة في التجوال إلى قدرة على الاختيار.',
      foot_collective:'الجماعة', foot_articles:'المواد',
      foot_onedegree:'درجة واحدة بعيدًا', foot_fieldnotes:'ملاحظات ميدانية',
      foot_follow:'تابعنا',
      copyright:'© 2026 Uncharted Tribe Collective · اذهب حيث لم يعيّنك أحد.'
    },
    hi: {
      lang_label:'भाषा',
      util_ship:'ट्राइब सदस्यों के लिए मुफ़्त शिपिंग।',
      util_join:'साइन इन करें या ट्राइब से जुड़ें',
      nav_archive:'आर्काइव', search:'खोजें', account:'खाता', cart:'कार्ट',
      nav_men:'पुरुष', nav_women:'महिला', nav_unisex:'यूनिसेक्स', nav_collections:'संग्रह',
      nav_fyt:'अपनी ट्राइब खोजें', nav_discover:'खोजें',
      intro_eyebrow:'रास्ता निजी होता है',
      intro_h1:'बताइए, आप कैसे निकलते हैं',
      intro_p:'हम आपको कभी नहीं बताएँगे कि कहाँ जाना है। यही पूरा अंतर है, और यही हमारी नींव है। ये आठ तरीके हैं जिनसे हमारे सदस्य पहले से ही दुनिया में चल रहे हैं — वह चुनिए जो आपके जैसा लगे, और हम आपको उसके लिए बने पीस दिखाएँगे।',
      col_outdoor:'आउटडोर एक्सप्लोरर', col_coastal:'कोस्टल ट्राइब', col_nomad:'ग्लोबल नोमैड',
      shop_now:'अभी खरीदें',
      quote:'"रास्ता निजी है; दिशा साझा है। हम आपको कभी नहीं बताएँगे कि कहाँ जाना है। हम बस इतना कहेंगे कि वहाँ जाइए जो किसी और ने आपके लिए नहीं चुना।"',
      quote_src:'अनुच्छेद VII — संस्थापक चार्टर',
      cta_onedegree:'वन डिग्री से शुरू करें',
      foot_tagline:'हम भटकने की चाह को चुनने की क्षमता में बदलने के लिए मौजूद हैं।',
      foot_collective:'कलेक्टिव', foot_articles:'अनुच्छेद',
      foot_onedegree:'वन डिग्री ऑफ़', foot_fieldnotes:'फ़ील्ड नोट्स',
      foot_follow:'फ़ॉलो करें',
      copyright:'© 2026 Uncharted Tribe Collective · वहाँ जाइए जहाँ किसी ने आपको नहीं भेजा।'
    },
    ru: {
      lang_label:'Язык',
      util_ship:'Бесплатная доставка для членов Племени.',
      util_join:'Войти или вступить в Племя',
      nav_archive:'Архив', search:'Поиск', account:'Аккаунт', cart:'Корзина',
      nav_men:'Мужское', nav_women:'Женское', nav_unisex:'Унисекс', nav_collections:'Коллекции',
      nav_fyt:'Найдите своё Племя', nav_discover:'Открыть',
      intro_eyebrow:'Маршрут — личное дело',
      intro_h1:'Расскажите, как вы странствуете',
      intro_p:'Мы никогда не скажем вам, куда идти. В этом всё различие, и на нём всё держится. Вот восемь способов, которыми наши участники уже проходят по миру, — найдите тот, что звучит как ваш, и мы покажем вещи, созданные для него.',
      col_outdoor:'Исследователь природы', col_coastal:'Прибрежное племя', col_nomad:'Глобальный кочевник',
      shop_now:'Купить',
      quote:'«Маршрут — личное дело; направление — общее. Мы никогда не скажем вам, куда идти. Мы лишь будем настаивать, чтобы вы отправились туда, куда вас никто не назначал.»',
      quote_src:'Статья VII — Учредительная хартия',
      cta_onedegree:'Начните с Одного Градуса',
      foot_tagline:'Мы существуем, чтобы превратить желание странствовать в способность выбирать.',
      foot_collective:'Коллектив', foot_articles:'Статьи',
      foot_onedegree:'Один градус в сторону', foot_fieldnotes:'Полевые заметки',
      foot_follow:'Подписаться',
      copyright:'© 2026 Uncharted Tribe Collective · Иди туда, куда тебя никто не назначал.'
    },
    th: {
      lang_label:'ภาษา',
      util_ship:'จัดส่งฟรีสำหรับสมาชิก Tribe',
      util_join:'เข้าสู่ระบบหรือเข้าร่วม Tribe',
      nav_archive:'คลังบันทึก', search:'ค้นหา', account:'บัญชี', cart:'ตะกร้า',
      nav_men:'ผู้ชาย', nav_women:'ผู้หญิง', nav_unisex:'ยูนิเซ็กซ์', nav_collections:'คอลเลกชัน',
      nav_fyt:'ค้นหา Tribe ของคุณ', nav_discover:'ค้นพบ',
      intro_eyebrow:'เส้นทางเป็นเรื่องเฉพาะตัว',
      intro_h1:'บอกเราว่าคุณออกเดินทางอย่างไร',
      intro_p:'เราจะไม่มีวันบอกคุณว่าต้องไปที่ไหน นั่นคือความต่างทั้งหมด และเป็นรากฐานของเรา นี่คือแปดวิธีที่สมาชิกของเราเดินทางผ่านโลกอยู่แล้ว — ค้นหาแบบที่ฟังดูเหมือนคุณ แล้วเราจะพาคุณไปยังชิ้นงานที่สร้างมาเพื่อสิ่งนั้น',
      col_outdoor:'นักสำรวจกลางแจ้ง', col_coastal:'ชนเผ่าชายฝั่ง', col_nomad:'นักเดินทางไร้พรมแดน',
      shop_now:'ช้อปเลย',
      quote:'"เส้นทางเป็นของแต่ละคน ทิศทางเป็นของเราร่วมกัน เราจะไม่มีวันบอกคุณว่าต้องไปที่ไหน เราจะยืนยันเพียงว่าคุณควรไปยังที่ที่ไม่มีใครเลือกไว้ให้"',
      quote_src:'มาตรา VII — กฎบัตรก่อตั้ง',
      cta_onedegree:'เริ่มต้นด้วยหนึ่งองศา',
      foot_tagline:'เราดำรงอยู่เพื่อเปลี่ยนแรงปรารถนาที่จะออกเดินทาง ให้เป็นความสามารถที่จะเลือก',
      foot_collective:'คอลเลกทีฟ', foot_articles:'มาตรา',
      foot_onedegree:'เบนออกหนึ่งองศา', foot_fieldnotes:'บันทึกภาคสนาม',
      foot_follow:'ติดตาม',
      copyright:'© 2026 Uncharted Tribe Collective · ไปในที่ที่ไม่มีใครกำหนดให้คุณ'
    },
    tl: {
      lang_label:'Wika',
      util_ship:'Libreng padala para sa mga miyembro ng Tribo.',
      util_join:'Mag-sign in o sumali sa Tribo',
      nav_archive:'Ang Archive', search:'Maghanap', account:'Account', cart:'Cart',
      nav_men:'Lalaki', nav_women:'Babae', nav_unisex:'Unisex', nav_collections:'Mga Koleksyon',
      nav_fyt:'Hanapin ang Iyong Tribo', nav_discover:'Tuklasin',
      intro_eyebrow:'Personal ang ruta',
      intro_h1:'Sabihin mo kung paano ka naglalakbay',
      intro_p:'Hindi ka namin kailanman sasabihan kung saan pupunta. Iyon ang buong pagkakaiba, at iyon ang pundasyon namin. Ito ang walong paraan kung paano na naglalakbay ang aming mga miyembro sa mundo — hanapin ang tumutugma sa iyo, at ituturo namin sa iyo ang mga piyesang ginawa para roon.',
      col_outdoor:'Outdoor Explorer', col_coastal:'Tribo ng Baybayin', col_nomad:'Global Nomad',
      shop_now:'Mamili Na',
      quote:'"Personal ang ruta; magkasama ang direksyon. Hindi ka namin kailanman sasabihan kung saan pupunta. Igigiit lang namin na pumunta ka sa lugar na walang pumili para sa iyo."',
      quote_src:'Artikulo VII — Ang Saligang Kasulatan',
      cta_onedegree:'Magsimula sa Isang Digri',
      foot_tagline:'Umiiral kami upang gawing kakayahang pumili ang hangaring maglakbay.',
      foot_collective:'Ang Kolektibo', foot_articles:'Ang mga Artikulo',
      foot_onedegree:'Isang Digring Lihis', foot_fieldnotes:'Mga Tala sa Paglalakbay',
      foot_follow:'Sundan',
      copyright:'© 2026 Uncharted Tribe Collective · Pumunta kung saan walang nagtalaga sa iyo.'
    },
    vi: {
      lang_label:'Ngôn ngữ',
      util_ship:'Miễn phí vận chuyển cho thành viên Tribe.',
      util_join:'Đăng nhập hoặc tham gia Tribe',
      nav_archive:'Kho Lưu Trữ', search:'Tìm kiếm', account:'Tài khoản', cart:'Giỏ hàng',
      nav_men:'Nam', nav_women:'Nữ', nav_unisex:'Unisex', nav_collections:'Bộ sưu tập',
      nav_fyt:'Tìm Tribe của bạn', nav_discover:'Khám phá',
      intro_eyebrow:'Lộ trình là của riêng bạn',
      intro_h1:'Hãy kể chúng tôi nghe cách bạn lên đường',
      intro_p:'Chúng tôi sẽ không bao giờ bảo bạn phải đi đâu. Đó là toàn bộ sự khác biệt, và đó là nền móng của chúng tôi. Đây là tám cách mà các thành viên đã và đang đi qua thế giới — hãy tìm cách nghe giống bạn nhất, và chúng tôi sẽ chỉ cho bạn những thiết kế được tạo ra cho nó.',
      col_outdoor:'Người Khám Phá Thiên Nhiên', col_coastal:'Tribe Miền Biển', col_nomad:'Du Mục Toàn Cầu',
      shop_now:'Mua ngay',
      quote:'"Lộ trình là của riêng mỗi người; hướng đi là của chung. Chúng tôi sẽ không bao giờ bảo bạn phải đi đâu. Chúng tôi chỉ nhấn mạnh rằng hãy đến một nơi không ai chọn sẵn cho bạn."',
      quote_src:'Điều VII — Hiến Chương Sáng Lập',
      cta_onedegree:'Bắt đầu với Một Độ',
      foot_tagline:'Chúng tôi tồn tại để biến khát khao lang thang thành khả năng lựa chọn.',
      foot_collective:'Tập Thể', foot_articles:'Các Điều Khoản',
      foot_onedegree:'Lệch Một Độ', foot_fieldnotes:'Ghi Chép Hành Trình',
      foot_follow:'Theo dõi',
      copyright:'© 2026 Uncharted Tribe Collective · Hãy đi nơi không ai chỉ định cho bạn.'
    }
  };

  var KEY = 'utc-lang';

  function dirFor(code){
    for (var i=0;i<LANGS.length;i++) if (LANGS[i].code===code) return LANGS[i].dir;
    return 'ltr';
  }

  function apply(code){
    var dict = T[code] || T.en;
    var fallback = T.en;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      var v = dict[k] || fallback[k];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var k = el.getAttribute('data-i18n-aria');
      var v = dict[k] || fallback[k];
      if (v != null) el.setAttribute('aria-label', v);
    });
    var dir = dirFor(code);
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir', dir);
    try { localStorage.setItem(KEY, code); } catch(e){}
  }

  function stored(){
    try { var s = localStorage.getItem(KEY); if (s && T[s]) return s; } catch(e){}
    var nav = (navigator.language || 'en').slice(0,2).toLowerCase();
    return T[nav] ? nav : 'en';
  }

  function init(){
    var sel = document.getElementById('langSel');
    if (sel){
      LANGS.forEach(function(l){
        var o = document.createElement('option');
        o.value = l.code; o.textContent = l.label;
        sel.appendChild(o);
      });
      var cur = stored();
      sel.value = cur;
      apply(cur);
      sel.addEventListener('change', function(){ apply(sel.value); });
    } else {
      apply(stored());
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  w.UTCi18n = { apply: apply, langs: LANGS, strings: T };
})(window);
