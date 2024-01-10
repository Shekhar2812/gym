let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
console.log(navbar);

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
}

var imagesource = ["home-bg-1.jpg", 'home-bg-2.jpg'];
var index = 0;

setInterval(() => {
    if (index === imagesource.length) {
        index =0;
    }
    document.getElementById('image').src = imagesource[index];
index++;
}, 3000);

const counters = document.querySelectorAll(".count");
console.log("Its counter :" +  counters);

const speed = 40;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    //  getAttribute is give value of attribute("data-target") value is 15000

    const count = parseInt(counter.innerText);
// parseInt = The parseInt method parses a value as a string and returns the first integer.
    console.log(count)

    const increment = Math.trunc(target / speed);
    console.log("Increment : "+ increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 10);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});


// review

  



// 

// This is script file

$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:0,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:true
      },
      768:{
          items:2
      },
  }
})


function bmi() {
  var w= document.getElementById('weight').value;
  console.log(w)
        
  var h = document.getElementById('height').value;
var bmi = w / (h /100 * h / 100);
var total = bmi.toFixed(2);
document.getElementById('result').innerHTML = "Your BMI Is"+ total;

}
// var w= document.getElementById('weight').value;
//   console.log(w)
let btn = document.getElementById('btn');
console.log(btn)