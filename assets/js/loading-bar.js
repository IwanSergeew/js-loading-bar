class LoadingBar {
    #percent = 0;
    constructor({
        id,
        color = 'green'
    }) {
        if(!id) return;
        this.el = document.getElementById(id);
        if(!this.el) return;
        this.color = color;
        this.inner = document.createElement('div');
        this.inner.classList = 'loading-inner';
        this.inner.style = '--percent: 0;';
        this.el.append(this.inner);
    }

    getCurrent = () => {
        return this.#percent;
    }

    update = (percent) => {
        this.#percent = percent;
        this.inner.style = `background-color: ${this.getBarColor()}; --percent: ${percent};`;
    }

    add = (percent) => {
        this.#percent += percent;
        if(this.#percent > 100) this.#percent = 100;
        this.inner.style = `background-color: ${this.getBarColor()}; --percent: ${this.#percent};`;
    }

    getBarColor = () => {
        if(typeof(this.color) == 'string') return this.color;
        const color = this.color.find(c => c.max >= this.#percent);
        return color ? color.use : this.color[this.color.length-1].use;
    }
}