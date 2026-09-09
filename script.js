const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn) menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
 
const messages = {
  support: "Pour le support : regarde les expériences Saint Maclou, Decathlon, Crédit Agricole et Auchan, notamment le support utilisateurs, les incidents et la proximité.",
  systemes: "Pour les systèmes & réseaux : regarde Cisco Meraki, Azure, WorkspaceOne, Active Directory, Linux, les migrations de switchs et les environnements techniques.",
  exploitation: "Pour l’exploitation : regarde surtout Boulanger, avec la supervision Grafana/Karma, les flux, les jobs AS/400, la mise en production et les incidents critiques 24/7.",
  polyvalent: "Pour un profil polyvalent : mon parcours couvre support, proximité, systèmes & réseaux, exploitation, formation et amélioration continue."
};
 
document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.choice').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.getElementById('recommendation').innerHTML = '<b>Pour vous :</b> ' + messages[filter];
    document.querySelectorAll('.job').forEach(job => {
      job.style.opacity = (filter === 'polyvalent' || job.dataset.tags.includes(filter)) ? '1' : '.28';
      job.style.transform = (filter === 'polyvalent' || job.dataset.tags.includes(filter)) ? 'translateX(0)' : 'translateX(5px)';
    });
    document.getElementById('parcours').scrollIntoView({behavior:'smooth', block:'start'});
  });
});
 
const contactToggle = document.getElementById('contact-toggle');
const contactPopover = document.getElementById('contact-popover');
if (contactToggle && contactPopover) {
  contactToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = contactPopover.classList.toggle('open');
    contactToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', (e) => {
    if (!contactPopover.contains(e.target) && e.target !== contactToggle) {
      contactPopover.classList.remove('open');
      contactToggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      contactPopover.classList.remove('open');
      contactToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
