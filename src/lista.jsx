import React from 'react';  /** Se hace la importacion de React que es obligatoria en todos los componentes */

export default class ListaApp extends React.Component {  /** Se define la clase que construye nuestro componente padre*/
    constructor(props) {        /** Lineas obligatorias despues te explico por que */
        super(props);
        this.state = { items: [], texto: '' };      /** Se asigna un estado incial vacio (El cual va a cambiar y permitir que se actualice) */
        this.onChange = this.onChange.bind(this);   /** Se asignan los metodos a cada evento */
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {      
        return (
            <div>  
                {/* Se gnera el formulario y se le asiga el metodo al evento onSubmit */}
                <form onSubmit={this.onSubmit}> 
                    <label htmlFor="nueva">
                        Elemento a agregar
                    </label>
                    <br/>
                    {/* Se genera un input y se le asigna el metodo al evento onChange para que vaya guardando el contenido del input cada vez que este cambie */}
                    <input
                        id="nueva"
                        onChange={this.onChange}    
                        value={this.state.texto}
                    />
                    <br/>
                    <button>
                        Añadir elemento numero: {this.state.items.length + 1}
                    </button>
                </form>
                <h3>Lista Generada</h3>
                {/* Se escribe la lista con los elementos que contenga */}
                <Lista items={this.state.items} />
            </div>
        );
    }

    /** Se escribe el metodo que se ejecuta cada vez que el input cambia */
    onChange(e) {
        this.setState({ texto: e.target.value });   /** Aqui se guarda el valor del input en el la propiedad texto del estado */
    }

    /** Metodo que se ejecuta cuando el formulario hace submit o mejor dicho cuando se presiona el boton */
    onSubmit(e) {
        e.preventDefault();             /** Esto es para evitar que el formulario realice su comportamiento por defecto y que ejecute lo que nosotros le digamos */
        if (this.state.texto.length === 0) {     /** Se comprueba si se escrbio algo en el input, si no se escribio nada, termina la ejecucion del metodo */
            return;
        }
        /** Se crea el nuevo elemento a agregar en la lista */
        const nuevo = {
            texto: this.state.texto,   /** se le pasa el texto que recibimos del input */
            id: this.state.items.length + 1 /** Se le crea el id unico para ese elemento */
        };
        /** Se actualiza el estado del componente, agregando la lista con el componente nuevo para renderizar la vista */
        this.setState(state => ({
            items: state.items.concat(nuevo),
            texto: ''
        }));
    }
}

/** Se crea la lista */
class Lista extends React.Component {
    render() {
        return (
            <ul>
                {/* Se dibuja la lista de los elementos que vengan el el array items qye se le pasa */}
                {this.props.items.map(item => (
                    <li key={item.id}>{item.id} -- {item.texto}</li> /** Se crea un elemento li para para cada item del array y se le coloca el key que es para identificarlo en todo el DOM*/
                ))}
            </ul>
        );
    }
}

/** Y esto es todo amiwita :v mañana te explico antes de la expo  */