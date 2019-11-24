//----------------------Timer-----------------------------
//------------------------ES5-----------------------------

function Clock({ template }) {

  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

//------------------------ES6-----------------------------

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
    this.render = this.render.bind(this, this.render);
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  start() {
    console.log('timer has started');
    this.render();
    this.timer = setInterval(this.render, 1000);
  }

  stop() {
    clearInterval(this.timer);
    console.log('timer has stoped');
  }
}

const clock = new Clock({ template: 'h:m:s' });
clock.start();


//----------------------------------------------------------------

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(props) {
        super(props.selector)
        this.$el.style.width = props.size + 'px'
        this.$el.style.height = props.size + 'px'
        this.$el.style.backgroundColor = props.color
    }
}

const box = new Box({
    selector: '#box1',
    size: 100,
    color: '#000'
})

class Circle extends Box {
    constructor(props) {
        super(props)
        this.$el.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '#box2',
    size: 50,
    color: 'green'
})
//----------------------------------------------------------------

class Animal {
    static type = 'ANIMAL'

    constructor(props) {
        this.name = props.name
        this.age = props.age
        this.hasTail = props.hasTail
    }

    voice() {
        console.log(`I'm an animal named ${this.name}`);
    }
}

const animal = new Animal({
    name: 'Barsik',
    age: 2,
    hasTail: true
})

class Cat extends Animal {
    static type = 'CAT'
    constructor(props) {
        super(props)
        this.color = props.color
    }

    voice() {
        super.voice()
        console.log(`I'm a cat`)
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Begemot',
    age: 3,
    hasTail: true,
    color: 'black'
})
