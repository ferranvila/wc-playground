import { LitElement, html, customElement, property } from 'lit-element'

@customElement('my-element')
export class MyElement extends LitElement {
    @property({ type: String }) foo = 'foo'

    render() {
        return html`
            <p>${this.foo}</p>
            <slot name="one"></slot>
            <slot name="two"></slot>
        `
    }
}
