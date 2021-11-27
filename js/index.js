// const addBookmarkInNavItem = () => {
//     let elements = document.querySelectorAll('.nav-item');
//     elements.forEach(element => {
//         // console.log(element);
//         let div = document.createElement('DIV');
//         div.classList.add('nav-item__bookmark');
//         let navItemLink = element.querySelector('.nav-item__link');
//         // console.log(navItemLink);
//         div.style.width = '10px';
//         div.style.height = '10px';
//         div.style.backgroundColor = '#FFFF00';
//         // element.appendChild(div);
//         element.insertBefore(div, navItemLink);
//     });
// }

const equalHeightCards = () => {
    const sectionWithCardsArray = sectionsWithCards();
    // console.log('sectionWithCardsArray = ', sectionWithCardsArray);

    sectionWithCardsArray.forEach(section => {
        let maxHeight = 0;
        section.forEach(card => {
            // console.log(card);
            const cardHeight = card.offsetHeight;
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        });        
        // console.log(maxHeight);
        
        section.forEach(card => {
            card.style.height = maxHeight + 'px';
        })
    });
}

const sectionsWithCards = function() {
    const sectionsHTMLCollection = document.getElementsByTagName('section');
    // console.log('sectionsHTMLCollection =', sectionsHTMLCollection);

    const sectionsArray = Array.prototype.slice.call(sectionsHTMLCollection);
    // console.log('sectionsArray =', sectionsArray);

    const onlySectionsIdArray = sectionsArray.map(el => el.id);
    // console.log('onlySectionsIdArray = ', onlySectionsIdArray);

    const onlyFilteredSectionsIdArray = onlySectionsIdArray.filter(el => el !== 'carousel');
    // console.log('onlyFilteredSectionsIdArray = ', onlyFilteredSectionsIdArray);

    const sectionsWithCardsHTMLCollection = onlyFilteredSectionsIdArray.map(el => document.querySelectorAll(`#${el} .card`));

    // console.log('sectionsWithCardsHTMLCollection = ', sectionsWithCardsHTMLCollection);

    const sectionsWithCardsNodeListArray = Array.prototype.slice.call(sectionsWithCardsHTMLCollection);
    // console.log('sectionsWithCardsNodeListArray = ', sectionsWithCardsNodeListArray);

    const sectionsWithCardsArray = sectionsWithCardsNodeListArray.map(el => Array.prototype.slice.call(el));
    // console.log('sectionsWithCardsArray = ', sectionsWithCardsArray);

    return (sectionsWithCardsArray);
}