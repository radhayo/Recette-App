import React, { Component } from 'react';

class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event =>{
        const { name, value } = event.target
        this.setState({ [name]: value })
    }



    render() {
        return (
            <div className= "card">
                < form className="admin-form ajouter-recette">
                    <input value = {this.state.nom} onChange={this.handleChange} name="nom" type="text" placeholder='Nom de la recette'/>
                    <input value = {this.state.image} onChange={this.handleChange} name="image" type="text" placeholder={'Nom de l\'image'}/>
                    <textarea value = {this.state.ingredients} onChange={this.handleChange} name="ingredients" placeholder='Liste des ingrédients'  rows="3"/>
                    <textarea value = {this.state.instructions} onChange={this.handleChange} name="instructions" placeholder='Liste des instructions'  rows="15"/>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;