let images = document.images;
let imagesTotlalCount = images.length;
let imagesLoadedCount = 0;
let percDisplay = document.getElementById('load_perc');
let preloader = document.getElementById('page-preloader');
document.body.style.overflow = 'hidden';
for(let i = 0; i < imagesTotlalCount; i++){
   let  images_clone = new Image();
   images_clone.onload = images_loaded;
   images_clone.onerror = images_loaded;
   images_clone.src = images[i].src;
}


function images_loaded(){
    imagesLoadedCount++;
    percDisplay.innerHTML = (((100/imagesTotlalCount)*  imagesLoadedCount)<< 0) + '%';
    if(imagesLoadedCount >= imagesTotlalCount){
        setTimeout(function(){
            if(!preloader.classList.contains('done')){
                preloader.classList.add('done');
                document.body.style.overflow = 'visible';
            }
        }, 1000)
    }
}
