import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// scroll
export default function gsapScroll() {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
        ease: "power3.out", //curva velocidad suave(power2) y desacelera al final(out) HAY MÁS
        scrollTrigger: {
            trigger: ".container",
            scrub: 2,  // tiempo para adaptarse el scroll (por eso no se usa true y si 1 seg retardo)
            pin: true,
            start: "top top",
            end: "+=2000",
            onRefreshInit: () => {
                gsap.set("#logo-mask", { maskPosition: "center 50%" });
            }
        },
    })

    /*tl // timeline
        .to("#hero-key", { duration: 2, scale: 1 }) //{ opacity: 0, duration: 1 } para que se desvanezca antes de terminar el scroll
        .to("#hero-key-logo", { opacity: 0 }, "<") //se pone < para que lo haga a la vez que la anterior 
        .to("#hero-footer", { opacity: 0 }, "<")
        .to("#hero-play-button", { opacity: 0 }, "<")				   // HAY MÁS TIPOS DE MÁSCARAS EN EL VÍDEO PÁGINAS!! min 54 
        .to("#logo-mask", { maskPosition: "center 50%"} , 0) //valores iniciales de la animación y 0.1 cuando tiene que empezar
        .to("#logo-mask", { maskSize: "clamp(20vh, 25%, 30vh)", maskPosition: "center 15%", duration: 2, ease: "power2.out" }, 0.2) //valores finales de la animación y 0.15 cuando tiene que empezar
        .to("#hero-key", { opacity: 0, duration: 0.2} , 0.4)*/




    tl
        .set("#logo-mask", {maskPosition: "center 50%"}, 0)
        .to("#logo-mask", { maskSize: "clamp(20vh, 25%, 30vh)", duration: 1,}, 0)
        .to("#logo-mask", { maskPosition: "center 15%", duration: 1,}, 0.5)
        .to("#hero-key", { scale: 1, duration: 1}, 0)
        .to("#hero-key-logo", { opacity: 0 }, "<")
        .to("#hero-footer", { opacity: 0 }, "<")
        .to("#hero-play-button", { opacity: 0 }, "<")
        .to("#hero-key", { opacity: 0, duration: 0.2 }, 0.67);
}
        

