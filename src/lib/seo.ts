import type { Metadata } from 'next';
import { SupportedLanguage } from '@/types/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://eagle4k.us';

const DEFAULT_LOCALE_KEYWORDS: Record<SupportedLanguage, string[]> = {
  en: [
    // 1. Irresistible Buyer Intent & High-Converting Power Keywords
    'buy IPTV subscription 2026',
    'best IPTV provider 2026',
    'buy 4K IPTV subscription USA',
    'best IPTV service USA 60fps',
    'buy IPTV subscription UK 4K',
    'best IPTV provider UK 2026',
    'buy IPTV subscription Canada 4K',
    'best IPTV service Australia 2026',
    'buy IPTV subscription Ireland',
    'buy IPTV subscription New Zealand',
    'buy IPTV Germany 4K provider',
    'buy IPTV Netherlands English channels',
    'instant IPTV activation code delivery',
    'buy IPTV instant delivery email 2 minutes',
    'buy 12 month IPTV subscription 50 discount',
    'cheap reliable 4K IPTV subscription',
    'buy IPTV trial 24h instant code',
    'top rated IPTV provider 2026',
    'best USA IPTV provider 4K',
    'buy IPTV account online with credit card',
    'buy crypto IPTV subscription bitcoin USDT',
    'IPTV subscription PayPal instant setup',
    'legit IPTV subscription provider 2026',
    'fast IPTV activation email 2 minutes',
    'renew IPTV subscription online discount',
    'best IPTV discount coupon promo code 2026',
    'IPTV annual pass subscription deal',
    'official Eagle4k IPTV store buy online',
    'exclusive IPTV flash sale offer',
    'best value IPTV subscription 2026',
    'risk free 7 day money back guarantee IPTV',
    'IPTV multi screen 2 devices 4 devices connection',
    'IPTV family package multi room discount',

    // 2. Anti-Freeze, Zero-Buffering & Ultra High Quality
    'anti freeze IPTV v9.0 technology',
    'IPTV no buffering 60fps guaranteed',
    'best IPTV without buffering live sports',
    'zero lag 4K IPTV provider CDN',
    'uncompressed 4K 60FPS IPTV video stream',
    'true 4K HDR10 Dolby Vision IPTV streams',
    'bufferless IPTV service 2026',
    'high uptime 99.99% IPTV cloud servers',
    'sub-second 0.8s fast zapping IPTV',
    'IPTV CDN load balanced edge servers 10Gbps',
    'high bitrate 4K Ultra HD IPTV server',
    'H265 HEVC low latency IPTV streaming',
    'catch-up TV 7 days replay IPTV provider',
    'IPTV EPG electronic program guide XMLTV',
    'IPTV anti ISP throttling VPN friendly',
    'IPTV with Dolby Audio 5.1 surround sound',

    // 3. Media Player Apps Compatibility Intent
    'TiviMate IPTV 4K premium subscription',
    'TiviMate Premium lifetime account IPTV',
    'IPTV Smarters Pro activation code buy',
    'IPTV Smarters Pro 2026 download login',
    'IBO Player IPTV activation 4K license',
    'Smartone IPTV activation code provider',
    'XCIPTV Player 4K premium service',
    'Smarters Player Lite 4K activation',
    'Flix IPTV activation MAC address license',
    'SET IPTV activation portal code',
    'NET IPTV activation code upload',
    'SS IPTV playlist load M3U link',
    'Room IPTV activation license 2026',
    'Bob Player IPTV activation provider',
    'Nanomid Player IPTV license buy',
    'DUPLEX IPTV alternative 2026 provider',
    'OTT Navigator IPTV setup Xtream Codes',
    'GSE Smart IPTV Pro activation provider',
    'Kodi IPTV PVR IPTV Simple Client setup',
    'Perfect Player IPTV setup M3U EPG',
    'Xtream Codes API login credentials buy',
    'M3U playlist link buy 4K VOD download',

    // 4. Hardware Streaming Devices
    'best IPTV for Amazon Firestick 4K Max 2nd Gen',
    'IPTV Fire TV Cube 4K streaming setup',
    'IPTV Fire TV Stick 4K Lite buy account',
    'IPTV for Apple TV 4K HDR 60fps',
    'IPTV for Samsung Smart TV Tizen app 2026',
    'IPTV for LG Smart TV webOS app 2026',
    'IPTV for Android TV Box Nvidia Shield Pro',
    'IPTV for Google TV Chromecast 4K with Remote',
    'IPTV for Formuler Z11 Pro Max MYTVOnline 3',
    'IPTV for Formuler Z10 Pro 4K setup',
    'IPTV for MAG 540 544 W3 set-top box portal',
    'IPTV for Xiaomi Mi Box S 2nd Gen 4K',
    'IPTV for Sony Bravia Android TV 4K',
    'IPTV for TCL Google TV 4K HDR',
    'IPTV for Hisense VIDAA TV setup',
    'IPTV for Windows PC VLC media player',
    'IPTV for MacBook macOS streaming app',
    'IPTV for iPhone iPad iOS Smarters app',

    // 5. Live Sports, PPV & Championship Tournaments
    'IPTV Premier League 4K 60fps live stream',
    'NFL Sunday Ticket IPTV provider RedZone',
    'UEFA Champions League 4K IPTV live broadcast',
    'UEFA Europa League Conference League IPTV',
    'UFC Pay-Per-View live 4K stream IPTV',
    'WWE Royal Rumble WrestleMania IPTV live',
    'Boxing PPV Fury Joshua Usyk IPTV 4K',
    'Formula 1 4K live stream F1 TV Pro IPTV',
    'MotoGP 4K live streams IPTV 60fps',
    'NBA League Pass 60fps IPTV provider',
    'MLB Extra Innings baseball IPTV stream',
    'NHL Center Ice live hockey IPTV',
    'Sky Sports TNT Sports 4K IPTV UK',
    'DAZN Eurosport ESPN+ 4K IPTV streaming',
    'PGA Tour live golf IPTV streaming',
    'Tennis Grand Slam Wimbledon US Open Roland Garros IPTV',
    'Ligue 1 4K DAZN BeIN Sports IPTV',
    'LaLiga EA Sports 4K Movistar DAZN IPTV',
    'Bundesliga Sky Sport DAZN 4K IPTV',
    'Serie A TIM 4K Sky Sport DAZN IPTV',
    'Eredivisie ESPN 4K Netherlands IPTV',
    'Super League Greece Cosmote Nova 4K IPTV',
    'CAF Champions League beIN Sports IPTV',
    'Saudi Pro League SPL SSC 4K Ronaldo IPTV',

    // 6. Content Catalog & Channels
    '60000 live TV channels IPTV 4K Ultra HD',
    '160000 VOD movies and series updated daily',
    'US local news channels ABC CBS NBC FOX 4K',
    'UK live TV entertainment channels IPTV',
    'Canadian TV channels French English IPTV',
    'Australian live TV channels sports IPTV',
    'multi-screen IPTV subscription 2 devices 4 devices',
    'family IPTV subscription multi room home',

    // 7. B2B Reseller Panel & High-Ticket Commercial
    'buy IPTV reseller panel credits',
    'best IPTV reseller panel 2026',
    'IPTV reseller panel instant credits setup',
    'Xtream Codes API IPTV reseller panel buy',
    'cheap IPTV reseller credits bulk 4K',
    'start IPTV reseller business online 2026',
    'whitelabel IPTV reseller panel master DNS',
    'IPTV reseller panel USA UK Europe Canada',
    'IPTV admin panel reseller credits high margin',
    'IPTV super master reseller panel 4K',
    'IPTV sub-reseller credits panel portal',
    'IPTV restreaming panel 4K channels high bandwidth',
    'Eagle4k IPTV reseller panel official',
    'Eagle4k IPTV subscription 2026',

    // 8. Major Metro Cities & Regional Target
    'IPTV New York Los Angeles Chicago Houston Miami',
    'IPTV Dallas Atlanta Phoenix Seattle San Francisco Boston',
    'IPTV London Manchester Birmingham Leeds Glasgow Liverpool',
    'IPTV Toronto Montreal Vancouver Calgary Ottawa Edmonton',
    'IPTV Sydney Melbourne Brisbane Perth Auckland',
  ],
  fr: [
    // 1. Mots-Clés d'Achat les Plus Attractifs (Haute Conversion 2026)
    'acheter abonnement IPTV 4K France',
    'meilleur abonnement IPTV 2026 sans coupure',
    'achat IPTV 12 mois pas cher France',
    'fournisseur IPTV 4K France fiable 2026',
    'code IPTV premium livraison rapide France',
    'acheter IPTV paiement sécurisé carte bancaire',
    'acheter IPTV Smarters Pro France instantané',
    'test IPTV gratuit 24h instantané France',
    'meilleur serveur IPTV premium France 4K',
    'renouvellement abonnement IPTV France',
    'IPTV France livraison instantanée 2 minutes',
    'abonnement IPTV officiel sans lag France',
    'comparatif meilleur abonnement IPTV France avis',
    'acheter lien M3U IPTV France 4K',
    'acheter compte Xtream Codes API France',
    'IPTV pas cher haute qualité 60fps',
    'offre flash IPTV promo 50 remise France',
    'code promo abonnement IPTV 2026 France',
    'meilleure offre abonnement IPTV France 1 an',
    'serveur IPTV numéro 1 en France sans freeze',
    'garantie satisfait ou remboursé 7 jours IPTV',
    'IPTV multi écran 2 appareils simultanés France',
    'acheter IPTV Suisse romande Genève Lausanne',
    'acheter IPTV Belgique francophone Bruxelles Liège',
    'acheter IPTV Canada Québec Montréal 4K',
    'IPTV discount promotion réduction France',
    'meilleur site IPTV fiable confiance France',
    'acheter code abonnement IPTV 1 an France',

    // 2. Anti-Freeze, Sans Coupure & Haute Performance
    'IPTV sans coupure ni freeze 2026',
    'technologie anti freeze v9.0 IPTV',
    'IPTV 60fps sans buffering sport direct',
    'serveur IPTV ultra stable 99.99% uptime',
    'IPTV zapping ultra rapide 0.8 seconde',
    'IPTV 4K Ultra HD vrai débit non compressé',
    'flux IPTV direct sans décalage temps réel',
    'IPTV compatible VPN NordVPN ExpressVPN Surfshark',
    'IPTV replay 7 jours catch-up TV France',
    'guide des programmes EPG complet IPTV France',
    'qualité audio Dolby Digital 5.1 IPTV France',

    // 3. Applications & Matériel Compatible
    'TiviMate IPTV 4K France abonnement licence',
    'IPTV Smarters Pro France 4K code activation',
    'IBO Player IPTV France activation licence',
    'Smartone IPTV France activation code',
    'Flix IPTV activation MAC France',
    'SET IPTV activation France',
    'NET IPTV activation France',
    'SS IPTV liste M3U France',
    'XCIPTV Player France 4K abonnement',
    'Smarters Player Lite iOS France',
    'IPTV pour Firestick Amazon 4K Max France',
    'IPTV Fire TV Cube 4K France installer',
    'IPTV Smart TV Samsung Tizen 2026 France',
    'IPTV Smart TV LG webOS 2026 France',
    'boîtier IPTV 4K France Android TV Nvidia Shield',
    'IPTV Apple TV iOS 4K France',
    'IPTV Formuler Z11 Pro Max Z10 MAG France',
    'IPTV Xiaomi Mi Box S TV Stick 4K France',
    'IPTV pour PC Windows Mac VLC France',

    // 4. Chaînes, Football & Sports en Direct
    'IPTV France Ligue 1 McDonald 4K 60fps direct',
    'IPTV France Ligue des Champions UEFA 4K',
    'IPTV France Ligue Europa Conference 4K',
    'IPTV Canal Plus RMC Sport BeIN Sports DAZN 4K',
    'IPTV Eurosport Prime Video Ligue 1 France',
    'IPTV France Formule 1 GP 4K en direct F1',
    'IPTV France MotoGP live streaming 4K',
    'IPTV France Top 14 Rugby 4K direct',
    'IPTV France PPV UFC boxe 4K direct',
    'IPTV Roland Garros Tour de France 4K direct',
    'IPTV bouquet français complet TF1 M6 Canal Plus OCS',
    'IPTV 60000 chaînes direct et 160000 films séries VOD',
    'IPTV cinema francais et international 4K VF VOSTFR',

    // 5. Villes de France & Régions Francophones (Hyper-Localisé)
    'IPTV Paris 4K abonnement sans coupure',
    'IPTV Marseille 4K abonnement',
    'IPTV Lyon 4K abonnement',
    'IPTV Toulouse 4K abonnement',
    'IPTV Nice Cote d Azur 4K',
    'IPTV Nantes 4K abonnement',
    'IPTV Montpellier 4K abonnement',
    'IPTV Strasbourg 4K abonnement',
    'IPTV Bordeaux 4K abonnement',
    'IPTV Lille 4K abonnement',
    'IPTV Rennes Reims Saint-Etienne Toulon Le Havre',
    'IPTV Grenoble Dijon Angers Nimes Brest Tours',
    'IPTV Clermont-Ferrand Amiens Annecy Perpignan Rouen',
    'IPTV Normandie Bretagne Alsace Grand Est Occitanie',
    'IPTV Provence Alpes Cote d Azur Auvergne Rhone Alpes',
    'IPTV Dom Tom Guadeloupe Martinique Réunion Guyane Mayotte',
    'IPTV Belgique Bruxelles Charleroi Liège Namur Mons',
    'IPTV Suisse Genève Lausanne Fribourg Neuchâtel Valais',
    'IPTV Canada Québec Montréal Laval Gatineau',

    // 6. Panneau Revendeur B2B / Reseller Gros & Détail
    'panel IPTV revendeur France officiel',
    'acheter panel IPTV reseller France crédits',
    'meilleur panel IPTV revendeur 4K sans coupure 2026',
    'achat crédits panel IPTV revendeur France gros',
    'devenir revendeur IPTV France panel 4K',
    'panel IPTV Xtream Codes API France DNS personnalisé',
    'panneau revendeur IPTV Smarters TiviMate France',
    'panel IPTV pas cher crédits illimités 2026',
    'panneau super master reseller IPTV France',
    'créer son entreprise IPTV revendeur France',
    'tarifs crédits panel IPTV revendeur France',
    'Eagle4k IPTV France officiel',
  ],
  es: [
    // 1. Palabras Clave de Compra Más Atractivas (Alta Conversión 2026)
    'comprar suscripcion IPTV 4K España',
    'el mejor IPTV de España sin cortes 2026',
    'comprar IPTV estable 12 meses barato España',
    'comprar codigo IPTV Smarters Pro España',
    'prueba IPTV gratis 24 horas instantanea España',
    'proveedor IPTV España barato y fiable 2026',
    'mejor servicio IPTV España 60fps estable',
    'comprar IPTV con tarjeta de credito seguro',
    'comprar IPTV con Bizum o PayPal España',
    'suscripcion IPTV 4K entrega inmediata email',
    'renovar suscripcion IPTV España descuento',
    'comprar lista M3U IPTV España 4K VOD',
    'comprar credenciales Xtream Codes IPTV España',
    'oferta flash suscripcion IPTV descuento 50 España',
    'codigo promocional IPTV España 2026',
    'garantia 100 devolucion dinero 7 dias IPTV España',
    'IPTV multipantalla 2 dispositivos simultaneos España',
    'el servidor IPTV mas estable de España numero 1',
    'comprar IPTV Mexico Colombia Argentina Chile 4K',
    'descuento codigo promocional suscripcion IPTV España',
    'mejor servidor IPTV premium España 4K',

    // 2. Anti-Freeze y Rendimiento
    'IPTV sin cortes ni buffering 2026 España',
    'servidor IPTV estable anti congelacion v9.0',
    'IPTV 4K 60fps deportes en vivo sin lag',
    'cambio rapido de canal IPTV zapping 0.8s',
    'IPTV 99.99% uptime servidores dedicados CDN',
    'IPTV compatible con VPN España',
    'guia de programacion EPG y reproduccion en diferido',

    // 3. Dispositivos y Aplicaciones
    'IPTV para Amazon Firestick 4K Max España',
    'IPTV para Smart TV Samsung Tizen LG webOS España',
    'TiviMate IPTV 4K premium España licencia',
    'IPTV Smarters Pro activacion España codigo',
    'IBO Player IPTV activacion España',
    'Smartone IPTV España codigo activacion',
    'Flix IPTV activacion España',
    'XCIPTV Player 4K España suscripcion',
    'IPTV para Android TV Box Xiaomi Nvidia Shield',
    'IPTV Apple TV iOS iPhone iPad España',
    'IPTV para Formuler Z11 MAG España',
    'IPTV para PC Windows y Mac VLC',

    // 4. Deportes en Directo y Canales
    'IPTV LaLiga EA Sports 4K España directo',
    'IPTV LaLiga Hypermotion Segunda Division',
    'IPTV Champions League 4K en directo UEFA',
    'IPTV Movistar Plus DAZN Eurosport España',
    'IPTV Formula 1 F1 y MotoGP 4K España',
    'IPTV UFC PPV boxeo en directo 4K España',
    'IPTV Premier League NBA ACB baloncesto España',
    '60000 canales en vivo y 160000 peliculas series VOD',
    'IPTV canales de España canales autonomicos internacionales',

    // 5. Ciudades y Regiones de España y Latinoamérica
    'IPTV Madrid Barcelona Valencia Sevilla Zaragoza Malaga',
    'IPTV Murcia Palma de Mallorca Las Palmas Bilbao Alicante',
    'IPTV Cordoba Valladolid Vigo Gijon Granada Vitoria',
    'IPTV Andalucia Cataluña Madrid Comunidad Valenciana Galicia',
    'IPTV Mexico DF Guadalajara Monterrey Bogota Medellin',
    'IPTV Buenos Aires Santiago de Chile Lima Quito',

    // 6. Panel Revendedor B2B
    'comprar panel IPTV reseller españa oficial',
    'el mejor panel revendedor IPTV 4K españa 2026',
    'comprar creditos panel IPTV revendedor sin cortes',
    'panel revendedor IPTV Xtream Codes españa DNS',
    'ser revendedor IPTV panel 4K negocio rentable',
    'panel sub revendedor IPTV España',
    'Eagle4k IPTV España oficial',
  ],
  nl: [
    // 1. Meest Aantrekkelijke Koopintentie Zoekwoorden (2026)
    'IPTV kopen Nederland 2026',
    'beste 4K IPTV provider Nederland',
    'goedkoop 12 maanden IPTV abonnement Nederland',
    'IPTV abonnement kopen zonder buffering',
    'gratis 24u IPTV proefperiode direct Nederland',
    'beste IPTV server Nederland Belgie 60fps',
    'IPTV Smarters Pro activatie code Nederland',
    'IPTV kopen met iDEAL en creditcard',
    'betrouwbare IPTV aanbieder Nederland 2026',
    'IPTV directe levering per e-mail in 2 minuten',
    'IPTV M3U playlist kopen 4K Nederland',
    'Xtream Codes API IPTV kopen Nederland',
    'exclusieve IPTV aanbieding 50 procent korting',
    'IPTV kortingscode actie Nederland 2026',
    '7 dagen niet goed geld terug garantie IPTV',
    'IPTV multiroom 2 schermen tegelijk kijken',
    'IPTV abonnement verlengen Nederland korting',
    'beste IPTV test ervaringen Nederland review',

    // 2. Anti-Freeze & Stabiliteit
    'IPTV zonder haperingen of buffering 2026',
    'Anti Freeze v9.0 IPTV server Nederland',
    'stabiele 4K 60fps IPTV stream hoge bitrate',
    'snelle zaptijd 0.8s IPTV kanalen',
    '99.99% uptime gegarandeerde IPTV servers',
    'IPTV met TV gids EPG en 7 dagen terugkijken',
    'IPTV VPN vriendelijk NordVPN ExpressVPN',

    // 3. Apparaten & Apps
    'IPTV kopen voor Amazon Firestick 4K Max Nederland',
    'IPTV Smart TV Samsung Tizen LG webOS Nederland',
    'TiviMate IPTV 4K Nederland premium account',
    'IPTV Smarters Pro Nederland activatie code',
    'IBO Player IPTV Nederland activatie',
    'Smartone IPTV Nederland code',
    'Flix IPTV activatie Nederland',
    'IPTV Android TV Box Nvidia Shield Formuler Z11',
    'IPTV Apple TV iOS iPhone iPad Nederland',
    'IPTV Chromecast met Google TV 4K',

    // 4. Sporten & Zenders
    'IPTV Eredivisie live 4K Nederland Viaplay ESPN',
    'IPTV Formule 1 F1 Viaplay 4K Max Verstappen',
    'IPTV Champions League en Premier League 4K',
    'IPTV Ziggo Sport ESPN 4K Nederland',
    'IPTV UFC PPV vechtsporten Glory Kickboxing live',
    'IPTV Darts PDC live streaming 4K',
    '60000 live tv zenders en 160000 VOD films series',
    'Nederlandse zenders NPO RTL SBS ESPN in 4K',

    // 5. Steden & Regio's
    'IPTV Amsterdam Rotterdam Den Haag Utrecht Eindhoven',
    'IPTV Tilburg Groningen Breda Nijmegen Enschede Haarlem',
    'IPTV Vlaanderen Belgie Antwerpen Gent Brugge Leuven',

    // 6. B2B Reseller Panel
    'IPTV reseller panel kopen Nederland 2026',
    'IPTV reseller credits kopen zonder buffering',
    'beste IPTV reseller paneel Nederland België',
    'Eagle4k IPTV Nederland',
  ],
  ar: [
    // 1. الكلمات الأكثر جاذبية وتحفيزاً للشراء (2026)
    'شراء افضل اشتراك IPTV 4K بدون تقطيع 2026',
    'اشتراك IPTV ممتاز 12 شهر بث مباشر 4K',
    'ارخص اشتراك IPTV 4K عالي الثبات والجودة',
    'كود تفعيل IPTV Smarters Pro فوري',
    'تجربة IPTV مجانية 24 ساعة فورية للتأكد',
    'موقع شراء اشتراك IPTV مضمون وسريع الدفع',
    'اشتراك IPTV لجميع الشاشات و Firestick و TiviMate',
    'شراء اشتراك سيرفر IPTV للقنوات المشفرة',
    'سيرفر IPTV سريع وثابت للمباريات الكبرى',
    'تجديد اشتراك IPTV فوري عبر البريد',
    'شراء سيرفر Xtream Codes و M3U أصلي 4K',
    'اشتراك IPTV الدفع ببطاقة مدى وفيزا وماستركارد وباي بال',
    'اشتراك IPTV بالعملات الرقمية USDT و Bitcoin',
    'عرض حصري اشتراك IPTV خصم 50 بالمئة 2026',
    'كود خصم اشتراك IPTV سنوي بافضل سعر',
    'اشتراك IPTV مضمون بدون تقطيع مع ضمان استرجاع 7 ايام',
    'اشتراك IPTV لشاشتين وجهازين بنفس الوقت',
    'سيرفر IPTV رقم 1 في الشرق الاوسط والخليج',

    // 2. تقنية منع التقطيع والثبات
    'سيرفر IPTV بدون تقطيع نهائياً 60fps',
    'تقنية Anti Freeze v9.0 لمنع التوقف أثناء المباريات الكبرى',
    'سيرفرات IPTV سريعة التنقل والتبديل أقل من 0.8 ثانية',
    'جودة 4K حقيقية بدون ضغط أو تشويش أو تأخير',
    'ثبات 99.99% سيرفرات سحابية موزعة CDN عالمية',
    'دعم تشغيل VPN لتخطي حجب شركات الاتصالات',
    'دليل القنوات الإلكتروني EPG مع خاصية الإعادة 7 أيام',

    // 3. الأجهزة والتطبيقات
    'اشتراك IPTV لجهاز Amazon Firestick 4K Max',
    'اشتراك IPTV لشاشات سامسونج وال جي الذكية 2026',
    'تفعيل برنامج TiviMate IPTV 4K بريميوم أصلي',
    'كود تفعيل تطبيق IPTV Smarters Pro 2026',
    'تفعيل برنامج IBO Player و Smartone IPTV و Flix IPTV',
    'اشتراك IPTV لأجهزة Android TV Box و Nvidia Shield',
    'اشتراك IPTV لأجهزة Formuler Z11 Pro و MAG',
    'اشتراك IPTV لأجهزة Apple TV و iPhone و iPad',
    'اشتراك IPTV للكمبيوتر واللابتوب VLC',

    // 4. البطولات والرياضة والقنوات
    'اشتراك IPTV لمشاهدة الدوري الإنجليزي الممتاز 4K',
    'بث مباشر مباريات دوري أبطال أوروبا 4K بدون تقطيع',
    'مشاهدة قنوات beIN Sports و SSC بجودة 4K 60fps',
    'بث مباشر مباريات الدوري الإسباني والإيطالي والألماني',
    'مشاهدة نزالات UFC والملاكمة العالمية ومصارعة WWE',
    'بث مباشر سباقات الفورمولا 1 وموتو جي بي 4K',
    'مشاهدة دوري روشن السعودي للمحترفين 4K',
    'أكثر من 60000 قناة مباشرة و 160000 فيلم ومسلسل مترجم',
    'باقة القنوات العربية الشاملة OSN و Shahid و beIN',

    // 5. الدول والمناطق
    'اشتراك IPTV السعودية الرياض جدة الدمام مكة المدينة',
    'اشتراك IPTV الإمارات دبي أبوظبي الشارقة عجمان',
    'اشتراك IPTV الكويت قطر الدوحة البحرين المنامة عمان مسقط',
    'اشتراك IPTV مصر القاهرة الإسكندرية',
    'اشتراك IPTV المغرب الدار البيضاء الرباط الجزائر تونس',
    'اشتراك IPTV أمريكا وكندا وبريطانيا وأوروبا للمغتربين 4K',
    'اشتراك IPTV فرنسا وألمانيا وهولندا وإسبانيا والسويد',

    // 6. لوحات الموزعين B2B
    'شراء لوحة IPTV reseller موزع رسمي 2026',
    'افضل بنل IPTV ريسيلر كريديت بدون تقطيع',
    'شراء رصيد كروت بنل IPTV موزع معتمد بسعر الجملة',
    'لوحة تحكم IPTV Xtream Codes موزع فوري DNS خاص',
    'لوحة سوبر ماستر ريسيلر IPTV',
    'Eagle4k IPTV اشتراك رسمي',
  ],
};

