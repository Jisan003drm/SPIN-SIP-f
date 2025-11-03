// Full site script (extracted from index.html)
const translations = {
    en: {
        'brand.name': 'Spin & Sip',
        'brand.tagline': 'Cafe + Laundry — coffee while you wait',
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.menu': 'Menu',
        'nav.prices': 'Prices',
        'nav.contact': 'Contact',
        'hero.title': 'Clean clothes. Great coffee. No waiting.',
        'hero.lead': 'Drop off your laundry, grab a seat, and enjoy our signature coffee while we take care of the rest. Fast service, honest prices.',
        'how.title': 'How it works',
        'how.step1.title':'Drop clothes','how.step1.text':'Bring your laundry to the counter or request pickup.',
        'how.step2.title':'Relax & sip','how.step2.text':'Enjoy coffee or snacks in our cozy cafe while we work.',
        'how.step3.title':'Collect or deliver','how.step3.text':'Pick up in-store or get your clothes delivered fresh and folded.',
        'services.title':'Our Services',
        'services.wash.title':'Wash & Fold','services.wash.text':'Everyday laundry handled with care.',
        'services.express.title':'Express Service','services.express.text':'Ready same day for those in a hurry.',
        'services.dry.title':'Dry Cleaning','services.dry.text':'Professional care for delicate items.',
        'services.cafe.title':'Coffee & Snacks','services.cafe.text':'Locally roasted blends and light bites.',
        'booking.title':'Quick Booking','booking.name':'Name','booking.phone':'Phone','booking.service':'Service','booking.opt.wash':'Wash & Fold','booking.opt.express':'Express','booking.opt.dry':'Dry Clean','booking.time':'Preferred time','booking.submit':'Request Pickup',
        'menu.title':'Menu highlights','menu.latte.title':'Signature Latte','menu.latte.text':'Rich, creamy, and house-roasted.','menu.cold.title':'Cold Brew','menu.cold.text':'Slow-steeped for a smooth finish.','menu.pastry.title':'Pastry Box','menu.pastry.text':'Perfect pairing with your coffee.',
        'testimonials.title':'What customers say','testimonials.quote':'"Fast, friendly and the coffee is amazing — highly recommend!" — A. Tan',
        'locations.title':'Find us','locations.address':'Bangi outlet — Jalan Reko — Open 8am–8pm',
        'prices.title':'Prices','prices.wash':'Wash & Fold','prices.express':'Express Service','prices.dry':'Dry Cleaning','prices.coffee':'Coffee (Latte)',
    'prices.shirt':'Shirt Press','prices.blanket':'Blanket / Comforter',
        'login.title':'Login','login.submit':'Sign in',
    'contact.title':'Contact','contact.info':'Call us at +60 12-345 6789 or drop by during opening hours.','contact.submit':'Send message',
    'contact.uploading':'Uploading...','contact.thanks.upload':'Thanks — we received your message and attachment.','contact.uploadError':'Upload failed. Please try again later.',
    'booking.thanks':'Thanks — we received your pickup request.','contact.thanks':'Thanks — we received your message. We will be in touch shortly.'
    },
    bn: {
        'brand.name': 'স্পিন & সিপ',
        'brand.tagline': 'ক্যাফে + লন্ড্রি — অপেক্ষা করার সময় কফি উপভোগ করুন',
        'nav.home': 'হোম','nav.services': 'সেবা','nav.menu': 'মেনু','nav.prices': 'মূল্য','nav.contact': 'যোগাযোগ',
        'hero.title': 'পরিষ্কার কাপড়। দুর্দান্ত কফি। অপেক্ষা নেই।','hero.lead': 'আপনার কাপড় জমা দিন, একটি সিট নিন, এবং আমাদের স্বাক্ষর কফি উপভোগ করুন। দ্রুত সেবা, সৎ মূল্য।',
        'how.title': 'কিভাবে কাজ করে','how.step1.title':'কাপড় দিন','how.step1.text':'আপনার লন্ড্রি কাউন্টারে দিন অথবা পিকআপ অনুরোধ করুন।',
        'how.step2.title':'আরাম করুন & সিপ করুন','how.step2.text':'আমাদের আরামদায়ক ক্যাফেতে কফি বা স্ন্যাকস উপভোগ করুন।',
        'how.step3.title':'সংগ্রহ করুন বা ডেলিভারি নিন','how.step3.text':'স্টোরে নিয়ে নিন অথবা আপনার কাপড় ডেলিভারী হিসেবে পান।',
        'services.title':'আমাদের সেবা','services.wash.title':'ওয়াশ & ফোল্ড','services.wash.text':'দৈনন্দিন লন্ড্রি যত্নসহ হ্যান্ডেল করা হয়।',
        'services.express.title':'এক্সপ্রেস সার্ভিস','services.express.text':'জরুরি হলে একই দিনে প্রস্তুত।','services.dry.title':'ড্রায় ক্লিনিং','services.dry.text':'নাজুক বস্তুর জন্য পেশাদার যত্ন।',
        'services.cafe.title':'কফি & স্ন্যাকস','services.cafe.text':'স্থানীয়ভাবে রোস্ট করা কফি এবং হালকা খাবার।',
        'booking.title':'দ্রুত বুকিং','booking.name':'নাম','booking.phone':'ফোন','booking.service':'সেবা','booking.opt.wash':'ওয়াচ & ফোল্ড','booking.opt.express':'এক্সপ্রেস','booking.opt.dry':'ড্রায় ক্লিন','booking.time':'পছন্দসই সময়','booking.submit':'পিকআপ অনুরোধ',
        'menu.title':'মেনু হাইলাইট','menu.latte.title':'সিগনেচার লাটে','menu.latte.text':'সমৃদ্ধ, ক্রিমি এবং হাউস-রোস্টেড।','menu.cold.title':'কোল্ড ব্রিউ','menu.cold.text':'মসৃণ ফিনিশের জন্য ধীরে ধীরে স্টিপ করা।','menu.pastry.title':'পেস্ট্রি বক্স','menu.pastry.text':'আপনার কফির সাথে নিখুঁত জুটি।',
        'testimonials.title':'গ্রাহকদের মতামত','testimonials.quote':'"দ্রুত, বন্ধুত্বপূর্ণ এবং কফি অসাধারণ — অত্যন্ত সুপারিশ করছি!" — A. Tan',
        'locations.title':'আমাদের খুঁজুন','locations.address':'বাঙ্গি আউটলেট — Jalan Reko — খোলা 8am–8pm',
        'prices.title':'মূল্য','prices.wash':'ওয়াশ & ফোল্ড','prices.express':'এক্সপ্রেস সার্ভিস','prices.dry':'ড্রায় ক্লিনিং','prices.coffee':'কফি (লাটে)',
    'prices.shirt':'শার্ট প্রেস','prices.blanket':'কম্বল / কনফর্টার',
    'login.title':'লগইন','login.submit':'সাইন ইন','contact.title':'যোগাযোগ','contact.info':'আমাদের কল করুন +60 12-345 6789 অথবা কার্যকালের মধ্যে কফে-শপে আসুন।','contact.submit':'বার্তা পাঠান',
    'contact.uploading':'আপলোড করা হচ্ছে...','contact.thanks.upload':'ধন্যবাদ — আমরা আপনার বার্তা এবং সংযুক্তি পেয়েছি।','contact.uploadError':'আপলোড ব্যর্থ। পরে আবার চেষ্টা করুন।',
    'booking.thanks':'ধন্যবাদ — আমরা আপনার পিকআপ অনুরোধ পেয়েছি।','contact.thanks':'ধন্যবাদ — আমরা আপনার বার্তা পেয়েছি। শীঘ্রই আমরা যোগাযোগ করব।'
    },
    ms: {
        'brand.name': 'Spin & Sip','brand.tagline': 'Cafe + Laundry — coffee while you wait','nav.home': 'Utama','nav.services': 'Perkhidmatan','nav.menu': 'Menu','nav.prices': 'Harga','nav.contact': 'Hubungi',
        'hero.title': 'Pakaian bersih. Kopi bagus. Tiada menunggu.','hero.lead': 'Hantar dobi anda, duduk, dan nikmati kopi istimewa kami sementara kami uruskan yang selebihnya. Perkhidmatan pantas, harga jujur.',
        'how.title': 'Cara ia berfungsi','how.step1.title':'Hantar pakaian','how.step1.text':'Bawa dobi anda ke kaunter atau minta pengambilan.','how.step2.title':'Berehat & minum','how.step2.text':'Nikmati kopi atau snek di kafe kami yang selesa.','how.step3.title':'Ambil atau hantar','how.step3.text':'Ambil di kedai atau terima pakaian anda dihantar bersih dan dilipat.',
        'services.title':'Perkhidmatan Kami','services.wash.title':'Cuci & Lipat','services.wash.text':'Dobi harian dikendalikan dengan teliti.','services.express.title':'Perkhidmatan Ekspres','services.express.text':'Sedia pada hari yang sama untuk yang tergesa-gesa.','services.dry.title':'Cuci Kering','services.dry.text':'Penjagaan profesional untuk item halus.','services.cafe.title':'Kopi & Snek','services.cafe.text':'Campuran panggang tempatan dan makanan ringan.',
        'booking.title':'Tempahan Pantas','booking.name':'Nama','booking.phone':'Telefon','booking.service':'Perkhidmatan','booking.opt.wash':'Cuci & Lipat','booking.opt.express':'Ekspres','booking.opt.dry':'Cuci Kering','booking.time':'Masa pilihan','booking.submit':'Minta Pengambilan',
        'menu.title':'Sorotan Menu','menu.latte.title':'Signature Latte','menu.latte.text':'Kaya, berkrim, dan dipanggang sendiri.','menu.cold.title':'Cold Brew','menu.cold.text':'Direndam perlahan untuk rasa yang halus.','menu.pastry.title':'Kotak Pastri','menu.pastry.text':'Padanan sempurna dengan kopi anda.',
        'testimonials.title':'Apa kata pelanggan','testimonials.quote':'"Pantas, mesra dan kopinya menakjubkan — sangat disyorkan!" — A. Tan',
        'locations.title':'Cari kami','locations.address':'Bangi outlet — Jalan Reko — Buka 8am–8pm',
        'prices.title':'Harga','prices.wash':'Cuci & Lipat','prices.express':'Perkhidmatan Ekspres','prices.dry':'Cuci Kering','prices.coffee':'Kopi (Latte)',
    'prices.shirt':'Seterika Kemeja','prices.blanket':'Selimut / Comforter',
    'login.title':'Log masuk','login.submit':'Log masuk','contact.title':'Hubungi','contact.info':'Hubungi kami di +60 12-345 6789 atau singgah semasa waktu buka.','contact.submit':'Hantar mesej',
    'contact.uploading':'Memuat naik...','contact.thanks.upload':'Terima kasih — kami telah menerima mesej dan lampiran anda.','contact.uploadError':'Gagal memuat naik. Sila cuba lagi kemudian.',
    'booking.thanks':'Terima kasih — kami telah menerima permintaan pengambilan anda.','contact.thanks':'Terima kasih — kami telah menerima mesej anda. Kami akan hubungi anda tidak lama lagi.'
    }
    ,
    ta: {
        'brand.name': 'ஸ்பின் & சிப்',
        'brand.tagline': 'கேஃபே + लॉன்ட்ரி — காத்திருக்கும் போது காபி',
        'nav.home': 'முகப்பு','nav.services': 'சேவைகள்','nav.menu': 'மெனு','nav.prices': 'விலைகள்','nav.contact': 'தொடர்பு',
        'hero.title': 'தூய்மை உடைகள். சிறந்த காபி. காத்திருப்பு இல்லை.','hero.lead':'உங்கள் அலங்கார வளர்ச்சியை விட்டு, ஒரு இருக்கையை பிடித்து, எங்கள் காபியை அனுபவிக்கவும். விரைவு சேவை, நியாயமான விலைகள்.',
        'how.title':'இது எப்படி வேலை செய்கிறது','how.step1.title':'உடைகள் ஒப்படை','how.step1.text':'உங்கள் லான்ட்ரியைountersலுக்கு கொடுங்கள் அல்லது பிக்கப் கேளுங்கள்.','how.step2.title':'இறங்கி சுடுகாடு','how.step2.text':'ஏகப்பட்ட காபி அல்லது சிற்றுண்டிகளை படிக்கவும்.','how.step3.title':'எடுத்து செல்ல அல்லது விநியோகிக்கவும்','how.step3.text':'கடை에서 எடுத்துக் கொள்ளவும் அல்லது உங்கள் உடைகள் சுத்தமாகவும் மடிக்கப்பட்டவையாகவும் வழங்கப்படும்.',
        'services.title':'எங்கள் சேவைகள்','services.wash.title':'கழுவு & மடக்கு','services.wash.text':'தினசரி லான்ட்ரி கவனமாக கையாளப்படுகிறது.','services.express.title':'எக்ஸ்பிரஸ் சேவை','services.express.text':'உடனடி தேவைக்கு அதே நாளில் தயார்.','services.dry.title':'டிரை கிளீனிங்','services.dry.text':'நிறுவனப் பொருட்களுக்கு தொழில்நுட்ப பராமரிப்பு.','services.cafe.title':'கேஃபே & ஸ்நாக்ஸ்','services.cafe.text':'உள்ளூர் ரோஸ்ட் செய்யப்பட்ட காபி மற்றும் லேசான உணவுகள்.',
        'booking.title':'விரைவு புத்தாக்கம்','booking.name':'பெயர்','booking.phone':'தொலைефон','booking.service':'சேவை','booking.opt.wash':'கழுவு & மடக்கு','booking.opt.express':'எக்ஸ்பிரஸ்','booking.opt.dry':'டிரை கிளீன்','booking.time':'முன்னுரிமை நேரம்','booking.submit':'பிக்-அப் கோரிக்கை',
        'menu.title':'மெனு முக்கிய அம்சங்கள்','menu.latte.title':'சுய துணை லாட்டே','menu.latte.text':'செழுமையான, கிரீமி மற்றும் வீட்டில் ரோஸ்ட் செய்யப்பட்டது.','menu.cold.title':'கோல்ட் ப்ரூ','menu.cold.text':'மெல்லிய சுவைக்கு மெல்லச் சொதப்பப்பட்டது.','menu.pastry.title':'பேஸ்ட்ரி பெட்டி','menu.pastry.text':'உங்கள் காபியுடன் சிறந்த இணைப்பு.',
        'testimonials.title':'கஸ்டமர் கருத்துகள்','testimonials.quote':'"திடீரென்று, நட்பாக, மற்றும் காபி அருவருப்பாக உள்ளது — பரிந்துரைக்கப்படுகிறது!" — A. Tan',
        'locations.title':'எங்களை கண்டறி','locations.address':'பாங்கி கிளை — Jalan Reko — காலை 8 மணி - 8 மணி',
        'prices.title':'விலைகள்','prices.wash':'கழுவு & மடக்கு','prices.express':'எக்ஸ்பிரஸ் சேவை','prices.dry':'டிரை கிளீன்','prices.coffee':'காபி (லாட்டே)','prices.shirt':'ஷர்ட் பிரஸ்','prices.blanket':'செங்குத்து / கம்பளம்',
        'login.title':'உள் நுழைவோம்','login.submit':'உள் நுழைக','contact.title':'தொடர்பு','contact.info':'எங்களை அழைக்கவும் +60 12-345 6789 அல்லது திறப்பு நேரத்தில் வந்துவிடுங்கள்.','contact.submit':'செய்தி அனுப்பவும்',
        'contact.uploading':'உருப்படி பதிவேற்றப்படுகிறது...','contact.thanks.upload':'நன்றி — உங்கள் செய்தியும் இணைப்பும் ஏற்றுக்கொள்ளப்பட்டது.','contact.uploadError':'பதிவேற்றம் தோல்வியடைந்தது. பிறகு முயற்சிக்கவும்.',
        'booking.thanks':'நன்றி — உங்கள் பிக்-அப் கோரிக்கை பெறப்பட்டுள்ளது.','contact.thanks':'நன்றி — உங்கள் செய்தி பெற்றுக்கொள்ளப்பட்டது. விரைவில் தொடர்புகொள்கிறோம்.'
    },
    zh: {
        'brand.name': 'Spin & Sip','brand.tagline':'咖啡 + 洗衣 — 等待时享用咖啡','nav.home':'首页','nav.services':'服务','nav.menu':'菜单','nav.prices':'价格','nav.contact':'联系我们',
        'hero.title':'干净的衣物。美味的咖啡。不用等待。','hero.lead':'把衣服交给我们，找个座位，享用我们的招牌咖啡。快速服务，公道价格。',
        'how.title':'运作方式','how.step1.title':'交衣服','how.step1.text':'将您的洗衣送到柜台或请求上门取件。','how.step2.title':'放松 & 品尝','how.step2.text':'在我们舒适的咖啡厅享用咖啡或小吃。','how.step3.title':'取回或配送','how.step3.text':'到店取回或免费配送，衣服整洁折好。',
        'services.title':'我们的服务','services.wash.title':'洗 & 摺','services.wash.text':'日常洗衣用心处理。','services.express.title':'快捷服务','services.express.text':'需要时可同日完成。','services.dry.title':'干洗','services.dry.text':'专业处理精细衣物。','services.cafe.title':'咖啡 & 小吃','services.cafe.text':'本地烘焙咖啡与轻食。',
        'booking.title':'快速预约','booking.name':'姓名','booking.phone':'电话','booking.service':'服务','booking.opt.wash':'洗 & 摺','booking.opt.express':'快捷','booking.opt.dry':'干洗','booking.time':'首选时间','booking.submit':'请求取件',
        'menu.title':'菜单精选','menu.latte.title':'招牌拿铁','menu.latte.text':'浓郁、顺滑，店内烘焙。','menu.cold.title':'冷萃','menu.cold.text':'慢萃得出顺滑口感。','menu.pastry.title':'糕点盒','menu.pastry.text':'与咖啡完美搭配。',
        'testimonials.title':'顾客评价','testimonials.quote':'"快速、亲切，咖啡很棒 — 强烈推荐！" — A. Tan',
        'locations.title':'找到我们','locations.address':'Bangi 店 — Jalan Reko — 营业时间 8am–8pm',
        'prices.title':'价格','prices.wash':'洗 & 摺','prices.express':'快捷服务','prices.dry':'干洗','prices.coffee':'拿铁咖啡','prices.shirt':'衬衫熨烫','prices.blanket':'毯子 / 被子',
        'login.title':'登录','login.submit':'登录','contact.title':'联系我们','contact.info':'致电 +60 12-345 6789 或在营业时间内到访。','contact.submit':'发送消息',
        'contact.uploading':'上传中...','contact.thanks.upload':'谢谢 — 我们已收到您的消息和附件。','contact.uploadError':'上传失败。请稍后重试。',
        'booking.thanks':'谢谢 — 我们已收到您的取件请求。','contact.thanks':'谢谢 — 我们已收到您的消息。我们会尽快与您联系。'
    }
};

