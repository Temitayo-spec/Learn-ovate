self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                // HTML
                "./",
                "signup_0.html",
                "signup_final_educator.html",
                "signup_final_student.html",
                // CSS
                "css/indexStyles2.css",
                "css/signup_0.css",
                "css/signup_final.css",
                "node_modules/bootstrap/dist/css/bootstrap.min.css",
                // JS
                "js/indexScript2.js",
                "js/signup_0.js",
                "js/signup_final.js",
                "node_modules/jquery/dist/jquery.slim.min.js",
                "node_modules/popper.js/dist/umd/popper.min.js",
                "node_modules/bootstrap/dist/js/bootstrap.min.js",
                // IMAGES
                "images/lv 5.png",
                "images/Component 1.png",
                "images/windows-nYObhCK1dmA-unsplash 1.png",
                "images/Ellipse 8.svg",
                "images/windows-H9oXWdbFw_Y-unsplash 2.png",
                "images/3421336 1.svg",
                "images/3421337 1.svg",
                "images/3808948 1.svg",
                "./images/3808949 1.svg",
                "./images/Ellipse 10.svg",
                "./images/Ellipse-FAQ-right.svg",
                "images/Ellipse\ 13.png",
                "images/Ellipse\ 14.png",
                "images/Ellipse\ 15.png",
                "images/Ellipse\ 12.png",
                "images/Ellipse 15.svg",
                "images/Ellipse 13.svg",
                "images/Ellipse 12.svg"
            ])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request); 
        })
        )
})

/* 
self.addEventListener('online', updateStatus)
self.addEventListener('offline', updateStatus)

function updateStatus(event){
    if(navigator.onLine){
        e.respondWith(
            caches.match(e.request).then(response => {
                return response || fetch(e.request); 
            })
        )
    } else{
        e.respondWith(
            caches.match(e.request).then(response => {
                return response || console.log("You are offline"); 
            })
        )
    }
}
 */