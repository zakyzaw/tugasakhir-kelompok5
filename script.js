const stages = [
  {
    title: "Zaman Prasejarah",
    year: "2.5 juta - 3000 SM",
    image: "assets/prasejarah.png",
    description: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="space-y-4">
          <img src="assets/lukisangua.jpg" alt="Lukisan Gua" class="rounded-lg shadow-md animate-float">
          <p class="text-gray-600 text-center text-sm"><i>Lukisan gua dari zaman Paleolitik</i></p>
        </div>
        <div>
          <p class="text-gray-700 mb-4">Manusia purba mulai menggunakan alat-alat batu sederhana dan tinggal di gua-gua. Mereka hidup sebagai pemburu-pengumpul dan meninggalkan jejak melalui lukisan gua.</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <i class="fas fa-check-circle text-amber-600 mt-1 mr-2"></i>
              <span>Penggunaan alat batu pertama (Oldowan)</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check-circle text-amber-600 mt-1 mr-2"></i>
              <span>Penemuan api sekitar 1 juta tahun lalu</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check-circle text-amber-600 mt-1 mr-2"></i>
              <span>Lukisan gua pertama sekitar 40.000 SM</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    bgImage: "assets/prasejarahbg.jpg",
  },
  {
    title: "Revolusi Pertanian",
    year: "10.000 - 3000 SM",
    image: "assets/pertanian.jpg",
    description: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p class="text-gray-700 mb-4">Manusia mulai bercocok tanam, beternak, dan menetap di suatu tempat. Revolusi ini mengubah pola hidup nomaden menjadi menetap dan memunculkan permukiman permanen pertama.</p>
          
          <div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mb-4">
            <h3 class="font-bold text-amber-800 mb-2">Pencapaian Penting:</h3>
            <ul class="space-y-1 text-amber-700">
              <li>Domestikasi gandum dan barley</li>
              <li>Peternakan hewan pertama (kambing, domba)</li>
              <li>Pembuatan tembikar untuk penyimpanan</li>
            </ul>
          </div>
        </div>
        <div class="space-y-4">
          <img src="assets/alatdulu.jpg" alt="Pertanian Awal" class="rounded-lg shadow-md animate-float">
          <p class="text-gray-600 text-center text-sm"><i>Pengolahan tanah dengan alat primitif</i></p>
        </div>
      </div>
    `,
    bgImage: "assets/pertanianbg.jpg",
  },
  {
    title: "Peradaban Kuno",
    year: "3000 SM - 500 M",
    image: "assets/purba.jpg",
    description: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <img src="assets/piramid.jpg" alt="Piramida" class="w-full h-32 object-cover rounded mb-2 animate-float">
          <h3 class="font-bold text-gray-800 mb-1">Mesir Kuno</h3>
          <p class="text-sm text-gray-600">Membangun piramida, mengembangkan sistem tulisan hieroglif, dan kemajuan dalam matematika.</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <img src="assets/mesopotamia.jpg" alt="Mesopotamia" class="w-full h-32 object-cover rounded mb-2 animate-float">
          <h3 class="font-bold text-gray-800 mb-1">Mesopotamia</h3>
          <p class="text-sm text-gray-600">Penemu roda, sistem hukum pertama (Hammurabi), dan tulisan kuneiform.</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <img src="assets/lembahindus.jpg" alt="Lembah Indus" class="w-full h-32 object-cover rounded mb-2 animate-float">
          <h3 class="font-bold text-gray-800 mb-1">Lembah Indus</h3>
          <p class="text-sm text-gray-600">Perencanaan kota canggih dengan sistem drainase dan sanitasi.</p>
        </div>
      </div>
    `,
    bgImage: "assets/kunobg.jpg",
  },
  {
    title: "Zaman Klasik",
    year: "500 SM - 500 M",
    image: "assets/klasik.jpg",
    description: `
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h3 class="font-bold text-lg text-gray-800 mb-1">Yunani Kuno</h3>
            <p class="text-gray-700">Kelahiran demokrasi, filsafat (Socrates, Plato, Aristoteles), dan kemajuan dalam matematika dan astronomi.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h3 class="font-bold text-lg text-gray-800 mb-1">Kekaisaran Romawi</h3>
            <p class="text-gray-700">Sistem hukum Romawi, teknik arsitektur (beton, jalan, aqueduct), dan perluasan kekaisaran.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h3 class="font-bold text-lg text-gray-800 mb-1">Dinasti Han</h3>
            <p class="text-gray-700">Penemuan kertas, kompas, dan pembukaan Jalur Sutra.</p>
          </div>
        </div>
        <div class="flex-1">
          <img src="assets/parthenon.jpg" alt="Parthenon" class="rounded-lg shadow-md w-full h-auto animate-float">
          <p class="text-gray-600 text-center text-sm mt-2"><i>Parthenon, simbol kejayaan Yunani Kuno</i></p>
        </div>
      </div>
    `,
    bgImage: "assets/klasikbg.jpg",
  },
  {
    title: "Abad Pertengahan",
    year: "500 - 1500 M",
    image: "assets/abadpertengahan.jpg",
    description: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-bold text-xl text-gray-800 mb-4">Pencapaian Utama</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="bg-amber-100 p-2 rounded-full mr-3">
                <i class="fas fa-book text-amber-600"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">Pendidikan</h4>
                <p class="text-gray-600 text-sm">Berdirinya universitas pertama di Bologna (1088) dan Oxford (1096)</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-amber-100 p-2 rounded-full mr-3">
                <i class="fas fa-archway text-amber-600"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">Arsitektur</h4>
                <p class="text-gray-600 text-sm">Gaya arsitektur Gothic dengan katedral-katedral megah</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-amber-100 p-2 rounded-full mr-3">
                <i class="fas fa-ship text-amber-600"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">Eksplorasi</h4>
                <p class="text-gray-600 text-sm">Penjelajahan Marco Polo ke Asia (1271-1295)</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/katedral.jpg" alt="Katedral Gothic" class="rounded-lg shadow-md w-full h-full object-cover animate-float">
        </div>
      </div>
    `,
    bgImage: "assets/pertengahanbg.jpeg",
  },
  {
    title: "Revolusi Industri",
    year: "1760 - 1840 M",
    image: "assets/industri.jpg",
    description: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="assets/mesinuap.jpg" alt="Mesin Uap" class="rounded-lg shadow-md w-full animate-float">
        </div>
        <div>
          <p class="text-gray-700 mb-4">Munculnya mesin dan pabrik mengubah cara manusia bekerja dan hidup. Produksi massal menjadi mungkin, transportasi berkembang pesat, dan urbanisasi terjadi secara besar-besaran.</p>
          
          <div class="bg-gray-800 text-white p-4 rounded-lg">
            <h3 class="font-bold text-amber-300 mb-2">Penemuan Penting:</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <i class="fas fa-cog text-amber-300 mr-2"></i>
                <span>Mesin uap James Watt (1776)</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-train text-amber-300 mr-2"></i>
                <span>Lokomotif uap pertama (1804)</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-bolt text-amber-300 mr-2"></i>
                <span>Pembangkit listrik pertama (1882)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
    bgImage: "assets/eraindustri.jpg",
  },
  {
    title: "Era Digital",
    year: "1950 - Sekarang",
    image: "assets/eradigital.jpg",
    description: `
      <div class="space-y-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white p-3 rounded-lg shadow-sm text-center">
            <i class="fas fa-laptop-code text-4xl text-blue-500 mb-2"></i>
            <h3 class="font-semibold">Komputer</h3>
          </div>
          <div class="bg-white p-3 rounded-lg shadow-sm text-center">
            <i class="fas fa-globe text-4xl text-green-500 mb-2"></i>
            <h3 class="font-semibold">Internet</h3>
          </div>
          <div class="bg-white p-3 rounded-lg shadow-sm text-center">
            <i class="fas fa-mobile-alt text-4xl text-purple-500 mb-2"></i>
            <h3 class="font-semibold">Smartphone</h3>
          </div>
          <div class="bg-white p-3 rounded-lg shadow-sm text-center">
            <i class="fas fa-robot text-4xl text-red-500 mb-2"></i>
            <h3 class="font-semibold">AI</h3>
          </div>
        </div>
        
        <p class="text-gray-700">Komputer, internet, dan AI mendominasi dunia modern dan mempercepat pertukaran informasi. Revolusi digital mengubah hampir semua aspek kehidupan manusia, dari komunikasi hingga bisnis.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 class="font-bold text-blue-800 mb-2">Fakta Cepat:</h3>
          <ul class="text-blue-700 space-y-1">
            <li>Internet pertama (ARPANET) - 1969</li>
            <li>World Wide Web ditemukan - 1989</li>
            <li>Smartphone pertama (IBM Simon) - 1994</li>
            <li>AI mengalahkan juara catur (Deep Blue) - 1997</li>
          </ul>
        </div>
      </div>
    `,
    bgImage: "assets/earth-glow.jpg",
  },
  {
    title: "Tim Kami",
    year: "2025",
    image: "",
    description: `
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Tim Pengembang</h2>
        <p class="text-gray-600">Empat individu berbakat di balik proyek ini</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="team-card bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
          <div class="team-avatar w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-100">
            <img src="assets/zaky.jpg" alt="zaky" class="w-full h-full object-cover ">
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-1">Zaky Zaidan Akmal Wahyudi</h3>
          <p class="text-amber-600 font-medium mb-2">2305176057</p>
          <p class="text-gray-600 text-sm">Tenggarong</p>
          <div class="flex justify-center space-x-3 mt-4 ">
          </div>
        </div>
        
        <div class="team-card bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
          <div class="team-avatar w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-100">
            <img src="assets/nuril.JPG" alt="nuril" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-1">Nuril Rahmadian Hidayat</h3>
          <p class="text-amber-600 font-medium mb-2">2305176058</p>
          <p class="text-gray-600 text-sm">Tenggarong</p>
          <div class="flex justify-center space-x-3 mt-4">
          </div>
        </div>
        
        <div class="team-card bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
          <div class="team-avatar w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-100">
            <img src="assets/daru.JPG" alt="daru" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-1">Raden Handaru Nugraha Samudera</h3>
          <p class="text-amber-600 font-medium mb-2">2305176051</p>
          <p class="text-gray-600 text-sm">Samarinda</p>
          <div class="flex justify-center space-x-3 mt-4">
          </div>
        </div>
        
        <div class="team-card bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
          <div class="team-avatar w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-100">
            <img src="assets/gading.JPG" alt="gading" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-1">Gading Azmi Marpaung</h3>
          <p class="text-amber-600 font-medium mb-2">2305176044</p>
          <p class="text-gray-600 text-sm">Samarinda</p>
          <div class="flex justify-center space-x-3 mt-4">
          </div>
        </div>
      </div>
      
      <div class="mt-10 pt-6 border-t border-gray-200 text-center">
        <p class="text-gray-600">&copy; 2025 Perjalanan Peradaban Manusia. Semua hak dilindungi.</p>
      </div>
    `,
    bgImage: "assets/unmul.jpg",
  },
];

let currentStage = 0;
let isMusicPlaying = false;
const bgMusic = document.getElementById("bgMusic");

// Initialize music volume
bgMusic.volume = 0.2;

// Main functions
function startJourney() {
  document.getElementById("beranda").classList.add("hidden");
  document.getElementById("slide-container").classList.remove("hidden");
  document.getElementById("btnHome").classList.remove("hidden");
  document.getElementById("navigation-buttons").classList.remove("hidden");
  document.getElementById("progress-container").classList.remove("hidden");
  document.getElementById("btnVideo").classList.remove("hidden");
  renderProgressDots();
  scrollToStage();
}

function goHome() {
  document.getElementById("beranda").classList.remove("hidden");
  document.getElementById("slide-container").classList.add("hidden");
  document.getElementById("btnHome").classList.add("hidden");
  document.getElementById("navigation-buttons").classList.add("hidden");
  document.getElementById("progress-container").classList.add("hidden");
  document.getElementById("btnVideo").classList.add();
  currentStage = 0;
}

// Video modal functions
function showVideo() {
  document.getElementById("videoModal").classList.remove("hidden");
}

function closeVideo() {
  document.getElementById("videoModal").classList.add("hidden");
}

// Music control
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    document.getElementById("musicToggle").innerHTML =
      '<i class="fas fa-volume-up text-gray-700 group-hover:text-amber-600"></i>';
  } else {
    bgMusic.pause();
    document.getElementById("musicToggle").innerHTML =
      '<i class="fas fa-volume-mute text-gray-700 group-hover:text-amber-600"></i>';
  }
  isMusicPlaying = !isMusicPlaying;
}

// Slide rendering
function renderStages() {
  const container = document.getElementById("slide-container");
  container.innerHTML = "";

  stages.forEach((stage, index) => {
    const div = document.createElement("div");
    div.className =
      "slide min-w-full h-full flex-shrink-0 snap-start flex items-center justify-center px-4";
    div.style.backgroundImage = `url('${stage.bgImage}')`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";

    div.innerHTML = `
      <div class="slide-content">
        ${
          stage.image
            ? `
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 font-serif mb-2">${
                stage.title
              }</h2>
              ${
                stage.year
                  ? `<p class="text-lg text-amber-600 italic mb-4">${stage.year}</p>`
                  : ""
              }
              ${stage.description}
            </div>
            <div class="flex-1 flex justify-center">
              <img src="${stage.image}" alt="${
                stage.title
              }" class="max-h-96 rounded-lg shadow-lg object-contain">
            </div>
          </div>
        `
            : stage.description
        }
      </div>
    `;
    container.appendChild(div);
  });
}

// Progress dots
function renderProgressDots() {
  const container = document.getElementById("progress-container");
  container.innerHTML = "";

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "flex space-x-2";

  stages.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = `progress-dot ${index === currentStage ? "active" : ""}`;
    dot.addEventListener("click", () => {
      currentStage = index;
      scrollToStage();
    });
    dotsContainer.appendChild(dot);
  });

  container.appendChild(dotsContainer);
}

function updateProgressDots() {
  const dots = document.querySelectorAll(".progress-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentStage);
  });
}

// Navigation
function scrollToStage() {
  const container = document.getElementById("slide-container");
  const slides = container.querySelectorAll(".slide");

  if (slides[currentStage]) {
    slides[currentStage].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  document.getElementById("stage-indicator").textContent = `${
    currentStage + 1
  } / ${stages.length}`;
  updateProgressDots();
}

function nextStage() {
  if (currentStage < stages.length - 1) {
    currentStage++;
    scrollToStage();
  }
}

function prevStage() {
  if (currentStage > 0) {
    currentStage--;
    scrollToStage();
  }
}

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 30;

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;
  if (deltaX < -swipeThreshold) nextStage();
  if (deltaX > swipeThreshold) prevStage();
}

// Mobile height adjustment
function adjustSlideHeights() {
  if (window.innerWidth <= 768) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      const content = slide.querySelector(".slide-content");
      if (content) {
        slide.style.height = `${content.offsetHeight + 100}px`;
      }
    });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderStages();
  adjustSlideHeights();

  // Enable audio after interaction
  const enableAudio = () => {
    bgMusic.muted = false;
    document.removeEventListener("click", enableAudio);
    document.removeEventListener("keydown", enableAudio);
    document.removeEventListener("touchstart", enableAudio);
  };

  document.addEventListener("click", enableAudio);
  document.addEventListener("keydown", enableAudio);
  document.addEventListener("touchstart", enableAudio);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextStage();
    else if (e.key === "ArrowLeft") prevStage();
  });

  // Touch events
  const slideContainer = document.getElementById("slide-container");
  slideContainer.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  slideContainer.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );
});

// Window resize handler
window.addEventListener("resize", adjustSlideHeights);

// Close video when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("videoModal")) {
    closeVideo();
  }
});