interface SEOOptions {
  locale: SupportedLanguage;
  path: string; // e.g. "", "/blog", "/blog/my-post", "/contact"
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  availableLocales?: SupportedLanguage[];
}

export function generateLocalizedMetadata({
  locale,
  path,
  title,
  description,
  keywords = [],
  ogImage = '/icon-512.png',
  availableLocales = ['en', 'fr', 'nl', 'ar', 'es'],
}: SEOOptions): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === '/' ? '' : cleanPath}`;

  // Build hreflang object
  const languageAlternates: Record<string, string> = {};
  availableLocales.forEach((lang) => {
    languageAlternates[lang] = `${SITE_URL}/${lang}${cleanPath === '/' ? '' : cleanPath}`;
  });
  languageAlternates['x-default'] = `${SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`;

  // Combine custom keywords with high-ranking locale defaults
  const baseKeywords = DEFAULT_LOCALE_KEYWORDS[locale] || DEFAULT_LOCALE_KEYWORDS.en;
  const mergedKeywords = Array.from(new Set([...keywords, ...baseKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Eagle4k IPTV',
      locale: locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : locale === 'nl' ? 'nl_NL' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`],
    },
  };
}

/**
 * Generates JSON-LD Structured Data Schema for Product & Service Rich Snippets in Google SERP
 */
