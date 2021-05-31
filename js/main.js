if ($(window).width() < 1024) {
   $('.why-section__row').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   });

}

$('.slider-row').slick({
   slidesToShow: 5,
   slidesToScroll: 3,
   prevArrow: '<button class="slick-btn slick-prev"><img src="img/left.svg" alt="prev"></button>',
   nextArrow: '<button class="slick-btn slick-next"><img src="img/right.svg" alt="next"></button>',
   dots: true,
   centerMode: true,
   focusOnSelect: true,
   responsive: [
      {
         breakpoint: 1224,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3
         }
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            focusOnSelect: false,
         }
      }
   ]
});


//  sending data to our server and then back to our client just for cheaking the option.
const message = {
   loading: 'Loading...',
   success: 'The request is sent',
   failure: 'Something went wrong...'
};

let path = './server.php';

const parentForm = document.querySelector('.request-row'),
   form = document.querySelector('.request-form');

const postData = async (url,data) => {
   let res = await fetch(url,{
      method: "POST",
      body: data
   });

   return await res.text();
};

form.addEventListener('submit',(e) => {
   e.preventDefault();

   let statusMessage = document.createElement('div');
   statusMessage.style.cssText = `
         margin-top: 15px;
         font-size: 18px;
         color: grey;
      `;
   parentForm.parentNode.appendChild(statusMessage);
   statusMessage.textContent = message.loading;

   const formData = new FormData(form);

   postData(path,formData)
      .then(res => {
         console.log(res);
         statusMessage.textContent = message.success;
      })
      .catch(() => {
         statusMessage.textContent = message.failure;
      });
});







