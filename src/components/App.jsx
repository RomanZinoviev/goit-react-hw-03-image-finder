import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import axios from "axios";
export class App extends Component {
  state = {
    imgName: "",
    page: 1,
    imgArray:null
  };  
  componentDidUpdate(prevProps, prevState) {
     const API_KEY = "25728701-c83c0487db4f1d7b899af3be5";
    const API_GET = "https://pixabay.com/api/?";   
    if (prevState.page !== this.state.page||prevState.imgName!==this.state.imgName)
    {axios.get(`${API_GET}q=${this.state.imgName}&key=${API_KEY}&page=${this.state.page}image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => this.setState({ imgArray: res.data.hits }))
      .catch(err => console.log(err));}
    // if (prevState.page !== this.state.page) {
    //   axios.get(`${API_GET}q=${this.state.imgName}&key=${API_KEY}&page=${this.state.page}image_type=photo&orientation=horizontal&per_page=12`)
    //     .then(res => this.setState((prev) => {
    //     return {imgArray:[...prev.imgArray, ...res.data.hits ]}
    //   }))
    //   .catch(err => console.log(err));
    // }
    
  }
  submitHandler = value => {
    this.setState({
      imgName: value,
    });
  };
  handleButton = (page) => {
    page = this.state.page;
    page += 1;
    this.setState({ page });
    const API_KEY = "25728701-c83c0487db4f1d7b899af3be5";
    const API_GET = "https://pixabay.com/api/?";       
    axios.get(`${API_GET}q=${this.state.imgName}&key=${API_KEY}&page=${this.state.page}image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => this.setState((prev) => {
        return {imgArray:[...prev.imgArray, ...res.data.hits ]}
      }))
      .catch(err => console.log(err));
    
  }
  render() {    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.submitHandler} />
        {this.state.imgArray && <ImageGallery array={this.state.imgArray} />}
        {this.state.imgArray && <Button page={this.state.page} handleButton={this.handleButton} />}
        <Loader/>
      </div>
    );
  }
}
