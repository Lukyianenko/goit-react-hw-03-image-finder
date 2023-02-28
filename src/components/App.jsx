import { Component } from "react";
import Searchbar from './SearchImg/Searchbar';
import css from './SearchImg/styles.module.css';

// const API_KEY = '33017005-3089560dbf89e85a2a48421c2';

class App extends Component {
  state = {
    searchName: '',
  }

  onSubmitSaveName = (search) => {
    const normilizedName = search.name.toLowerCase().trim();
    if(normilizedName === '') {
      alert('Please, enter a search name');
      return
    }
    this.setState({
      searchName: normilizedName
    })
  }

  render() {
    return (
      <div className={css.App}>

  <Searchbar onSubmit={this.onSubmitSaveName}/>
      </div>
    );
  }
  
};

export default App;