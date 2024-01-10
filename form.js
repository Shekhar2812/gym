let form = document.getElementById('form');
console.log(form)

let open = document.getElementById('open');
let close = document.getElementById('close')
console.log(open)
// open.onclick = () =>{
//     form.classList.toggle('active')
    
    
// }
open.addEventListener('click',  () =>{
form.showModal()
})
close.addEventListener('click',  () =>{
    form.close()
    })
// open.addEventListener('click', function () {
//     form.style.display = 'none';
   
// })
// open.addEventListener('click', function () {
//     form.style.display = 'block';
    
// })

