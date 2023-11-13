const contactEmail = atob("aW5mb0BjdGJmLnBhcnRuZXJz");
const emailLinks = document.querySelectorAll('[data-contact-email]');
emailLinks.forEach(link => {
    link.onmouseover = link.ontouchstart = () => link.setAttribute('href', 'mailto:'+contactEmail);
});
const emailTexts = document.querySelectorAll('[data-contact-email-print]');
emailTexts.forEach(link => {
    link.textContent = contactEmail;
});

const contactPhone = atob("");
const phoneLinks = document.querySelectorAll('[data-contact-phone]');
phoneLinks.forEach(link => {
    link.onmouseover = link.ontouchstart = () => link.setAttribute('href', 'tel:'+contactPhone.replace(/ /g, ''));
});
const phoneTexts = document.querySelectorAll('[data-contact-phone-print]');
phoneTexts.forEach(link => {
    link.textContent = contactPhone;
});
