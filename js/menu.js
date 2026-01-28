const menuData = [
    {
        title: "Kur'an",
        id: "kuran",
        url: "kuran/index.html",
        icon: "fas fa-quran",
        comingSoon: true,
        children: [
            { title: "Euzubilla i bismilla", id: "euzubilla", url: "kuran/euzubilla.html", icon: "fas fa-play", comingSoon: true },
            { title: "Rabbi jessir", id: "rabbi_jessir", url: "kuran/rabbi_jessir.html", icon: "fas fa-play", comingSoon: true },
            { title: "Subhaneke", id: "subhaneke", url: "kuran/subhaneke.html", comingSoon: true },
            { title: "El-Fatiha", id: "fatiha", url: "kuran/fatiha.html", comingSoon: true },
            { title: "En-Nas", id: "nas", url: "kuran/nas.html", comingSoon: true },
            { title: "El-Felek", id: "felek", url: "kuran/felek.html", comingSoon: true },
            { title: "El-Ihlas", id: "ihlas", url: "kuran/ihlas.html", comingSoon: true },
            { title: "El-Leheb", id: "leheb", url: "kuran/leheb.html", comingSoon: true },
            { title: "En-Nasr", id: "nasr", url: "kuran/nasr.html", comingSoon: true },
            { title: "El-Kafirun", id: "kafirun", url: "kuran/kafirun.html", comingSoon: true },
            { title: "El-Kevser", id: "kevser", url: "kuran/kevser.html", comingSoon: true },
            { title: "El-Maun", id: "maun", url: "kuran/maun.html", comingSoon: true },
            { title: "El-Kurejš", id: "kurejs", url: "kuran/kurejs.html", comingSoon: true },
            { title: "El-Fil", id: "fil", url: "kuran/fil.html", comingSoon: true },
            { title: "El-Humezeh", id: "humezeh", url: "kuran/humezeh.html", comingSoon: true },
            { title: "El-'Asr", id: "asr", url: "kuran/asr.html", comingSoon: true },
            { title: "Pitanja", id: "kuran_pitanja", url: "kuran/pitanja.html", icon: "far fa-question-circle", comingSoon: true }
        ]
    },
    {
        title: "Akaid",
        id: "akaid",
        url: "akaid/index.html",
        icon: "fas fa-mosque",
        children: [
            { title: "Islam i musliman", id: "islam_musliman", url: "akaid/islam_musliman.html", icon: "fas fa-users" },
            { title: "Kelime i šehadet", id: "kelime_sehadet", url: "akaid/kelime_sehadet.html", icon: "fas fa-fingerprint" },
            {
                title: "Imanski šarti",
                id: "imanski_sarti",
                url: "akaid/imanski_sarti/index.html",
                icon: "fas fa-list-ol",
                children: [
                    { title: "1. imanski šart", id: "imanski_1", url: "akaid/imanski_sarti/1.html" },
                    { title: "2. imanski šart", id: "imanski_2", url: "akaid/imanski_sarti/2.html" },
                    { title: "3. imanski šart", id: "imanski_3", url: "akaid/imanski_sarti/3.html" },
                    { title: "4. imanski šart", id: "imanski_4", url: "akaid/imanski_sarti/4.html" },
                    { title: "5. imanski šart", id: "imanski_5", url: "akaid/imanski_sarti/5.html" },
                    { title: "6. imanski šart", id: "imanski_6", url: "akaid/imanski_sarti/6.html" }
                ]
            },
            { title: "Islamski šarti", id: "islamski_sarti_akaid", url: "akaid/islamski_sarti.html", icon: "fas fa-list-ul" },
            { title: "Kur'an", id: "akaid_kuran", url: "akaid/kuran.html", icon: "fas fa-book" },
            { title: "Hadis", id: "hadis", url: "akaid/hadis.html", icon: "fas fa-quote-right" },
            { title: "Šerijat (ukratko)", id: "seriat", url: "akaid/seriat.html", icon: "fas fa-balance-scale" },
            { title: "Pitanja", id: "akaid_pitanja", url: "akaid/pitanja.html", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Ibadat",
        id: "ibadat",
        url: "ibadat/index.html",
        icon: "fas fa-pray",
        comingSoon: true,
        children: [
            { title: "Ettehijat", id: "ettehijat", icon: "fas fa-chair" },
            { title: "Abdest", id: "abdest", icon: "fas fa-water" },
            {
                title: "Uvjeti za namaz",
                id: "uvjeti_namaz",
                icon: "fas fa-clipboard-check",
                children: [
                    { title: "1. uvjet za namaz", id: "uvjet_1" },
                    { title: "2. uvjet za namaz", id: "uvjet_2" },
                    { title: "3. uvjet za namaz", id: "uvjet_3" },
                    { title: "4. uvjet za namaz", id: "uvjet_4" },
                    { title: "5. uvjet za namaz", id: "uvjet_5" },
                    { title: "6. uvjet za namaz", id: "uvjet_6" }
                ]
            },
            {
                title: "Islamski šarti",
                id: "islamski_sarti_ibadat",
                children: [
                    { title: "1. islamski šart", id: "islamski_1" },
                    { title: "2. islamski šart", id: "islamski_2" },
                    { title: "3. islamski šart", id: "islamski_3" },
                    { title: "4. islamski šart", id: "islamski_4" },
                    { title: "5. islamski šart", id: "islamski_5" }
                ]
            },
            { title: "Ezan i ikamet", id: "ezan", icon: "fas fa-volume-up" },
            { title: "Gusul", id: "gusul", icon: "fas fa-shower" },
            { title: "Tejemum", id: "tejemum", icon: "fas fa-hands" },
            {
                title: "Namazi",
                id: "namazi",
                icon: "fas fa-clock",
                children: [
                    { title: "Sabah", id: "sabah" },
                    { title: "Podne", id: "podne" },
                    { title: "Ikindija", id: "ikindija" },
                    { title: "Akšam", id: "aksam" },
                    { title: "Jacija", id: "jacija" }
                ]
            },
            {
                title: "Namaski Ruknovi",
                id: "ruknovi",
                icon: "fas fa-child",
                children: [
                    { title: "Početni tekbir", id: "tekbir" },
                    { title: "Kijam", id: "kijam" },
                    { title: "Kiraet", id: "kiraet" },
                    { title: "Ruku'", id: "ruku" },
                    { title: "Sedžda", id: "sedzda" },
                    { title: "Posljednje sjedenje", id: "sjedenje" }
                ]
            },
            { title: "Islam i muslimani", id: "ibadat_islam", icon: "fas fa-users" },
            { title: "Ulazak u wc", id: "wc", icon: "fas fa-restroom" },
            { title: "Šta kvari namaz?", id: "kvari_namaz", icon: "fas fa-ban" },
            { title: "Teravija", id: "teravija", icon: "fas fa-moon" },
            { title: "Džemat", id: "dzemat", icon: "fas fa-users-rays" },
            { title: "Pitanja", id: "ibadat_pitanja", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Ahlak",
        id: "ahlak",
        url: "ahlak/index.html",
        icon: "fas fa-heart",
        children: [
            { title: "Islamski bonton", id: "bonton", url: "ahlak/bonton.html", icon: "fas fa-user-tie" },
            { title: "Selam - Islamski pozdrav", id: "selam", url: "ahlak/selam.html", icon: "fas fa-handshake" },
            { title: "Desna strana", id: "desna_strana", url: "ahlak/desna_strana.html", icon: "fas fa-hand-point-right" },
            { title: "Lična higijena i urednost", id: "higijena", url: "ahlak/higijena.html", icon: "fas fa-pump-soap" },
            { title: "Kuća: ulazak i izlazak", id: "kuca", url: "ahlak/kuca.html", icon: "fas fa-home" },
            { title: "Dova za kupatilo", id: "dova_kupatilo", url: "ahlak/dova_kupatilo.html", icon: "fas fa-bath" },
            { title: "Ponašanje za sofrom", id: "sofra", url: "ahlak/sofra.html", icon: "fas fa-utensils" },
            { title: "Dužnosti prema roditeljima", id: "roditelji", url: "ahlak/roditelji.html", icon: "fas fa-user-friends" },
            { title: "Laž, prevara i krađa", id: "laz", url: "ahlak/laz.html", icon: "fas fa-exclamation-triangle" },
            { title: "Akšamsko vrijeme", id: "aksamsko_vrijeme", url: "ahlak/aksamsko_vrijeme.html", icon: "fas fa-cloud-sun" },
            { title: "Braća i sestre", id: "braca_sestre", url: "ahlak/braca_sestre.html", icon: "fas fa-users" },
            { title: "Ramazan", id: "ramazan", url: "ahlak/ramazan.html", icon: "fas fa-star-and-crescent" },
            { title: "Bajrami", id: "bajrami", url: "ahlak/bajrami.html", icon: "fas fa-gift" },
            { title: "Hidžretska godina", id: "hidzretska", url: "ahlak/hidzretska_godina.html", icon: "fas fa-calendar-week" },
            { title: "Dužnosti prema Allahu", id: "duznosti_allahu", url: "ahlak/duznosti_prema_allahu.html", icon: "fas fa-praying-hands" },
            { title: "Dužnosti prema sebi", id: "duznost_sebi", url: "ahlak/duznost_prema_sebi.html", icon: "fas fa-user-check" },
            { title: "Islamsko odjevanje", id: "odjevanje", url: "ahlak/odjevanje.html", icon: "fas fa-tshirt" },
            { title: "Rad i milosrđe", id: "rad", url: "ahlak/rad.html", icon: "fas fa-hammer" },
            { title: "Zdravlje i život", id: "zdravlje", url: "ahlak/zdravlje.html", icon: "fas fa-heartbeat" },
            { title: "Odgoj i obrazovanje", id: "odgoj", url: "ahlak/odgoj.html", icon: "fas fa-graduation-cap" },
            { title: "Islam i nauka", id: "nauka", url: "ahlak/nauka.html", icon: "fas fa-atom" },
            { title: "Vjera i smisao života", id: "smisao", url: "ahlak/smisao.html", icon: "fas fa-compass" },
            { title: "Halal i haram ishrana", id: "ishrana", url: "ahlak/ishrana.html", icon: "fas fa-check-double" },
            { title: "Islamska imena", id: "imena", url: "ahlak/islamska_imena.html", icon: "fas fa-id-card" },
            { title: "Dova poslije ezana", id: "dova_ezan", url: "ahlak/dova_ezan.html", icon: "fas fa-volume-up" },
            { title: "Druženje", id: "druzenje", url: "ahlak/druzenje.html", icon: "fas fa-user-plus" },
            { title: "Islamski kalendar", id: "kalendar", url: "ahlak/islamski_kalendar.html", icon: "fas fa-calendar-alt" },
            { title: "Grijesi", id: "grijesi", url: "ahlak/grijesi.html", icon: "fas fa-exclamation-triangle" },
            { title: "Pitanja", id: "ahlak_pitanja", url: "ahlak/pitanja.html", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Historija islama",
        id: "historija",
        url: "historija/index.html",
        icon: "fas fa-history",
        children: [
            { title: "Adem, a.s.", id: "adem", url: "historija/adem.html", icon: "fas fa-user-tag" },
            { title: "Nuh , a.s.", id: "nuh", url: "historija/nuh.html", icon: "fas fa-ship" },
            { title: "Arabija", id: "arabija", url: "historija/arabija.html", icon: "fas fa-globe-asia" },
            { title: "Rođenje", id: "rodjenje", url: "historija/rodjenje.html", icon: "fas fa-star" },
            { title: "U Benu Said-u", id: "benu_said", url: "historija/benu_said.html", icon: "fas fa-map-marker-alt" },
            { title: "Siroče", id: "siroce", url: "historija/siroce.html", icon: "fas fa-child" },
            { title: "Ženidba", id: "zenidba", url: "historija/zenidba.html", icon: "fas fa-ring" },
            { title: "Prva Objava", id: "prva_objava", url: "historija/prva_objava.html", icon: "fas fa-book-open" },
            { title: "Poslanikova Hidžra", id: "hidzra", url: "historija/hidzra.html", icon: "fas fa-walking" },
            { title: "Pitanja", id: "historija_pitanja", url: "historija/pitanja.html", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Namazi (video)",
        id: "namazi_video",
        icon: "fas fa-video",
        children: [
            {
                title: "Sabah",
                id: "video_sabah",
                icon: "fas fa-sun",
                children: [
                    { title: "Sunnet", id: "video_sabah_sunnet" },
                    { title: "Farz", id: "video_sabah_farz" }
                ]
            },
            {
                title: "Podne",
                id: "video_podne",
                icon: "fas fa-sun",
                children: [
                    { title: "Sunnet", id: "video_podne_sunnet" },
                    { title: "Farz", id: "video_podne_farz" },
                    { title: "Sun-Sunnet", id: "video_podne_sunsunnet" }
                ]
            },
            {
                title: "Ikindija",
                id: "video_ikindija",
                icon: "fas fa-cloud-sun",
                children: [
                    { title: "Sunnet", id: "video_ikindija_sunnet" },
                    { title: "Farz", id: "video_ikindija_farz" }
                ]
            },
            {
                title: "Akšam",
                id: "video_aksam",
                icon: "fas fa-cloud-moon",
                children: [
                    { title: "Farz", id: "video_aksam_farz" },
                    { title: "Sunnet", id: "video_aksam_sunnet" }
                ]
            },
            {
                title: "Jacija",
                id: "video_jacija",
                icon: "fas fa-moon",
                children: [
                    { title: "Sunnet", id: "video_jacija_sunnet" },
                    { title: "Farz", id: "video_jacija_farz" },
                    { title: "Sun-Sunnet", id: "video_jacija_sunsunnet" },
                    { title: "Vitr-namaz", id: "video_jacija_vitr" }
                ]
            },
            {
                title: "Teravija",
                id: "video_teravija",
                icon: "fas fa-mosque",
                children: [
                    { title: "Sunnet", id: "video_teravija_sunnet" }
                ]
            }
        ]
    },
    {
        title: "Ostalo",
        id: "ostalo",
        separator: true,
        children: [
            { title: "Operativni plan", id: "plan" },
            { title: "Ispiti", id: "ispiti" },
            { title: "Ciljevi", id: "ciljevi" },
            { title: "O nama", id: "o_nama" }
        ]
    }
];

function renderMenu(items, parentId = 'sidebar-menu') {
    const ul = document.createElement('ul');
    ul.className = 'list-unstyled components';
    if (parentId !== 'sidebar-menu') {
        ul.className = 'collapse list-unstyled';
        ul.id = parentId;
    }

    items.forEach((item, index) => {
        const li = document.createElement('li');
        
        if (item.separator) {
            li.style.marginTop = '15px';
            li.style.borderTop = '1px solid rgba(0,0,0,0.1)';
            li.style.paddingTop = '15px';
        }

        const hasChildren = item.children && item.children.length > 0;
        
        if (hasChildren) {
            // Wrapper for split view
            const wrapper = document.createElement('div');
            wrapper.className = 'd-flex align-items-stretch';
            
            // 1. Content Link (Title)
            const contentLink = document.createElement('a');
            const root = window.projectRoot || "";
            const isImplemented = !!item.url && !item.comingSoon;

            if (isImplemented) {
                contentLink.href = root + item.url;
            } else {
                contentLink.href = "#";
                contentLink.classList.add("text-muted");
                contentLink.style.cursor = "default";
            }

            let contentHtml = "";
            if (item.icon) {
                contentHtml += `<i class="${item.icon}" style="margin-right: 8px;"></i>`;
            }
            contentHtml += item.title;

            if (!isImplemented) {
                 contentHtml += ` <span class="badge rounded-pill bg-light text-secondary border ms-1" style="font-size: 0.65em; font-weight: normal;">Uskoro</span>`;
            }
            contentLink.innerHTML = contentHtml;

            contentLink.className = 'flex-grow-1 text-decoration-none';
            contentLink.style.paddingRight = '5px'; // Reduce padding to make room for toggle

            if (!isImplemented) {
                 contentLink.onclick = (e) => e.preventDefault();
            }
            
            // 2. Toggle Button (Icon)
            const toggleLink = document.createElement('a');
            toggleLink.href = `#submenu-${item.id}`;
            toggleLink.className = 'd-flex align-items-center justify-content-center';
            toggleLink.style.paddingLeft = '15px';
            toggleLink.style.paddingRight = '20px';
            toggleLink.style.cursor = 'pointer';
            toggleLink.innerHTML = `<i class="fas fa-chevron-right transition-icon" style="font-size: 0.8em; transition: transform 0.3s;"></i>`;
            
            toggleLink.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const target = document.getElementById(`submenu-${item.id}`);
                const icon = toggleLink.querySelector('.transition-icon');

                if (target.classList.contains('show')) {
                    target.classList.remove('show');
                    toggleLink.setAttribute('aria-expanded', 'false');
                    if (icon) icon.style.transform = 'rotate(0deg)';
                } else {
                    target.classList.add('show');
                    toggleLink.setAttribute('aria-expanded', 'true');
                    if (icon) icon.style.transform = 'rotate(90deg)';
                }
            };

            wrapper.appendChild(contentLink);
            wrapper.appendChild(toggleLink);
            li.appendChild(wrapper);
            
            li.appendChild(renderMenu(item.children, `submenu-${item.id}`));
        } else {
            const a = document.createElement('a');
            const root = window.projectRoot || "";
            const isImplemented = !!item.url && !item.comingSoon;
            
            if (isImplemented) {
                a.href = root + item.url;
            } else {
                a.href = "#";
                a.style.cursor = "default";
                a.classList.add("text-muted");
            }
            
            let contentHtml = "";
            if (item.icon) {
                contentHtml += `<i class="${item.icon}" style="margin-right: 8px;"></i>`;
            }
            contentHtml += item.title;

            if (!isImplemented) {
                 contentHtml += ` <span class="badge rounded-pill bg-light text-secondary border ms-1" style="font-size: 0.65em; font-weight: normal;">Uskoro</span>`;
            }

            a.innerHTML = contentHtml;

            a.onclick = (e) => {
                if (!isImplemented) {
                    e.preventDefault();
                }
            };
            li.appendChild(a);
        }
        ul.appendChild(li);
    });

    return ul;
}

function findActiveItem(items, currentPath, breadcrumb = []) {
    for (const item of items) {
        const newBreadcrumb = [...breadcrumb, item];
        
        // Check if this item matches
        let match = false;
        if (item.url) {
            const normalizedUrl = item.url.replace(/^\.\//, '');
            if (currentPath.endsWith(normalizedUrl)) {
                match = true;
            }
        } else if (item.id) {
             const urlParams = new URLSearchParams(window.location.search);
             if (urlParams.get('page') === item.id) {
                 match = true;
             }
        }

        if (match) {
            return { item, breadcrumb: newBreadcrumb };
        }

        if (item.children) {
            const result = findActiveItem(item.children, currentPath, newBreadcrumb);
            if (result) return result;
        }
    }
    return null;
}

function initializeLayout() {
    const wrapper = document.getElementById('wrapper');
    if (!wrapper) return;

    // 1. Inject Sidebar if missing
    let sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        sidebar = document.createElement('nav');
        sidebar.id = 'sidebar';
        
        // Header
        const header = document.createElement('div');
        header.className = 'sidebar-header';
        const root = window.projectRoot || "";
        
        // Use config if available, else fallback
        const title = (typeof siteConfig !== 'undefined') ? siteConfig.sidebarHeader.text : "Dibekhana Mekteb";
        const url = (typeof siteConfig !== 'undefined') ? siteConfig.sidebarHeader.url : "index.html";

        header.innerHTML = `<h3><a href="${root}${url}" class="text-white text-decoration-none d-flex align-items-center"><img src="${root}logo.png" alt="Logo" style="height: 100px;" class="me-2">${title}</a></h3>`;
        sidebar.appendChild(header);

        // Content Container
        const contentDiv = document.createElement('div');
        contentDiv.id = 'sidebar-content';
        sidebar.appendChild(contentDiv);

        wrapper.insertBefore(sidebar, wrapper.firstChild);
    }
}

function updatePageTitle() {
    const currentPath = decodeURIComponent(window.location.pathname);
    const result = findActiveItem(menuData, currentPath);
    
    if (result) {
        const { item, breadcrumb } = result;
        // breadcrumb is [Grandparent, Parent, Item]
        // We want: Item Title - Parent Title - Site Title
        
        const parts = [];
        
        // Reverse breadcrumb to get specific -> general
        const reversed = [...breadcrumb].reverse();
        
        reversed.forEach(p => parts.push(p.title));
        
        if (typeof siteConfig !== 'undefined') {
            parts.push(siteConfig.siteTitle);
        } else {
            parts.push("Dibekhana Mekteb");
        }
        
        document.title = parts.join(' - ');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Layout (Sidebar structure)
    initializeLayout();
    
    // Update Page Title
    updatePageTitle();

    const sidebarContent = document.getElementById('sidebar-content');
    if (sidebarContent) {
        sidebarContent.appendChild(renderMenu(menuData));
    }

    // Highlight active link based on URL
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    let activeLink = null;

    if (page) {
        activeLink = document.querySelector(`a[href="?page=${page}"]`);
    } else {
        // Try to match by filename or path
        // Decode current path to handle spaces/special chars
        const currentPath = decodeURIComponent(window.location.pathname);
        const links = document.querySelectorAll('#sidebar-content a');
        
        for (let link of links) {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('?')) {
                // Normalize href: remove relative path prefixes (../ and ./)
                // We want to match the "logical" path from the project root
                // e.g. "../kuran/index.html" -> "kuran/index.html"
                const normalizedHref = href.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
                
                // Check if the current absolute path ends with the normalized href
                // This handles "kuran/index.html" vs "akaid/index.html" correctly
                // because normalizedHref includes the folder structure
                if (currentPath.endsWith(normalizedHref)) {
                    activeLink = link;
                    break;
                }
            }
        }
    }

    if (activeLink) {
        // Handle split view wrapper
        if (activeLink.parentElement.classList.contains('d-flex')) {
            activeLink.parentElement.parentElement.classList.add('active');
            activeLink.parentElement.classList.add('active');
        } else {
            activeLink.parentElement.classList.add('active');
        }

        // Expand parents
        let current = activeLink.closest('li');
            while (current && current.id !== 'sidebar-content') {
                if (current.classList.contains('collapse')) {
                    current.classList.add('show');
                    
                    const toggle = document.querySelector(`a[href="#${current.id}"]`);
                    if (toggle) {
                        toggle.setAttribute('aria-expanded', 'true');
                        const icon = toggle.querySelector('.transition-icon');
                        if (icon) icon.style.transform = 'rotate(90deg)';
                    }
                }
                current = current.parentElement;
            }

            // Expand own submenu if exists (for parent categories)
            const wrapper = activeLink.parentElement;
            if (wrapper && wrapper.nextElementSibling && wrapper.nextElementSibling.tagName === 'UL') {
                const submenu = wrapper.nextElementSibling;
                if (submenu.classList.contains('collapse')) {
                    submenu.classList.add('show');
                    
                    // Update toggle icon
                    const toggleLink = wrapper.querySelector('a[href^="#submenu-"]');
                    if (toggleLink) {
                        toggleLink.setAttribute('aria-expanded', 'true');
                        const icon = toggleLink.querySelector('.transition-icon');
                        if (icon) icon.style.transform = 'rotate(90deg)';
                    }
                }
            }
            
            // Update content title
            // const contentTitle = document.getElementById('content-title');
            // if (contentTitle) {
            //     contentTitle.textContent = activeLink.textContent;
            // }

            // Update main content placeholder - REMOVED to prevent overwriting static content
            // const mainContent = document.getElementById('main-content');
            // if (mainContent) {
            //    ...
            // }
        }

    // Mobile Sidebar Enhancements
    // 1. Inject Overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // 2. Inject Dismiss Button into Sidebar
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse');

    if (sidebar) {
        const dismissBtn = document.createElement('div');
        dismissBtn.id = 'dismiss';
        dismissBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
        sidebar.appendChild(dismissBtn); 

        // Unified Toggle Logic
        const toggleSidebar = () => {
            sidebar.classList.toggle('active');
            
            // Handle Overlay (Mobile only logic mostly, but safe to toggle)
            // On mobile: active = visible. On desktop: active = hidden.
            // Overlay should be visible only when sidebar is visible AND we are on mobile.
            // But simpler: just toggle overlay class if we are on mobile.
            if (window.innerWidth <= 991) {
                if (sidebar.classList.contains('active')) {
                    overlay.classList.add('active');
                } else {
                    overlay.classList.remove('active');
                }
            } else {
                overlay.classList.remove('active');
            }

            updateHamburgerVisibility();
        };

        // Hamburger Visibility Logic
        const updateHamburgerVisibility = () => {
            if (!sidebarCollapse) return;

            const isMobile = window.innerWidth <= 991;
            const isActive = sidebar.classList.contains('active');
            
            // Determine if sidebar is currently visible to the user
            let isSidebarVisible;
            if (isMobile) {
                // Mobile: .active means visible
                isSidebarVisible = isActive;
            } else {
                // Desktop: .active means hidden
                isSidebarVisible = !isActive;
            }

            // Reset styles first
            sidebarCollapse.style.visibility = '';
            sidebarCollapse.style.display = '';

            // If sidebar is visible, hide hamburger.
            if (isSidebarVisible) {
                if (isMobile) {
                    // Mobile: Use visibility:hidden to keep space and prevent layout shift
                    sidebarCollapse.style.visibility = 'hidden';
                } else {
                    // Desktop: Use display:none to remove space completely
                    sidebarCollapse.style.display = 'none';
                }
            }
        };

        // Event Listeners
        dismissBtn.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar); // Overlay click always closes (toggles)
        
        if (sidebarCollapse) {
            // Remove any existing listeners if possible (hard with vanilla JS without reference)
            // But we will remove the inline script from HTML files.
            sidebarCollapse.addEventListener('click', toggleSidebar);
        }

        // Initial check
        updateHamburgerVisibility();

        // Handle Resize
        window.addEventListener('resize', () => {
            // Reset overlay on resize to avoid weird states
            if (window.innerWidth > 991) {
                overlay.classList.remove('active');
            }
            updateHamburgerVisibility();
        });

        // Auto-expand cards on mobile
        if (window.innerWidth <= 768) {
            const collapses = document.querySelectorAll('.card .collapse');
            collapses.forEach(el => {
                // Skip if it's the audio player (optional, but usually good to keep closed)
                if (el.id === 'audioPlayerCollapse') return;

                if (!el.classList.contains('show')) {
                    // Add show class to expand
                    el.classList.add('show');
                    
                    // Update toggler state
                    const id = el.id;
                    if (id) {
                        const toggler = document.querySelector(`[data-bs-target="#${id}"], [href="#${id}"]`);
                        if (toggler) {
                            toggler.setAttribute('aria-expanded', 'true');
                            toggler.classList.remove('collapsed');
                        }
                    }
                }
            });
        }
    }
});
