const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");
const bodyEl = document.querySelector("body");
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

sunIcon.addEventListener("click", () => {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    bodyEl.classList.add('dark');
    bodyEl.classList.add('bg-gray-900');
});
moonIcon.addEventListener('click', () => {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
    bodyEl.classList.remove('dark');
    bodyEl.classList.remove('bg-gray-900');
});

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('w-0', 'pointer-events-none');
    mobileMenu.classList.add('w-full', 'pointer-events-auto');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('w-0', 'pointer-events-none');
    mobileMenu.classList.remove('w-full', 'pointer-events-auto');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('w-0', 'pointer-events-none');
        mobileMenu.classList.remove('w-full', 'pointer-events-auto');
    });
});