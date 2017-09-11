Vue.config.productionTip = false

Reveal.addEventListener( 'slidechanged', function( event ) {
  if (event.currentSlide.querySelector('#vue-example')) {
    addVueExample();
  }
} );

function addVueExample() {
  new Vue({
    el: '#vue-example',
    data: {
      x: 1,
      y: 1,
      doubleXCalled: 0,
      tripleYCalled: 0
    },
    computed: {
      doubleX: function () {
        console.log('Vue: Computing the double of X')
        this.doubleXCalled++;
        return 2 * this.x;
      },
      tripleY: function () {
        console.log('Vue: Computing the triple of Y')
        this.tripleYCalled++;
        return 3 * this.y;
      },
    },
    template: `
<div>
  <label>
    X =
    <input type="number" v-model="x" style="font-size: 1em;">
  </label>
  <div>
    2 * X = {{ doubleX }} ({{ doubleXCalled }})
  </div>
  <br>
  <label>
    Y =
    <input type="number" v-model="y" style="font-size: 1em;">
  </label>
  <div>
    3 * Y = {{ tripleY }} ({{ tripleYCalled }})
  </div>
</div>
  `
  })
}
