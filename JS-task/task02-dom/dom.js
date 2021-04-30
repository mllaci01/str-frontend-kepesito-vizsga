function changeOuterLinks() {
    const aElements = document.querySelectorAll('nav#link-list a');
    aElements.forEach( elements => {
        if ( elements.innerHTML.includes('outer-link') ) {
            elements.target ='_blank';
            elements.innerHTML = `<strong>${elements.innerHTML}</strong>`;
        }
    });
    document.querySelectorAll("nav").forEach((navElement) => {
        navElement.style.display = "flex";
        navElement.style.flexDirection = "column";
        navElement.style.margin = "0px auto";
        navElement.style.width = "30%";
        navElement.style.border = "1px solid blue";
        navElement.style.padding = "16px";
      });
     
}

changeOuterLinks();



export { changeOuterLinks };