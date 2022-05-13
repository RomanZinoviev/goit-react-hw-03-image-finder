import { Component } from 'react';

export class Searchbar extends Component {
    state = {
      value:""
    };
    inputHandler = (e) => {
        this.setState({ value: e.target.value })
    };
    submitHandler = (e) => {
      e.preventDefault();
      if (this.state.value.trim() === "") {
        alert("Write something")
        return
      }
        this.props.onSubmit(this.state.value);        
        this.reset()
    };
    reset() {
        this.setState({ value: "" });
    };
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button" onClick={this.submitHandler}>
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
                    type="text"
                    value={this.state.value}
                    onChange={this.inputHandler}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
