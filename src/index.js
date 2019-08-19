class TestComp {
    constructor(el, options) {
        this.el = el;
        this.options = options;
        this.render();
        this.render();
        this.render();
    }


    render() {
        this.el.innerHTML = 'demo component';
    }
}

export default TestComp;