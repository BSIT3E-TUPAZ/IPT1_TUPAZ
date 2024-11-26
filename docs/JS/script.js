function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function explore() {
    window.location.href = "#gallery";
}

function playVideo() {
    alert("Play Video button clicked!");
}