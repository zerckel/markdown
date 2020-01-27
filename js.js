let app = new Vue({
  el: '#app',
  data: {
    content: '',
    render: ''
  },
  watch:{
    content: function () {
             this.render = marked(this.content)
    }
  }
})