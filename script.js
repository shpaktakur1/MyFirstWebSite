
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
    
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movelist = document.querySelector('.promo__interactive-list');


// var ReplaceBackground = function(){
//     document.body.style.background = 'url(C://Users//1234567//Desktop//bg.jpg)';
// }

// document.addEventListener("DOMContentLoaded", ReplaceBackground);

adv.forEach(item =>{
    item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("C://Users//PRO100VANO//Desktop//bg.jpg")';

movelist.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

