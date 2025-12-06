const menuData = [
    {
        title: "Kur'an",
        id: "kuran",
        url: "kuran/index.html",
        children: [
            { title: "Euzubilla i bismilla", id: "euzubilla", url: "kuran/euzubilla.html" },
            { title: "Rabbi jessir", id: "rabbi_jessir", url: "kuran/rabbi_jessir.html" },
            { title: "Subhaneke", id: "subhaneke", url: "kuran/subhaneke.html" },
            { title: "El-Fatiha", id: "fatiha", url: "kuran/fatiha.html" },
            { title: "En-Nas", id: "nas", url: "kuran/nas.html" },
            { title: "El-Felek", id: "felek", url: "kuran/felek.html" },
            { title: "El-Ihlas", id: "ihlas", url: "kuran/ihlas.html" },
            { title: "El-Leheb", id: "leheb", url: "kuran/leheb.html" },
            { title: "En-Nasr", id: "nasr", url: "kuran/nasr.html" },
            { title: "El-Kafirun", id: "kafirun", url: "kuran/kafirun.html" },
            { title: "El-Kevser", id: "kevser", url: "kuran/kevser.html" },
            { title: "El-Maun", id: "maun", url: "kuran/maun.html" },
            { title: "El-Kurejš", id: "kurejs", url: "kuran/kurejs.html" },
            { title: "El-Fil", id: "fil", url: "kuran/fil.html" },
            { title: "El-Humezeh", id: "humezeh", url: "kuran/humezeh.html" },
            { title: "El-'Asr", id: "asr", url: "kuran/asr.html" },
            { title: "Pitanja", id: "kuran_pitanja", url: "kuran/pitanja.html", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Akaid",
        id: "akaid",
        url: "akaid/index.html",
        children: [
            { title: "Islam i musliman", id: "islam_musliman", url: "akaid/islam_musliman.html" },
            { title: "Kelime i šehadet", id: "kelime_sehadet", url: "akaid/kelime_sehadet.html" },
            {
                title: "Imanski šarti",
                id: "imanski_sarti",
                url: "akaid/imanski_sarti/index.html",
                children: [
                    { title: "1. imanski šart", id: "imanski_1", url: "akaid/imanski_sarti/1.html" },
                    { title: "2. imanski šart", id: "imanski_2", url: "akaid/imanski_sarti/2.html" },
                    { title: "3. imanski šart", id: "imanski_3", url: "akaid/imanski_sarti/3.html" },
                    { title: "4. imanski šart", id: "imanski_4", url: "akaid/imanski_sarti/4.html" },
                    { title: "5. imanski šart", id: "imanski_5", url: "akaid/imanski_sarti/5.html" },
                    { title: "6. imanski šart", id: "imanski_6", url: "akaid/imanski_sarti/6.html" }
                ]
            },
            { title: "Islamski šarti", id: "islamski_sarti_akaid", url: "akaid/islamski_sarti.html" },
            { title: "Kur'an", id: "akaid_kuran", url: "akaid/kuran.html" },
            { title: "Hadis", id: "hadis", url: "akaid/hadis.html" },
            { title: "Šeriat (ukratko)", id: "seriat", url: "akaid/seriat.html" },
            { title: "Pitanja", id: "akaid_pitanja", url: "akaid/pitanja.html", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Ibadat",
        id: "ibadat",
        children: [
            { title: "Ettehijat", id: "ettehijat" },
            { title: "Abdest", id: "abdest" },
            {
                title: "Uvjeti za namaz",
                id: "uvjeti_namaz",
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
            { title: "Ezan i ikamet", id: "ezan" },
            { title: "Gusul", id: "gusul" },
            { title: "Tejemum", id: "tejemum" },
            {
                title: "Namazi",
                id: "namazi",
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
                children: [
                    { title: "Početni tekbir", id: "tekbir" },
                    { title: "Kijam", id: "kijam" },
                    { title: "Kiraet", id: "kiraet" },
                    { title: "Ruku'", id: "ruku" },
                    { title: "Sedžda", id: "sedzda" },
                    { title: "Posljednje sjedenje", id: "sjedenje" }
                ]
            },
            { title: "Islam i muslimani", id: "ibadat_islam" },
            { title: "Ulazak u wc", id: "wc" },
            { title: "Šta kvari namaz?", id: "kvari_namaz" },
            { title: "Teravija", id: "teravija" },
            { title: "Džemat", id: "dzemat" },
            { title: "Pitanja", id: "ibadat_pitanja", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Ahlak",
        id: "ahlak",
        children: [
            { title: "Islamski bonton", id: "bonton" },
            { title: "Selam - islamski pozdrav", id: "selam" },
            { title: "Desna strana", id: "desna_strana" },
            { title: "Lična higijena i urednost", id: "higijena" },
            { title: "Kuća: ulazak i izlazak", id: "kuca" },
            { title: "Dova za kupatilo", id: "dova_kupatilo" },
            { title: "Ponašanje za sofrom", id: "sofra" },
            { title: "Dug prema roditeljima", id: "roditelji" },
            { title: "Laž, prevara i krađa", id: "laz" },
            { title: "Akšamsko vrijeme", id: "aksamsko_vrijeme" },
            { title: "Braća i sestre", id: "braca_sestre" },
            { title: "Ramazan", id: "ramazan" },
            { title: "Bajrami", id: "bajrami" },
            { title: "Hidžretska godina", id: "hidzretska" },
            { title: "Dužnost prema sebi", id: "duznost_sebi" },
            { title: "Islamsko odjevanje", id: "odjevanje" },
            { title: "Rad i milosrđe", id: "rad" },
            { title: "Zdravlje i život", id: "zdravlje" },
            { title: "Odgoj i obrazovanje", id: "odgoj" },
            { title: "Islam i nauka", id: "nauka" },
            { title: "Vjera i smisao života", id: "smisao" },
            { title: "Halal i haram ishrana", id: "ishrana" },
            { title: "Islamska imena", id: "imena" },
            { title: "Dova poslije ezana", id: "dova_ezan" },
            { title: "Druženje", id: "druzenje" },
            { title: "Islamski kalendar", id: "kalendar" },
            { title: "Grijesi", id: "grijesi" },
            { title: "Pitanja", id: "ahlak_pitanja", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Historija islama",
        id: "historija",
        children: [
            { title: "Adem, a.s.", id: "adem" },
            { title: "Nuh , a.s.", id: "nuh" },
            { title: "Arabija", id: "arabija" },
            { title: "Rođenje", id: "rodjenje" },
            { title: "U Benu Said-u", id: "benu_said" },
            { title: "Siroče", id: "siroce" },
            { title: "Ženidba", id: "zenidba" },
            { title: "Prva Objava", id: "prva_objava" },
            { title: "Poslanikova Hidžra", id: "hidzra" },
            { title: "Pitanja", id: "historija_pitanja", icon: "far fa-question-circle" }
        ]
    },
    {
        title: "Namazi (video)",
        id: "namazi_video",
        children: [
            {
                title: "Sabah",
                id: "video_sabah",
                children: [
                    { title: "Sunnet", id: "video_sabah_sunnet" },
                    { title: "Farz", id: "video_sabah_farz" }
                ]
            },
            {
                title: "Podne",
                id: "video_podne",
                children: [
                    { title: "Sunnet", id: "video_podne_sunnet" },
                    { title: "Farz", id: "video_podne_farz" },
                    { title: "Sun-Sunnet", id: "video_podne_sunsunnet" }
                ]
            },
            {
                title: "Ikindija",
                id: "video_ikindija",
                children: [
                    { title: "Sunnet", id: "video_ikindija_sunnet" },
                    { title: "Farz", id: "video_ikindija_farz" }
                ]
            },
            {
                title: "Akšam",
                id: "video_aksam",
                children: [
                    { title: "Farz", id: "video_aksam_farz" },
                    { title: "Sunnet", id: "video_aksam_sunnet" }
                ]
            },
            {
                title: "Jacija",
                id: "video_jacija",
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
            if (item.url) {
                contentLink.href = root + item.url;
            } else {
                contentLink.href = `${root}index.html?page=${item.id}`;
            }
            contentLink.textContent = item.title;
            contentLink.className = 'flex-grow-1 text-decoration-none';
            contentLink.style.paddingRight = '5px'; // Reduce padding to make room for toggle
            
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
            
            if (item.url) {
                a.href = root + item.url;
            } else {
                a.href = `${root}index.html?page=${item.id}`;
            }
            
            if (item.icon) {
                a.innerHTML = `<i class="${item.icon}" style="margin-right: 8px;"></i>${item.title}`;
            } else {
                a.textContent = item.title;
            }

            a.onclick = (e) => {
                // Optional: Handle SPA-like navigation here if desired
                // e.preventDefault();
                // loadContent(item.id);
            };
            li.appendChild(a);
        }
        ul.appendChild(li);
    });

    return ul;
}

document.addEventListener('DOMContentLoaded', () => {
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
});
