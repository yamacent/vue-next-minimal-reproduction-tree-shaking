import { createApp, compile } from 'vue'

// it works if the next line is un-commented
// console.log(compile)

createApp({
  template: '<div>hello</div>'
}).mount('#app')
