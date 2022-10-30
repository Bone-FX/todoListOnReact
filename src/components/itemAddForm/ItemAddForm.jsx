import React, {Component} from "react";




class ItemAddForm extends Component {

    state = {
        label: '',

    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,

        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const {label} = this.state
        this.props.onAddItem(label)
        this.setState( {
            label: '',

        })

    }



    render() {
        return <form
        onSubmit={this.onSubmit}>
            <input
                type="text"
                value={this.state.label}
                onChange={this.onLabelChange}
            />
            <button >Добавить задание</button>
        </form>
    }

}




export default ItemAddForm