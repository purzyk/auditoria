import SmoothScroll from './js/smoothScroll'
import SlickCarousell from './js/SlickCarousell'
import HamburgerMenu from './js/HamburgerMenu'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
import 'slick-carousel'
import $ from 'jquery'

$(() => {
  new SmoothScroll()
  new SlickCarousell()
  new HamburgerMenu()
})
