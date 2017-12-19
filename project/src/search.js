import React, { Component } from 'react';

const Search ({data, callback}) => {

    const { data, callback } = props;



  render() {
    const { search, sort } = this.state;
    return (
      <form>
        <input
          className="form-control"
          type="search"
          name="search"
          onChange={this.onSubmit}
        />
        <select className="form-control" name="sort" onChange={this.onSubmit}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }
}

export default Search;
