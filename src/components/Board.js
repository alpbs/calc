import React from 'react';


class Board extends React.Component {
  constructor(props) {
    super(props);

    this.propTypes = {};
    this.defaultProps = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.handleClean = this.handleClean.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {value: '', lastValue: ''};
  }

  render() {
    return (
      <div className="main">
        <div className="col-sm-12 expressao"> {this.state.value} </div>
        <div className="col-sm-3">
          <Cbutton id="btn-clean" handler={this.handleClean} value='C' />
        </div>
        <div className="col-sm-3">
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-div" handler={this.handleSubmit} value='/' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-delete" handler={this.handleDelete} value='delete' />
        </div>
        <div className="col-sm-3">
          <Cbutton id='btn-7' handler={this.handleSubmit} value='7' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-8" handler={this.handleSubmit} value='8' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-9" handler={this.handleSubmit} value='9' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-mult" handler={this.handleSubmit} value='*' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-4" handler={this.handleSubmit} value='4' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-5" handler={this.handleSubmit} value='5' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-6" handler={this.handleSubmit} value='6' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-min" handler={this.handleSubmit} value='-' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-1" handler={this.handleSubmit} value='1' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-2" handler={this.handleSubmit} value='2' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-3" handler={this.handleSubmit} value='3' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-plus" handler={this.handleSubmit} value='+' />
        </div>
        <div className="col-sm-3"> </div>
        <div id="btn-0" className="col-sm-3">
          <Cbutton id="btn-0" handler={this.handleSubmit} value='0' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-dot" handler={this.handleSubmit} value='.' />
        </div>
        <div className="col-sm-3">
          <Cbutton id="btn-equal" handler={this.handleCalc} value='=' />
        </div>
      </div>
    );
  }

  handleClean(e) {
    e.preventDefault();
    var newtext = ''
    this.setState((prevState) => ({ value: newtext }));
  }

  handleDelete(e) {
    e.preventDefault();
    if ( this.state.value.length > 0 ) {
      var newtext = this.state.value.slice(0, -1)
      this.setState((prevState) => ({ value: newtext }));
    }
  }


  handleSubmit(e) {
    console.log("Submit")
    e.preventDefault();
    var newtext = ''
    if ( this.state.value ) {
      newtext = this.state.value + e.target.value.toString()
    } else {
      newtext = e.target.value.toString()
    }
    this.setState((prevState) => ({ value: newtext }));
  }


  handleCalc(){
    var sumRegex = /\+/;
    var divisionRegex = /\//;
    var multRegex = /\*/;
    var subRegex = /-/;
    var exp = this.state.value
    var l
    var total = 0

    if ( sumRegex.test(exp) ){
      l = exp.split('+')
      total = parseInt(l[0],10) + parseInt(l[1],10);
      this.setState((prevState) => ({value: total.toString()}))
    } else if ( divisionRegex.test(exp) ) {
      l = exp.split('/')
      total = parseInt(l[0],10) / parseInt(l[1],10);
      this.setState((prevState) => ({value: total.toString()}))
    } else if ( multRegex.test(exp) ) {
      l = exp.split('*')
      total = parseInt(l[0],10) * parseInt(l[1],10);
      this.setState((prevState) => ({value: total.toString()}))
    } else if ( subRegex.test(exp) ) {
      l = exp.split('-')
      total = parseInt(l[0],10) - parseInt(l[1],10);
      this.setState((prevState) => ({value: total.toString()}))
    }
  };

}

class Cbutton extends React.Component {
  render () {
    return <button id={this.props.id} className="btn btn-default" onClick={this.props.handler} value={this.props.value}>{this.props.value}</button> 
  }
}


export default Board;
