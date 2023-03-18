import { useState, useEffect } from 'react';
import CardList from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchBox';

import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);    
};

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))    
      .catch(err => console.log(err));
  }, [])

  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
 

  return(
    <div className="App">
        <h1 className='app-title'>Monster Roledex</h1>
        <SearchBox 
          searchChange={onSearchChange} 
          placeholder='Type the monster name' 
          className='monster-search-box' />
        <CardList monsters={filteredMonsters}/>
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],  
//       searchField: '',    
//     };
// }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return {monsters: users}  
//       }
//       ))
//       .catch(err => console.log(err))
//   };

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {return {searchField}})      
//   }; 

//   render() {

//     const {monsters , searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

   

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Roledex</h1>
//         <SearchBox 
//           searchChange={onSearchChange} 
//           placeholder='Type the monster name' 
//           className='monster-search-box' />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//  }
  
// }

export default App;