function setLang(lang){
    const dict = translations[lang] || translations['en'];

    // Primary: replace all elements that opt-in via data-i18n.
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(!key) return;
        let text = dict[key];
        // If a translation is missing, clear the content to avoid mixed-language UI
        if(typeof text === 'undefined') text = '';

        const tag = el.tagName.toLowerCase();
        if(tag === 'input'){
            const type = (el.type || '').toLowerCase();
            if(type === 'submit' || type === 'button' || type === 'reset'){
                el.value = text;
            } else {
                el.placeholder = text;
            }
        } else if(tag === 'textarea'){
            el.placeholder = text;
        } else if(tag === 'img'){
            el.alt = text;
        } else {
            el.innerHTML = text;
        }
    });

    // Brand and tagline
    const brandEl = document.querySelector('.brand-text h1');
    if(brandEl){ brandEl.textContent = dict['brand.name'] || ''; }
    const tagEl = document.querySelector('.tagline');
    if(tagEl) { tagEl.textContent = dict['brand.tagline'] || ''; }

    // Translate main nav links by filename -> key mapping
    const navMap = {
        'index.html': 'nav.home',
        '': 'nav.home',
        'services.html': 'nav.services',
        'menu.html': 'nav.menu',
        'prices.html': 'nav.prices',
        'contact.html': 'nav.contact',
        'login.html': 'nav.login'
    };
    document.querySelectorAll('.main-nav a').forEach(a => {
        const href = (a.getAttribute('href') || '').split('/').pop().split('#')[0];
        const key = navMap[href] || null;
        if(key){
            a.textContent = dict[key] || '';
        }
    });

    // Set document title: prefer first page-level title key (h3[data-i18n]) or brand
    let pageTitle = '';
    const pageTitleEl = document.querySelector('h1[data-i18n], h2[data-i18n], h3[data-i18n]');
    if(pageTitleEl){
        const k = pageTitleEl.getAttribute('data-i18n');
        pageTitle = dict[k] || '';
    }
    if(!pageTitle){
        // try known page keys based on body sections
        const bodyId = document.body.querySelector('main section') ? document.body.querySelector('main section').id : '';
        if(bodyId && dict[bodyId + '.title']) pageTitle = dict[bodyId + '.title'];
    }
    if(dict['brand.name']){
        document.title = dict['brand.name'] + (pageTitle ? (' — ' + pageTitle) : '');
    } else if(pageTitle){
        document.title = pageTitle;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    const langSelect = document.getElementById('lang-select');
    const langKey = 'spinandsip:lang';
    // apply saved language (fallback to select value or 'en')
    const saved = localStorage.getItem(langKey);
    const initial = saved || (langSelect ? langSelect.value : 'en') || 'en';
    if(langSelect){
        // set select to initial value
        langSelect.value = initial;
        // when user changes, persist
        langSelect.addEventListener('change', e => {
            const v = e.target.value;
            localStorage.setItem(langKey, v);
            setLang(v);
        });
    }
    setLang(initial);

    // Runtime safeguard: ensure every language selector has all needed options and readable labels
    (function ensureLangOptions(){
        const options = [
            {val:'en', label:'EN'},
            {val:'ms', label:'MS (Bahasa Melayu)'},
            {val:'bn', label:'BN (বাংলা)'},
            {val:'ta', label:'TA (தமிழ்)'},
            {val:'zh', label:'ZH (中文)'}
        ];
        const sels = document.querySelectorAll('.lang-select');
        if(!sels || !sels.length) return;
        sels.forEach(sel => {
            options.forEach(o => {
                let existing = sel.querySelector('option[value="' + o.val + '"]');
                if(existing){ existing.text = o.label; }
                else {
                    const opt = document.createElement('option'); opt.value = o.val; opt.text = o.label; sel.appendChild(opt);
                }
            });
            try{ sel.value = initial; }catch(e){}
        });
        // ensure global langSelect reference points to an element (if missing)
        if(!document.getElementById('lang-select')){
            const first = document.querySelector('.lang-select'); if(first) first.id = 'lang-select';
        }
        // re-apply language so labels update
        setLang(initial);
    })();

    // Create or reuse an aria-live region for announcements
    (function(){
        let live = document.getElementById('spinandsip-live');
        if(!live){
            live = document.createElement('div');
            live.id = 'spinandsip-live';
            live.setAttribute('aria-live','polite');
            live.setAttribute('aria-atomic','true');
            live.style.position = 'absolute';
            live.style.left = '-9999px';
            live.style.width = '1px';
            live.style.height = '1px';
            document.body.appendChild(live);
        }
    })();

    // Active nav highlighting
    (function(){
        const path = (location.pathname || '').split('/').pop() || 'index.html';
        document.querySelectorAll('.main-nav a').forEach(a => {
            const href = (a.getAttribute('href') || '').split('/').pop() || '';
            if(href === path || (href === '' && path === 'index.html')){
                a.classList.add('is-active');
                a.setAttribute('aria-current','page');
            } else {
                a.classList.remove('is-active');
                a.removeAttribute('aria-current');
            }
        });
        // also handle mobile panel links if present
        document.querySelectorAll('.mobile-nav-panel a').forEach(a => {
            const href = (a.getAttribute('href') || '').split('/').pop() || '';
            if(href === path || (href === '' && path === 'index.html')){
                a.classList.add('is-active');
                a.setAttribute('aria-current','page');
            } else {
                a.classList.remove('is-active');
                a.removeAttribute('aria-current');
            }
        });
    })();

    // Mobile hamburger -> toggle mobile nav panel
    (function(){
        const hamb = document.getElementById('hamburger');
        if(!hamb) return;
        let panel = document.querySelector('.mobile-nav-panel');
        if(!panel){
            const mainNav = document.querySelector('.main-nav');
            panel = document.createElement('div');
            panel.className = 'mobile-nav-panel';
            const clone = mainNav ? mainNav.cloneNode(true) : null;
            if(clone){ panel.appendChild(clone.querySelector('ul') || clone); }
            document.body.appendChild(panel);
        }
        hamb.addEventListener('click', ()=>{
            const isOpen = panel.classList.toggle('open');
            hamb.setAttribute('aria-expanded', String(isOpen));
            // prevent background scroll when mobile nav is open
            document.body.classList.toggle('mobile-nav-open', isOpen);
            // hide main content from screen readers while nav open
            const main = document.querySelector('main'); if(main) main.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        });
        panel.addEventListener('click', (e)=>{
            if(e.target.tagName.toLowerCase() === 'a'){
                panel.classList.remove('open');
                hamb.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('mobile-nav-open');
                const main = document.querySelector('main'); if(main) main.setAttribute('aria-hidden', 'false');
            }
        });
    })();

    // Booking form handler
    (function(){
        const form = document.getElementById('booking-form');
        if(!form) return;
        form.addEventListener('submit', e => {
            e.preventDefault();
            // client-side validation
            const nameEl = form.querySelector('[name="name"]');
            const phoneEl = form.querySelector('[name="phone"]');
            const errs = [];
            clearFieldError(nameEl); clearFieldError(phoneEl);
            if(!nameEl.value.trim()){ showFieldError(nameEl, 'Please enter your name'); errs.push('name'); }
            if(!phoneEl.value.trim()){ showFieldError(phoneEl, 'Please enter a phone'); errs.push('phone'); }
            if(errs.length) return;
            const name = form.querySelector('[name="name"]').value || '';
            const msg = document.createElement('div');
            msg.className = 'booking-confirm';
            msg.setAttribute('role','status');
            const dict = translations[document.getElementById('lang-select').value] || translations['en'];
            const thanks = dict['booking.thanks'] || 'Thanks! Your pickup request is received.';
            msg.innerText = `${thanks} ${name ? ('\n' + name) : ''}`;
            const prev = form.querySelector('.booking-confirm'); if(prev) prev.remove();
            form.appendChild(msg);
            form.reset();
            // announce to screen readers
            const live = document.getElementById('spinandsip-live'); if(live) live.textContent = msg.innerText;
        });
    })();

    // Simple field error helpers
    function showFieldError(el, msg){
        if(!el) return;
        el.classList.add('input-error');
        let hint = el.parentElement.querySelector('.field-error');
        if(!hint){ hint = document.createElement('div'); hint.className = 'field-error'; hint.style.color = '#b00020'; hint.style.marginTop = '6px'; el.parentElement.appendChild(hint); }
        hint.innerText = msg;
    }
    function clearFieldError(el){ if(!el) return; el.classList.remove('input-error'); const hint = el.parentElement.querySelector('.field-error'); if(hint) hint.remove(); }

    // Dark mode toggle (persist preference)
    (function(){
        const btn = document.getElementById('mode-toggle');
        const themeKey = 'spinandsip:theme';
        const apply = (mode) => {
            if(mode === 'dark') document.body.classList.add('dark'); else document.body.classList.remove('dark');
            if(btn) btn.textContent = mode === 'dark' ? '☀️' : '🌙';
        };
        const stored = localStorage.getItem(themeKey) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        apply(stored);
        if(btn){
            btn.addEventListener('click', ()=>{
                const cur = document.body.classList.contains('dark') ? 'dark' : 'light';
                const next = cur === 'dark' ? 'light' : 'dark';
                apply(next);
                localStorage.setItem(themeKey, next);
            });
        }
    })();

    // Contact form handler
    (function(){
        const cform = document.getElementById('contact-form');
        if(!cform) return;
        const fileInput = document.getElementById('ct-file');
        const filePreview = document.getElementById('ct-file-preview');
        if(fileInput && filePreview){
            fileInput.addEventListener('change', ()=>{
                const f = fileInput.files && fileInput.files[0];
                if(!f){ filePreview.src = ''; filePreview.alt = ''; filePreview.parentElement.style.display='none'; return; }
                const url = URL.createObjectURL(f);
                filePreview.src = url; filePreview.alt = f.name; filePreview.parentElement.style.display='block';
            });
        }
        // helper: resize image to max width and return a Blob
        function resizeImage(file, maxWidth = 1200){
            return new Promise((resolve, reject) => {
                if(!file.type.startsWith('image/')) return resolve(file);
                const img = new Image();
                img.onload = () => {
                    const ratio = img.width / img.height;
                    let w = img.width, h = img.height;
                    if(w > maxWidth){ w = maxWidth; h = Math.round(maxWidth / ratio); }
                    const canvas = document.createElement('canvas');
                    canvas.width = w; canvas.height = h;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, w, h);
                    canvas.toBlob((blob)=>{ if(blob) resolve(blob); else reject(new Error('Resize failed')); }, file.type || 'image/jpeg', 0.85);
                };
                img.onerror = () => resolve(file);
                const reader = new FileReader();
                reader.onload = () => { img.src = reader.result; };
                reader.onerror = () => resolve(file);
                reader.readAsDataURL(file);
            });
        }

        let currentXhr = null;
        const progressEl = document.getElementById('ct-progress');
        const cancelBtn = document.getElementById('ct-cancel');

        function resetUploadUI(){ if(progressEl){ progressEl.style.display='none'; progressEl.value=0 } if(cancelBtn) cancelBtn.style.display='none'; }

        cform.addEventListener('submit', async e => {
            e.preventDefault();
            // basic client-side validation
            const nameEl = cform.querySelector('[name="name"]');
            const emailEl = cform.querySelector('[name="email"]');
            const msgEl = cform.querySelector('[name="message"]');
            clearFieldError(nameEl); clearFieldError(emailEl); clearFieldError(msgEl);
            const emailVal = emailEl && emailEl.value.trim();
            if(!nameEl.value.trim() && !emailVal && !msgEl.value.trim()){
                showFieldError(msgEl, 'Please provide a message or contact details');
                return;
            }
            if(emailVal && !/^\S+@\S+\.\S+$/.test(emailVal)){
                showFieldError(emailEl, 'Enter a valid email address');
                return;
            }
            const dict = translations[document.getElementById('lang-select').value] || translations['en'];
            const thanks = dict['contact.thanks'] || 'Thanks — we received your message.';

            const endpoint = (cform.dataset && cform.dataset.endpoint) ? cform.dataset.endpoint.trim() : '';
            const f = fileInput && fileInput.files && fileInput.files[0];

            // If an endpoint is provided, upload via fetch (multipart/form-data)
            if(endpoint){
                // Validate file type/size (client-side)
                const maxSize = 5 * 1024 * 1024; // 5MB
                if(f && f.size > maxSize){
                    const err = dict['contact.fileTooLarge'] || 'Attachment too large (max 5MB).';
                    const em = document.createElement('div'); em.className='upload-error'; em.setAttribute('role','alert'); em.innerText = err;
                    const prev = cform.querySelector('.upload-error'); if(prev) prev.remove(); cform.appendChild(em);
                    const live = document.getElementById('spinandsip-live'); if(live) live.textContent = err;
                    return;
                }
                if(f && !f.type.startsWith('image/')){
                    const err = dict['contact.fileType'] || 'Attachment must be an image.';
                    const em = document.createElement('div'); em.className='upload-error'; em.setAttribute('role','alert'); em.innerText = err;
                    const prev = cform.querySelector('.upload-error'); if(prev) prev.remove(); cform.appendChild(em);
                    const live = document.getElementById('spinandsip-live'); if(live) live.textContent = err;
                    return;
                }
                // show uploading message and progress
                const uploading = document.createElement('div'); uploading.className='booking-confirm'; uploading.innerText = dict['contact.uploading'] || 'Uploading...';
                const prev0 = cform.querySelector('.booking-confirm'); if(prev0) prev0.remove(); cform.appendChild(uploading);
                if(progressEl){ progressEl.style.display='inline-block'; progressEl.value = 0; }
                if(cancelBtn){ cancelBtn.style.display='inline-block'; }
                // prepare formdata
                try{
                    const formData = new FormData();
                    formData.append('name', cform.querySelector('[name="name"]').value || '');
                    formData.append('email', cform.querySelector('[name="email"]').value || '');
                    formData.append('message', cform.querySelector('[name="message"]').value || '');
                    if(f){
                        const blob = await resizeImage(f, 1200);
                        const filename = f.name || ('upload.' + (blob.type.split('/')[1] || 'jpg'));
                        formData.append('file', blob, filename);
                    }
                    // XHR for progress + cancel
                    await new Promise((resolve, reject) => {
                        const xhr = new XMLHttpRequest(); currentXhr = xhr;
                        xhr.open('POST', endpoint);
                        xhr.onload = () => {
                            currentXhr = null;
                            if(xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText); else reject(new Error('Status ' + xhr.status));
                        };
                        xhr.onerror = () => { currentXhr = null; reject(new Error('Network error')); };
                        xhr.upload.onprogress = (ev) => { if(ev.lengthComputable && progressEl){ progressEl.value = Math.round((ev.loaded/ev.total)*100); } };
                        if(cancelBtn){
                            cancelBtn.onclick = () => {
                                if(currentXhr){
                                    currentXhr.abort();
                                    currentXhr = null;
                                    resetUploadUI();
                                    const em = document.createElement('div');
                                    em.className='upload-error';
                                    em.innerText = dict['contact.uploadCanceled'] || 'Upload canceled.';
                                    const prev = cform.querySelector('.upload-error'); if(prev) prev.remove();
                                    cform.appendChild(em);
                                    const live = document.getElementById('spinandsip-live'); if(live) live.textContent = em.innerText;
                                }
                            };
                        }
                        xhr.send(formData);
                    });
                    const doneText = dict['contact.thanks.upload'] || (thanks + (f ? ('\nAttachment: ' + (f.name||'file')) : ''));
                    const msg = document.createElement('div'); msg.className='upload-success'; msg.setAttribute('role','status'); msg.innerText = doneText;
                    const prev = cform.querySelector('.booking-confirm'); if(prev) prev.remove(); cform.appendChild(msg);
                    const live = document.getElementById('spinandsip-live'); if(live) live.textContent = msg.innerText;
                    cform.reset(); resetUploadUI();
                }catch(err){
                    resetUploadUI();
                    const errMsg = dict['contact.uploadError'] || ('Upload error — please try again later.');
                    const em = document.createElement('div'); em.className='upload-error'; em.setAttribute('role','status'); em.innerText = errMsg;
                    const prev = cform.querySelector('.upload-error'); if(prev) prev.remove(); cform.appendChild(em);
                    const live = document.getElementById('spinandsip-live'); if(live) live.textContent = em.innerText;
                }
                return;
            }

            // fallback: local confirmation (no upload endpoint configured)
            const msg = document.createElement('div');
            msg.className = 'booking-confirm';
            msg.setAttribute('role','status');
            msg.innerText = thanks + (f ? ('\nAttachment: ' + f.name) : '');
            const prev = cform.querySelector('.booking-confirm'); if(prev) prev.remove();
            cform.appendChild(msg);
            cform.reset();
            const live = document.getElementById('spinandsip-live'); if(live) live.textContent = msg.innerText;
        });
    })();

    // Login form: remember-me and show password
    (function(){
        const lform = document.getElementById('login-form');
        const toggle = document.getElementById('toggle-pass');
        const pass = document.getElementById('lg-pass');
        const email = document.getElementById('lg-email');
        const remember = document.getElementById('remember-me');
        const langKey = 'spinandsip:lang';
        const rememberKey = 'spinandsip:rememberEmail';
        if(toggle && pass){
            toggle.addEventListener('click', ()=>{
                const is = pass.type === 'text';
                pass.type = is ? 'password' : 'text';
                toggle.setAttribute('aria-pressed', String(!is));
            });
        }
        // populate remembered email
        try{
            const saved = localStorage.getItem(rememberKey);
            if(saved && email){ email.value = saved; remember.checked = true; }
        }catch(e){}
        if(lform){
            lform.addEventListener('submit', e => {
                e.preventDefault();
                // validation
                clearFieldError(email); clearFieldError(pass);
                if(!email.value.trim()){ showFieldError(email, 'Please enter email'); return; }
                if(!pass.value.trim()){ showFieldError(pass, 'Please enter password'); return; }
                const em = email ? email.value : '';
                if(remember && remember.checked){ try{ localStorage.setItem(rememberKey, em); }catch(e){} } else { try{ localStorage.removeItem(rememberKey);}catch(e){} }
                // show confirmation
                const dict = translations[document.getElementById('lang-select').value] || translations['en'];
                const text = dict['login.success'] || (dict['login.submit'] ? (dict['login.submit'] + ' — OK') : 'Signed in');
                const msg = document.createElement('div'); msg.className='booking-confirm'; msg.setAttribute('role','status'); msg.innerText = text;
                const prev = lform.querySelector('.booking-confirm'); if(prev) prev.remove(); lform.appendChild(msg);
                const live = document.getElementById('spinandsip-live'); if(live) live.textContent = text;
                lform.reset();
            });
        }
    })();

    // Mobile nav focus trap: keep focus inside panel when open
    (function(){
        const hamb = document.getElementById('hamburger');
        const panel = document.querySelector('.mobile-nav-panel');
        if(!hamb || !panel) return;
        panel.addEventListener('keydown', (e)=>{
            if(e.key !== 'Tab') return;
            const focusable = panel.querySelectorAll('a, button, input, select, textarea');
            if(!focusable.length) return;
            const first = focusable[0]; const last = focusable[focusable.length-1];
            if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
            else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
        });
        panel.addEventListener('transitionend', ()=>{
            if(panel.classList.contains('open')){
                const first = panel.querySelector('a, button, input, select, textarea'); if(first) first.focus();
            } else { hamb.focus(); }
        });
    })();

});

// Register service worker for PWA
if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('/sw.js').then(reg=>{
            console.log('SW registered', reg.scope);
        }).catch(err=>console.warn('SW reg failed', err));
    });
}