export function generateProductJsonLd(locale: SupportedLanguage = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Eagle4k Premium 4K IPTV Subscription 2026',
    image: `${SITE_URL}/icon-512.png`,
    description: 'High-speed 4K Ultra HD IPTV subscription service with 60,000+ live channels and 160,000+ VOD movies. Zero buffering Anti-Freeze 9.0 technology for Firestick, Smart TV & TiviMate.',
    brand: {
      '@type': 'Brand',
      name: 'Eagle4k IPTV',
    },
    sku: 'EAGLE4K-SUB-2026',
    mpn: 'EAGLE4K-4K-PRO',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      reviewCount: '14280',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '11.99',
      highPrice: '55.99',
      offerCount: '4',
      offers: [
        {
          '@type': 'Offer',
          name: '1 Month 4K IPTV Subscription',
          price: '11.99',
          priceCurrency: 'USD',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: `${SITE_URL}/${locale}`,
          seller: {
            '@type': 'Organization',
            name: 'Eagle4k IPTV',
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'US',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 7,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
          },
        },
        {
          '@type': 'Offer',
          name: '3 Months 4K IPTV Subscription',
          price: '23.99',
          priceCurrency: 'USD',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: `${SITE_URL}/${locale}`,
          seller: {
            '@type': 'Organization',
            name: 'Eagle4k IPTV',
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'US',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 7,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
          },
        },
        {
          '@type': 'Offer',
          name: '6 Months 4K IPTV Subscription',
          price: '32.99',
          priceCurrency: 'USD',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: `${SITE_URL}/${locale}`,
          seller: {
            '@type': 'Organization',
            name: 'Eagle4k IPTV',
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'US',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 7,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
          },
        },
        {
          '@type': 'Offer',
          name: '12 Months 4K IPTV VIP Subscription (Best Deal)',
          price: '55.99',
          priceCurrency: 'USD',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: `${SITE_URL}/${locale}`,
          seller: {
            '@type': 'Organization',
            name: 'Eagle4k IPTV',
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'US',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 7,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
          },
        },
      ],
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eagle4k IPTV',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: [
      'https://t.me/eagle4k',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'French', 'Dutch', 'Arabic', 'Spanish'],
    },
  };
}

