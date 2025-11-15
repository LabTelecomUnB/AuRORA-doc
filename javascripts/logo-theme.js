document$.subscribe(function() {
    const logoElement = document.getElementById('theme-logo');
    if (!logoElement) return;

    const lightLogo = 'assets/images/logo-light.png';
    const darkLogo = 'assets/images/logo-dark.png';

    function updateLogo() {
        const currentScheme = document.body.getAttribute('data-md-color-scheme');
        if (currentScheme === 'slate') {
            logoElement.src = darkLogo;
        } else {
            logoElement.src = lightLogo;
        }
    }

    // Update logo on load
    updateLogo();

    // Update logo when theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-md-color-scheme') {
                updateLogo();
            }
        });
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['data-md-color-scheme']
    });
});