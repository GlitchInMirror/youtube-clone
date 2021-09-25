import React from 'react';

class SearchBar extends React.Component {

    
    state = {
        query : '',
    }

    onFormSubmit = (event)=>{

        event.preventDefault();
        this.props.onSubmit(this.state.query);
        
        

        
    }


    render() {
        return (
        <div className="ui segment">
            
            <form className="ui form" onSubmit={this.onFormSubmit}>

                <div className="field">
                        <label>Search Youtube Video</label>
                        <input type="text" 
                            value={this.state.query}
                            onChange={(e)=> {this.setState({query:e.target.value})}}
                            placeholder="Search"/>
                </div>

            </form>
            
        </div>
      );
    }

}

export default SearchBar;