/**
 * Generates Schema.org FAQPage Structured Data for Google Rich Snippets in SERPs
 */
export function generateFaqJsonLd(locale: SupportedLanguage = 'en') {
  const faqData: Record<SupportedLanguage, Array<{ q: string; a: string }>> = {
    en: [
      {
        q: 'Why is Eagle4k rated the best 4K IPTV provider in 2026?',
        a: 'Eagle4k operates dedicated CDN edge nodes with Anti Freeze v9.0 load balancing. We offer 60,000+ live TV channels and 160,000+ VOD movies in true 4K 60FPS at the lowest market price with 99.99% uptime.',
      },
      {
        q: 'Is this IPTV subscription compatible with Firestick, TiviMate & IPTV Smarters Pro?',
        a: 'Yes! Eagle4k works natively on Amazon Firestick 4K Max, Android TV, Samsung & LG Smart TVs, Apple TV, MAG boxes, and Formuler. We support TiviMate, IPTV Smarters Pro, IBO Player, and XCIPTV via Xtream Codes API and M3U playlist.',
      },
      {
        q: 'How fast will I receive my IPTV subscription details after ordering?',
        a: 'Your subscription activation is automated. As soon as payment is confirmed, your Xtream Codes API login credentials and M3U playlist URL are displayed on screen and emailed to you within 2 minutes.',
      },
      {
        q: 'Do I need a VPN for IPTV streaming?',
        a: 'No, a VPN is not required. However, Eagle4k is 100% VPN friendly and compatible with NordVPN, ExpressVPN, Surfshark, and all major providers for maximum security and ISP throttle bypass.',
      },
      {
        q: 'What internet speed is required for 4K 60FPS streaming?',
        a: 'For 1080p Full HD streams, a minimum speed of 15 Mbps is recommended. For 4K Ultra HD 60FPS live sports and VOD movies, we recommend a connection of 30+ Mbps.',
      },
      {
        q: 'What is your refund policy?',
        a: 'We offer a 7-day risk-free money back guarantee. If you experience technical issues our 24/7 VIP support team cannot resolve, we provide a full 100% refund.',
      },
    ],
    fr: [
      {
        q: 'Pourquoi Eagle4k est le meilleur fournisseur IPTV 4K en 2026 ?',
        a: 'Eagle4k utilise des serveurs CDN dédiés avec technologie Anti Freeze v9.0. Nous offrons plus de 60 000 chaînes en direct et 160 000 films et séries VOD en 4K 60FPS sans coupure avec 99.99% de disponibilité.',
      },
      {
        q: 'Cet abonnement IPTV est-il compatible avec Firestick, TiviMate et IPTV Smarters Pro ?',
        a: 'Oui, Eagle4k fonctionne parfaitement sur Amazon Firestick 4K, Android TV, Smart TV Samsung et LG, Apple TV, boîtiers MAG et Formuler avec TiviMate, IPTV Smarters Pro et IBO Player via Xtream Codes API et M3U.',
      },
      {
        q: 'En combien de temps reçois-je mes identifiants après commande ?',
        a: 'L activation est instantanée et automatisée. Vos identifiants Xtream Codes API et lien M3U s affichent sur votre écran et vous sont envoyés par email en moins de 2 minutes.',
      },
      {
        q: 'Ai-je besoin d un VPN pour regarder l IPTV ?',
        a: 'Non, aucun VPN n est obligatoire. Cependant, Eagle4k est 100% compatible avec tous les VPN (NordVPN, ExpressVPN, Surfshark) si vous souhaitez sécuriser votre connexion.',
      },
      {
        q: 'Quel débit internet est requis pour la 4K 60FPS ?',
        a: 'Pour le Full HD 1080p, 15 Mbps suffisent. Pour la 4K Ultra HD 60FPS en direct lors des grands événements sportifs, nous recommandons une connexion stable de 30 Mbps ou plus.',
      },
      {
        q: 'Quelle est votre politique de remboursement ?',
        a: 'Nous offrons une garantie satisfait ou remboursé de 7 jours. Si un problème technique ne peut être résolu par notre support VIP 24/7, vous êtes remboursé à 100%.',
      },
    ],
    es: [
      {
        q: '¿Por qué Eagle4k es el mejor proveedor de IPTV 4K en 2026?',
        a: 'Eagle4k cuenta con servidores CDN dedicados y tecnología Anti Freeze v9.0. Ofrecemos más de 60.000 canales en vivo y 160.000 películas y series VOD en 4K 60FPS sin cortes con 99.99% de disponibilidad.',
      },
      {
        q: '¿Es compatible con Firestick, TiviMate e IPTV Smarters Pro?',
        a: 'Sí, funciona perfectamente en Amazon Firestick 4K Max, Android TV, Smart TV Samsung y LG, Apple TV y cajas MAG a través de Xtream Codes API y listas M3U.',
      },
      {
        q: '¿Cuánto tiempo tarda la activación tras la compra?',
        a: 'La activación es instantánea y automática. Recibirá sus credenciales de acceso y enlace M3U en pantalla y por correo electrónico en menos de 2 minutos.',
      },
      {
        q: '¿Qué velocidad de internet se necesita para 4K 60FPS?',
        a: 'Recomendamos un mínimo de 15 Mbps para Full HD y 30+ Mbps para canales deportivos en 4K Ultra HD 60FPS sin interrupciones.',
      },
      {
        q: '¿Cuál es la política de reembolso?',
        a: 'Ofrecemos una garantía de devolución de dinero sin riesgo de 7 días con soporte VIP 24/7.',
      },
    ],
    nl: [
      {
        q: 'Waarom is Eagle4k de beste 4K IPTV provider van 2026?',
        a: 'Eagle4k beschikt over dedicated CDN-servers met Anti Freeze v9.0 load balancing. We bieden 60.000+ live zenders en 160.000+ VOD films in echte 4K 60FPS met 99.99% uptime.',
      },
      {
        q: 'Is het abonnement compatibel met Firestick, TiviMate en IPTV Smarters Pro?',
        a: 'Ja! Eagle4k werkt uitstekend op Amazon Firestick 4K, Android TV, Samsung en LG Smart TV, Apple TV en Formuler via Xtream Codes API en M3U playlists.',
      },
      {
        q: 'Hoe snel ontvang ik mijn inloggegevens na aankoop?',
        a: 'De activatie verloopt automatisch. Binnen 2 minuten na betaling ontvangt u uw Xtream Codes inloggegevens en M3U URL op het scherm en per e-mail.',
      },
      {
        q: 'Welke internetsnelheid is nodig voor 4K 60FPS streaming?',
        a: 'Voor Full HD 1080p adviseren we 15 Mbps. Voor 4K Ultra HD 60FPS live sportwedstrijden adviseren we een verbinding van 30+ Mbps.',
      },
    ],
    ar: [
      {
        q: 'لماذا يعتبر Eagle4k أفضل سيرفر IPTV بدقة 4K في 2026؟',
        a: 'يعتمد سيرفر Eagle4k على تقنية Anti Freeze v9.0 لمنع التقطيع مع خوادم CDN فائقة السرعة، حيث يوفر أكثر من 60,000 قناة مباشرة و160,000 فيلم ومسلسل VOD بأعلى ثبات 99.99%.',
      },
      {
        q: 'هل الاشتراك متوافق مع Firestick و TiviMate و IPTV Smarters Pro؟',
        a: 'نعم! يعمل الاشتراك بسلاسة على شاشات Smart TV وسامسونج وLG وAmazon Firestick وأجهزة Android TV وApple TV عبر بيانات Xtream Codes API وروابط M3U.',
      },
      {
        q: 'كم يستغرق استلام بيانات الاشتراك بعد الدفع؟',
        a: 'التفعيل فوري وتلقائي بنسبة 100%. تظهر بيانات الدخول فوراً على الشاشة وتصل إلى بريدك الإلكتروني في أقل من دقيقتين.',
      },
      {
        q: 'ما هي سرعة الإنترنت المطلوبة لتشغيل قنوات 4K بدون تقطيع؟',
        a: 'ننصح بسرعة لا تقل عن 15 ميجابت للقنوات العالية الدقة، و30+ ميجابت لقنوات 4K 60FPS والمباريات المباشرة لضمان ثبات كامل.',
      },
      {
        q: 'ما هي سياسة الاسترجاع والضمان؟',
        a: 'نقدم ضمان استرجاع كامل للمبلغ لمدة 7 أيام في حال واجهتكم أي مشكلة تقنية لم يتمكن فريق دعم VIP 24/7 من حلها.',
      },
    ],
  };

  const selectedFaqs = faqData[locale] || faqData.en;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: selectedFaqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Eagle4k IPTV',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/en/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}


