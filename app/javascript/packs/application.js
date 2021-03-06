// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// Packs
require("./components/TodoApp")

// Bootstrap
require('bootstrap')
import 'bootstrap/dist/css/bootstrap'

var jQuery = require('jquery')
// include jQuery in global and window scope (access it globally)
// $('.div') is actually refering to global.$('.div')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

// Font Awesome
import '@fortawesome/fontawesome-free/js/all'
import '@fortawesome/fontawesome-free/css/all'

// Charts
require("chartkick")
require("chart.js")

// Stimulus
import "controllers"

// Action View
require("trix")
require("@rails/actiontext")
// trix-editor-overrides.js
window.addEventListener("trix-file-accept", function(event) {
  event.preventDefault()
  alert("File attachment not supported")
  console.log('File attachment not supported')
})

// console.log('application js firing')
