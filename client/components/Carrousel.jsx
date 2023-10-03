'use client'
import Image from 'next/image'

export default function Carrousel ({ picture }) {
  let slideIndex = 1
  showSlides(slideIndex)

  function plusSlides (n) {
    showSlides(slideIndex += n)
  }

  function currentSlide (n) {
    showSlides(slideIndex = n)
  }

  function showSlides (n) {
    let i
    const slides = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('dot')
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
  }
  return (
    <div>
      <div class='slideshow-container'>
        <div class='mySlides fade'>
          <div class='numbertext'>1 / 3</div>
          <Image src={picture} width='100%' height='100%' alt='picture-carrousel' />
        </div>
        <a class='prev' onclick={plusSlides(-1)}>❮</a>
        <a class='next' onclick={plusSlides(1)}>❯</a>
      </div>
      <br />
      <div style='text-align:center'>
        <span class='dot' onclick={currentSlide(1)} />
        <span class='dot' onclick={currentSlide(2)} />
        <span class='dot' onclick={currentSlide(3)} />
      </div>
    </div>
  )
}
