import flatpickr from 'flatpickr';
import swal from 'sweetalert';
import * as d3 from 'd3';
import _ from 'lodash';
import $ from 'jquery';
import toastr from 'toastr';
// import * as dragula from 'dragula';
import interact from 'interact';
import 'ckeditor';
import humane  from 'humane-js';

export class App {
  constructor() {
    this.message = 'Hello World!';
    this.lodashMsg = 'Lodash calculating 5 + 6 = ' + _.add(5, 6);
  }

  attached() {
    flatpickr(this.target);

    this.d3();
    // this.dragula();
    this.interactjs();
    this.ckeditor();
  }

  interactjs() {
    interact('.interactjs_draggable')
    .draggable({
      onmove: this.dragMoveListener,
    });
  }

  ckeditor() {
    // CKEDITOR.replace(this.ckeditor_target);
  }

  dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

  sweetalert() {
    swal('Sweetalert works');
  }

  humane() {
    humane.log('Welcome Back');
  }

  toastr() {
    toastr.success('Toastr is working');
  }

  jquery() {
    $(this.red).toggle();
  }

  d3() {
    let data = [4, 8, 15, 16, 23, 42];

    let dthree = d3;

    var x = dthree.scaleLinear()
        .domain([0, dthree.max(data)])
        .range([0, 420]);

    dthree.select(".chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; });	
  }

  dragula() {
    dragula([document.getElementById(this.dragula_target)]);
  }
}
