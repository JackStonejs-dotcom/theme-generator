<!DOCTYPE html>
<html lang="ar" dir="rtl" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BİROYA - Studio Design & Customizer</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              blue: '#0F172A',
              royal: '#1E3A8A',
              gold: '#D97706',
              goldLight: '#F59E0B',
            }
          }
        }
      }
    }
  </script>

  <!-- Google Fonts (25 Diverse Fonts) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Aref+Ruqaa:wght@400;700&family=Cairo:wght@300;400;700;900&family=Changa:wght@400;700&family=Cinzel:wght@500;800&family=El+Messiri:wght@400;700&family=Great+Vibes&family=Katibeh&family=Lalezar&family=Lateef&family=Lemonada:wght@400;700&family=Marcellus&family=Mada:wght@400;700&family=Montserrat:wght@400;700;900&family=Nabla&family=Noto+Naskh+Arabic:wght@400;700&family=Pacifico&family=Playfair+Display:ital,wght@0,600;0,900;1,400&family=Reem+Kufi:wght@500;700&family=Rubik:wght@400;700&family=Scheherazade+New:wght@400;700&family=Tajawal:wght@400;700;900&family=Vibes&family=Work+Sans:wght@400;700&family=Zain:wght@400;700&display=swap" rel="stylesheet">

  <style>
    /* 25 Font Classes */
    .f-1 { font-family: 'Tajawal', sans-serif; }
    .f-2 { font-family: 'Cairo', sans-serif; }
    .f-3 { font-family: 'Amiri', serif; }
    .f-4 { font-family: 'Aref Ruqaa', serif; }
    .f-5 { font-family: 'Reem Kufi', sans-serif; }
    .f-6 { font-family: 'Changa', sans-serif; }
    .f-7 { font-family: 'Lemonada', cursive; }
    .f-8 { font-family: 'Lalezar', cursive; }
    .f-9 { font-family: 'El Messiri', sans-serif; }
    .f-10 { font-family: 'Scheherazade New', serif; }
    .f-11 { font-family: 'Katibeh', cursive; }
    .f-12 { font-family: 'Lateef', cursive; }
    .f-13 { font-family: 'Mada', sans-serif; }
    .f-14 { font-family: 'Noto Naskh Arabic', serif; }
    .f-15 { font-family: 'Zain', sans-serif; }
    .f-16 { font-family: 'Rubik', sans-serif; }
    .f-17 { font-family: 'Playfair Display', serif; }
    .f-18 { font-family: 'Montserrat', sans-serif; }
    .f-19 { font-family: 'Cinzel', serif; }
    .f-20 { font-family: 'Great Vibes', cursive; }
    .f-21 { font-family: 'Pacifico', cursive; }
    .f-22 { font-family: 'Marcellus', serif; }
    .f-23 { font-family: 'Work Sans', sans-serif; }
    .f-24 { font-family: 'Vibes', cursive; }
    .f-25 { font-family: 'Nabla', cursive; }

    /* Custom Liquid Glass Background */
    .liquid-bg-dark {
      background: radial-gradient(circle at 15% 20%, rgba(30, 58, 138, 0.85), transparent 45%),
                  radial-gradient(circle at 85% 80%, rgba(217, 119, 6, 0.5), transparent 40%),
                  radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.98), #070B14);
    }
    .liquid-bg-light {
      background: radial-gradient(circle at 15% 20%, rgba(191, 219, 254, 0.9), transparent 50%),
                  radial-gradient(circle at 85% 80%, rgba(254, 243, 199, 0.9), transparent 45%),
                  linear-gradient(135deg, #f0f4f8, #e2e8f0);
    }

    /* Glassmorphic Panel UI */
    .glass-panel {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(25px) saturate(180%);
      -webkit-backdrop-filter: blur(25px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    .dark .glass-panel {
      background: rgba(15, 23, 42, 0.45);
      backdrop-filter: blur(25px) saturate(180%);
      -webkit-backdrop-filter: blur(25px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    /* Canvas Grid & Center Guides */
    .guide-line-h, .guide-line-v {
      position: absolute;
      background-color: #ef4444;
      z-index: 50;
      pointer-events: none;
      display: none;
    }
    .guide-line-h { height: 1.5px; left: 0; right: 0; top: 50%; border-top: 1px dashed #f87171; }
    .guide-line-v { width: 1.5px; top: 0; bottom: 0; left: 50%; border-left: 1px dashed #f87171; }

    /* Hide Scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="liquid-bg-dark text-slate-100 min-h-screen transition-colors duration-500 font-sans antialiased overflow-x-hidden" id="appBody">

  <!-- Header / Navigation Bar -->
  <header class="glass-panel sticky top-0 z-40 px-6 py-4 flex items-center justify-between shadow-2xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-royal to-brand-gold flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-brand-royal/40">
        B
      </div>
      <div>
        <h1 class="text-xl font-extrabold tracking-wide bg-gradient-to-r from-blue-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
          BİROYA STUDIO
        </h1>
        <p class="text-xs text-slate-400">استوديو التصميم والتخصيص المباشر</p>
      </div>
    </div>

    <!-- Mode Toggle & Global Controls -->
    <div class="flex items-center gap-4">
      <button id="themeToggleBtn" onclick="toggleTheme()" class="glass-panel px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-white/20 transition-all">
        <span id="themeIcon">🌙</span>
        <span id="themeText">الوضع الداكن</span>
      </button>
    </div>
  </header>

  <!-- Main Workspace Layout -->
  <main class="max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

    <!-- Left / Top Controls Sidebar (7 Columns) -->
    <section class="lg:col-span-7 flex flex-col gap-5">
      
      <!-- Main Navigation Tabs (With Audio Click Feedback) -->
      <nav class="glass-panel p-2 rounded-2xl flex items-center justify-between gap-1 shadow-lg no-scrollbar overflow-x-auto">
        <button onclick="switchTab('textTab', this)" class="main-tab-btn active flex-1 py-3 px-3 rounded-xl text-xs md:text-sm font-bold bg-brand-royal text-white transition-all shadow-md">
          ✏️ النص والخطوط
        </button>
        <button onclick="switchTab('shapesTab', this)" class="main-tab-btn flex-1 py-3 px-3 rounded-xl text-xs md:text-sm font-bold text-slate-300 hover:bg-white/10 transition-all">
          📐 الأشكال والرموز
        </button>
        <button onclick="switchTab('templatesTab', this)" class="main-tab-btn flex-1 py-3 px-3 rounded-xl text-xs md:text-sm font-bold text-slate-300 hover:bg-white/10 transition-all">
          🎨 قوالب جاهزة
        </button>
        <button onclick="switchTab('alignTab', this)" class="main-tab-btn flex-1 py-3 px-3 rounded-xl text-xs md:text-sm font-bold text-slate-300 hover:bg-white/10 transition-all">
          🎯 المحاذاة والشبكة
        </button>
      </nav>

      <!-- TAB 1: Text & Fonts Control -->
      <div id="textTab" class="glass-panel p-5 rounded-2xl flex flex-col gap-4 shadow-xl">
        <h3 class="text-base font-bold text-amber-300 flex items-center gap-2">
          <span>✍️</span> كتابة وتعديل النص
        </h3>
        <textarea id="textContentInput" oninput="updateActiveText()" placeholder="أدخل نص التخصيص هنا..." class="w-full h-24 p-3 rounded-xl bg-slate-900/60 border border-slate-700 focus:border-brand-gold focus:outline-none text-slate-100 placeholder-slate-500 resize-none transition-all"></textarea>

        <!-- Font Size Unlimited Range Slider -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <label class="text-xs font-semibold text-slate-300">حجم الخط (يصل إلى 1000px+):</label>
            <div class="flex items-center gap-1">
              <input type="number" id="fontSizeNum" value="48" min="10" max="2000" onchange="changeFontSize(this.value)" class="w-20 p-1 rounded-lg bg-slate-900/80 border border-slate-700 text-center text-sm text-amber-400 font-bold" />
              <span class="text-xs text-slate-400">px</span>
            </div>
          </div>
          <input type="range" id="fontSizeSlider" min="10" max="1000" value="48" oninput="changeFontSize(this.value)" class="w-full accent-amber-500 cursor-pointer" />
        </div>

        <!-- Font Family Selection Grid (25 Fonts) -->
        <div class="flex flex-col gap-2">
          <label class="text-xs font-semibold text-slate-300">اختر من بين 25 خطاً مختلفاً ومتنوعاً:</label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto pr-1 no-scrollbar" id="fontGridContainer">
            <!-- 25 Font Buttons injected via JS -->
          </div>
        </div>
      </div>

      <!-- TAB 2: Shapes, Decorations, Animals & Preview Library -->
      <div id="shapesTab" class="glass-panel p-5 rounded-2xl flex flex-col gap-4 shadow-xl hidden">
        <h3 class="text-base font-bold text-amber-300 flex items-center gap-2">
          <span>📐</span> الأشكال والهندسة والزخارف (مع المعاينة)
        </h3>
        
        <!-- Shape Options -->
        <div class="grid grid-cols-3 gap-3">
          <button onclick="addShape('circle')" class="glass-panel p-3 rounded-xl flex flex-col items-center gap-2 hover:border-amber-400 transition-all group">
            <div class="w-10 h-10 rounded-full border-2 border-amber-400 group-hover:scale-110 transition-transform"></div>
            <span class="text-xs font-bold">دائرة</span>
          </button>
          <button onclick="addShape('square')" class="glass-panel p-3 rounded-xl flex flex-col items-center gap-2 hover:border-amber-400 transition-all group">
            <div class="w-10 h-10 border-2 border-amber-400 group-hover:scale-110 transition-transform"></div>
            <span class="text-xs font-bold">مربع</span>
          </button>
          <button onclick="addShape('rectangle')" class="glass-panel p-3 rounded-xl flex flex-col items-center gap-2 hover:border-amber-400 transition-all group">
            <div class="w-12 h-8 border-2 border-amber-400 group-hover:scale-110 transition-transform"></div>
            <span class="text-xs font-bold">مستطيل</span>
          </button>
        </div>

        <!-- Decorative Icons & Animals Library with Live Preview Thumbnail -->
        <div class="flex flex-col gap-2 mt-2">
          <label class="text-xs font-semibold text-slate-300">مكتبة العناصر، الزخارف والورود والحيوانات:</label>
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto pr-1 no-scrollbar" id="decorLibraryGrid">
            <!-- Injected via JS with instant preview hover -->
          </div>
        </div>
      </div>

      <!-- TAB 3: Ready-Made Templates -->
      <div id="templatesTab" class="glass-panel p-5 rounded-2xl flex flex-col gap-4 shadow-xl hidden">
        <h3 class="text-base font-bold text-amber-300 flex items-center gap-2">
          <span>🎨</span> اختر تصميماً جاهزاً للتعديل
        </h3>
        <div class="grid grid-cols-2 gap-3" id="templatesContainer">
          <!-- Templates injected by JS -->
        </div>
      </div>

      <!-- TAB 4: Alignment & Helper Guides -->
      <div id="alignTab" class="glass-panel p-5 rounded-2xl flex flex-col gap-4 shadow-xl hidden">
        <h3 class="text-base font-bold text-amber-300 flex items-center gap-2">
          <span>🎯</span> أدوات التموضع والمحاذاة الدقيقة
        </h3>
        <div class="flex items-center justify-between glass-panel p-3 rounded-xl">
          <span class="text-sm font-semibold">إظهار الخطوط الدالة على المنتصف:</span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="guidesToggle" onchange="toggleGuides(this.checked)" class="sr-only peer" checked>
            <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
          </label>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button onclick="centerActiveElement('horizontal')" class="glass-panel py-3 rounded-xl text-xs font-bold hover:bg-white/10">↔️ توسط أفقي</button>
          <button onclick="centerActiveElement('vertical')" class="glass-panel py-3 rounded-xl text-xs font-bold hover:bg-white/10">↕️ توسط عمودي</button>
          <button onclick="centerActiveElement('both')" class="col-span-2 glass-panel py-3 rounded-xl text-xs font-bold bg-brand-royal/60 hover:bg-brand-royal">🎯 التوسط في منتصف التصميم تماماً</button>
        </div>
      </div>

    </section>

    <!-- Right / Bottom Preview Canvas Section (5 Columns) -->
    <section class="lg:col-span-5 flex flex-col gap-4">
      <div class="glass-panel p-4 rounded-2xl shadow-2xl relative flex flex-col items-center">
        
        <!-- Live Preview Header Tag -->
        <div class="w-full flex justify-between items-center mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> المعاينة المباشرة الفورية
          </span>
          <button onclick="resetCanvas()" class="text-xs text-rose-400 hover:text-rose-300">إعادة ضبط</button>
        </div>

        <!-- DESIGN CANVAS -->
        <div id="canvas" class="w-full aspect-square rounded-2xl relative overflow-hidden shadow-2xl transition-all duration-300 flex items-center justify-center border-2 border-white/20" style="background: radial-gradient(circle, rgba(30,58,138,0.4) 0%, rgba(15,23,42,0.8) 100%);">
          
          <!-- Smart Centering Guidelines -->
          <div id="guideH" class="guide-line-h"></div>
          <div id="guideV" class="guide-line-v"></div>

          <!-- Dynamic Active Canvas Elements will be inserted here -->
          <div id="canvasElementsContainer" class="w-full h-full relative"></div>
        </div>

        <p class="text-xs text-slate-400 mt-3 text-center">
          💡 يمكنك سحب النص أو الشكل داخل اللوحة لضبط موضعه المباشر.
        </p>
      </div>
    </section>

  </main>

  <!-- JavaScript Logic -->
  <script>
    // Audio Context for Soft Haptic Sound Click
    let audioCtx = null;
    function playSoftClick() {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
      } catch (e) {}
    }

    // Theme Switcher
    let isDark = true;
    function toggleTheme() {
      isDark = !isDark;
      const body = document.getElementById('appBody');
      const icon = document.getElementById('themeIcon');
      const text = document.getElementById('themeText');

      if (isDark) {
        document.documentElement.classList.add('dark');
        body.className = body.className.replace('liquid-bg-light', 'liquid-bg-dark');
        icon.innerText = '🌙';
        text.innerText = 'الوضع الداكن';
      } else {
        document.documentElement.classList.remove('dark');
        body.className = body.className.replace('liquid-bg-dark', 'liquid-bg-light');
        icon.innerText = '☀️';
        text.innerText = 'الوضع الفاتح';
      }
    }

    // Tab Switcher with Sound on Main Tabs
    function switchTab(tabId, btn) {
      playSoftClick();
      ['textTab', 'shapesTab', 'templatesTab', 'alignTab'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
      });
      document.getElementById(tabId).classList.remove('hidden');

      document.querySelectorAll('.main-tab-btn').forEach(b => {
        b.classList.remove('bg-brand-royal', 'text-white');
        b.classList.add('text-slate-300');
      });
      btn.classList.add('bg-brand-royal', 'text-white');
      btn.classList.remove('text-slate-300');
    }

    // 25 Fonts Dataset
    const fontsList = [
      { name: 'Tajawal (تجوال)', class: 'f-1' },
      { name: 'Cairo (القاهرة)', class: 'f-2' },
      { name: 'Amiri (أميري)', class: 'f-3' },
      { name: 'Aref Ruqaa (رقعة)', class: 'f-4' },
      { name: 'Reem Kufi (كوفي)', class: 'f-5' },
      { name: 'Changa (تشانغا)', class: 'f-6' },
      { name: 'Lemonada (ليمونادة)', class: 'f-7' },
      { name: 'Lalezar (لاليجار)', class: 'f-8' },
      { name: 'El Messiri (المسيري)', class: 'f-9' },
      { name: 'Scheherazade (شهرزاد)', class: 'f-10' },
      { name: 'Katibeh (كتيبة)', class: 'f-11' },
      { name: 'Lateef (لطيف)', class: 'f-12' },
      { name: 'Mada (مدى)', class: 'f-13' },
      { name: 'Noto Naskh (نسخ)', class: 'f-14' },
      { name: 'Zain (زين)', class: 'f-15' },
      { name: 'Rubik (روبيك)', class: 'f-16' },
      { name: 'Playfair (فاخر لاتيني)', class: 'f-17' },
      { name: 'Montserrat (مودرن)', class: 'f-18' },
      { name: 'Cinzel (ملكي)', class: 'f-19' },
      { name: 'Great Vibes (سلس)', class: 'f-20' },
      { name: 'Pacifico (مرح)', class: 'f-21' },
      { name: 'Marcellus (كلاسيك)', class: 'f-22' },
      { name: 'Work Sans (نظيف)', class: 'f-23' },
      { name: 'Vibes (عصري)', class: 'f-24' },
      { name: 'Nabla (ملون)', class: 'f-25' }
    ];

    // Decor & Animal Library Dataset
    const decorList = [
      '🌸', '🌹', '🌺', '🌻', '🌿', '🍃', 
      '🦁', '👑', '🦋', '🕊️', '🦄', '🦅', 
      '✨', '⭐', '⚜️', '💍', '🎁', '☕'
    ];

    // Canvas State Management
    let currentFontClass = 'f-1';
    let currentFontSize = 48;
    let canvasElements = [
      { id: 'el-text', type: 'text', content: 'BİROYA GELATO', font: 'f-1', size: 48, top: 40, left: 20 }
    ];

    // Render 25 Fonts Grid
    function renderFontGrid() {
      const container = document.getElementById('fontGridContainer');
      container.innerHTML = '';
      fontsList.forEach((f, idx) => {
        const btn = document.createElement('button');
        btn.className = `glass-panel p-2 rounded-xl text-xs font-semibold hover:border-amber-400 transition-all text-center truncate ${f.class}`;
        btn.innerText = `${idx + 1}. ${f.name}`;
        btn.onclick = () => {
          currentFontClass = f.class;
          const activeText = canvasElements.find(e => e.type === 'text');
          if (activeText) activeText.font = f.class;
          renderCanvas();
        };
        container.appendChild(btn);
      });
    }

    // Render Decor Library
    function renderDecorLibrary() {
      const container = document.getElementById('decorLibraryGrid');
      container.innerHTML = '';
      decorList.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'glass-panel p-3 rounded-xl text-xl flex items-center justify-center hover:scale-110 hover:border-amber-400 transition-all';
        btn.innerText = item;
        btn.onclick = () => addDecor(item);
        container.appendChild(btn);
      });
    }

    // Render Canvas Elements
    function renderCanvas() {
      const container = document.getElementById('canvasElementsContainer');
      container.innerHTML = '';

      canvasElements.forEach(item => {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.top = item.top + '%';
        div.style.left = item.left + '%';
        div.style.transform = 'translate(-50%, -50%)';
        div.style.cursor = 'move';
        div.className = 'select-none transition-shadow';

        if (item.type === 'text') {
          div.className += ` ${item.font} font-bold text-amber-300 drop-shadow-lg`;
          div.style.fontSize = item.size + 'px';
          div.innerText = item.content;
        } else if (item.type === 'shape') {
          div.style.width = (item.size || 80) + 'px';
          div.style.height = item.shape === 'rectangle' ? ((item.size || 80) * 0.6) + 'px' : (item.size || 80) + 'px';
          div.style.border = '3px solid #F59E0B';
          if (item.shape === 'circle') div.style.borderRadius = '50%';
        } else if (item.type === 'decor') {
          div.style.fontSize = (item.size || 60) + 'px';
          div.innerText = item.content;
        }

        // Make Draggable
        makeElementDraggable(div, item);
        container.appendChild(div);
      });
    }

    // Draggable Implementation with Snap Guides
    function makeElementDraggable(elmnt, itemObj) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        const parent = document.getElementById('canvas');
        const pRect = parent.getBoundingClientRect();

        let newTopPixel = elmnt.offsetTop - pos2;
        let newLeftPixel = elmnt.offsetLeft - pos1;

        let topPercent = (newTopPixel / pRect.height) * 100;
        let leftPercent = (newLeftPixel / pRect.width) * 100;

        // Snap Guide Logic
        const guideH = document.getElementById('guideH');
        const guideV = document.getElementById('guideV');

        if (Math.abs(leftPercent - 50) < 3) {
          leftPercent = 50;
          if (document.getElementById('guidesToggle').checked) guideV.style.display = 'block';
        } else {
          guideV.style.display = 'none';
        }

        if (Math.abs(topPercent - 50) < 3) {
          topPercent = 50;
          if (document.getElementById('guidesToggle').checked) guideH.style.display = 'block';
        } else {
          guideH.style.display = 'none';
        }

        itemObj.top = topPercent;
        itemObj.left = leftPercent;

        elmnt.style.top = topPercent + '%';
        elmnt.style.left = leftPercent + '%';
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.getElementById('guideH').style.display = 'none';
        document.getElementById('guideV').style.display = 'none';
      }
    }

    // Update Text Inputs
    function updateActiveText() {
      const text = document.getElementById('textContentInput').value;
      const activeText = canvasElements.find(e => e.type === 'text');
      if (activeText) {
        activeText.content = text;
        renderCanvas();
      }
    }

    function changeFontSize(val) {
      currentFontSize = val;
      document.getElementById('fontSizeSlider').value = val;
      document.getElementById('fontSizeNum').value = val;
      const activeText = canvasElements.find(e => e.type === 'text');
      if (activeText) {
        activeText.size = val;
        renderCanvas();
      }
    }

    // Add Shapes & Decor
    function addShape(shapeType) {
      canvasElements.push({
        id: 'shape-' + Date.now(),
        type: 'shape',
        shape: shapeType,
        size: 100,
        top: 50,
        left: 50
      });
      renderCanvas();
    }

    function addDecor(symbol) {
      canvasElements.push({
        id: 'decor-' + Date.now(),
        type: 'decor',
        content: symbol,
        size: 60,
        top: 50,
        left: 50
      });
      renderCanvas();
    }

    // Centering Controls
    function centerActiveElement(axis) {
      canvasElements.forEach(el => {
        if (axis === 'horizontal' || axis === 'both') el.left = 50;
        if (axis === 'vertical' || axis === 'both') el.top = 50;
      });
      renderCanvas();
    }

    function toggleGuides(show) {
      if (!show) {
        document.getElementById('guideH').style.display = 'none';
        document.getElementById('guideV').style.display = 'none';
      }
    }

    function resetCanvas() {
      canvasElements = [
        { id: 'el-text', type: 'text', content: 'BİROYA GELATO', font: 'f-1', size: 48, top: 40, left: 50 }
      ];
      document.getElementById('textContentInput').value = 'BİROYA GELATO';
      renderCanvas();
    }

    // Init
    window.onload = () => {
      renderFontGrid();
      renderDecorLibrary();
      document.getElementById('textContentInput').value = 'BİROYA GELATO';
      renderCanvas();
    };
  </script>
</body>
</html>
