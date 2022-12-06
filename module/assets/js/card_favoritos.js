class card extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.bgcolor = '#E7A200'
        this.image = 'Sem Imagem'
        this.nome = 'Nome do Produto'
        this.descricao = ''
        this.preco = ''
        this.id = ''
    }
    static get observedAttributes(){
        return ['bgcolor', 'image', 'nome','descricao', 'preco', 'id']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        //this.[nameAttr] = newValue

        if (nameAttr === 'bgcolor') {
            this.bgcolor = newValue
        } else if (nameAttr === 'image') {
            this.image = newValue
        } else if (nameAttr === 'nome') {
            this.nome = newValue
        } else if (nameAttr === 'descricao') {
            this.descricao = newValue
        } else if (nameAttr === 'preco') {
            this.preco = newValue
        } else if (nameAttr === 'id') {
            this.id = newValue
        }
    }

    connectedCallback(){
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles());
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = 
        `
            .card_favoritos{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                background-color: #E7A200;
                height: 420px;
                width: 410px;
                border-radius: 20px;
                padding: 25px;
            }
            .card_favoritos:hover .number_card{
                color: #d03012;
                transition: 0.5s;
            }
            .card_favoritos img{
                height: 220px;
                border-radius: 12px;
            }
            .txt_card{
                color: white;
                font-family: 'Roboto', sans-serif;
                gap: 5px;
                font-size: 20px;
            }
            .number_card{
                display: flex;
                justify-content: flex-end;
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: 38px;
                font-weight: 800;
            }
        `
        return style;
    }

    component(){
        const card = document.createElement('div');
        card.classList.add('card_favoritos');
        card.innerHTML = 
        `
        <img src="${this.image}" alt="">
        <div class="txt_card">
            <h1 class="name">${this.nome}</h1>
            <span class="description">${this.descricao}</span>
        </div>
        <div class="number_card">
            <span class="price">${this.preco}</span>
        </div>

        `
        return card;
    }
}
customElements.define('card_favoritos', card)