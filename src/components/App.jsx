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
    imgArray: null,
    largeImg: null,
    status: "idle",
    error: null,
    showModal:false
  };  
  componentDidUpdate(prevProps, prevState) {
     const API_KEY = "25728701-c83c0487db4f1d7b899af3be5";
    const API_GET = "https://pixabay.com/api/?"; 
    
    if (prevState.imgName !== this.state.imgName) {
      this.setState({ status: "pending" })
      axios.get(`${API_GET}q=${this.state.imgName}&key=${API_KEY}&page=${this.state.page}image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => this.setState({ imgArray: res.data.hits, status:"resolved" }))
      .catch(err => this.setState({error:err, status:"rejected"}));
    }
    if (prevState.page !== this.state.page) {
      this.setState({status:"pending"})
      axios.get(`${API_GET}q=${this.state.imgName}&key=${API_KEY}&page=${this.state.page}image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => this.setState(prev=>({imgArray:[...prev.imgArray, ...res.data.hits], status:"resolved"})))
      .catch(err => this.setState({error:err, status:"rejected"}));
    }
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  };
  submitHandler = value => {
    this.setState({
      imgName: value,
    });
  };
  handleButton = () => {
    this.setState(prevState=>({page:prevState.page+=1}))    
        // return { imgArray: [...prev.imgArray, ...res.data.hits] }   
  };
  handleForModal = (e) => {    
    this.setState({ largeImg: e.target.alt });
    this.toggleModal()
    }
  render() {    
    const{status, error, imgArray, largeImg, page, showModal}=this.state
    if (status === "idle") {
      return <Searchbar onSubmit={this.submitHandler} />
    };
    if (status === "pending") {
     return (<><Loader /><p>Loading...</p></>)
    };
    if (status === "rejected") {
      return(<><p>{error}</p></>)
    };
    if (status === "resolved") {
      return (<><Searchbar onSubmit={this.submitHandler} />
        <ImageGallery array={imgArray} onClick={this.handleForModal} />
        {imgArray&&<Button page={page} handleButton={this.handleButton} />}
        {showModal&&<Modal largeImg={largeImg} onClose={this.toggleModal}/>}</>)
    };    
  }
}
