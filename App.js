import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  state = {
    txt: 0,
    output: '',
    _output: '',
    operand: ''
  };



  btnInput = function (input) {
    operator = this.state.operand;

    if (operator == '') {
      val = this.state.output
      if (input == '.' && /[.]/.test(val)) {
        console.log('Already has decimal')
        console.log(val)
      } else if (input == '.' && !/[.]/.test(val)) {
        switch (val) {
          case (''):
            val += '0.';
            break;

          default:
            val += '.';
            break;
        }
        console.log(val)
      } else if (/[0-9]/.test(input)) {
        if (input == 0 && (val !== '' || val !== 0)) {
          val += input;
        } else if (val == 0 || val == '') {
          if (input != 0) {
            val += input;
          } else if (input == 0) {
            val = 0;
          }
        } else {
          val += input
        }
        console.log(val)
      }

      this.setState({ output: val, txt: val })
      console.log(this.state.output)
    }
    else if (operator != '') {
      val = this.state._output
      if (input == '.' && /[.]/.test(val)) {
        console.log('Already has decimal')
        console.log(val)
      } else if (input == '.' && !/[.]/.test(val)) {
        switch (val) {
          case (''):
            val += '0.';
            break;

          default:
            val += '.';
            break;
        }
        console.log(val)
      } else if (/[0-9]/.test(input)) {
        if (input == 0 && (val !== '' || val !== 0)) {
          val += input;
        } else if (val == 0 || val == '') {
          if (input != 0) {
            val += input;
          } else if (input == 0) {
            val = 0;
          }
        } else {
          val += input
        }
      }
      
      
      this.setState({ _output: val, txt: val })
      console.log(this.state.output)
    }

  }

  opInput = function (input) {
    operator = '';
    if (input == 'C') {
      this.setState({ txt: 0, output: '', _output: '' })
      operator = '';
    } else if (input == '+/-') {
      this.setState({ txt: (this.state.txt *= -1), output: `${this.state.txt}` })
    } else if (input == '%') {
      this.setState({ txt: (this.state.txt *= 0.01), output: `${this.state.txt}` })
    } else if (input == '+') {
      operator = '+';
    } else if (input == '-') {
      operator = '-';
    } else if (input == '*') {
      operator = '*';
    } else if (input == '/') {
      operator = '/';
    }

    this.setState({ operand: operator })
  }

  evalInput = function () {
    num1 = parseFloat(this.state.output);
    num2 = parseFloat(this.state._output) || 0;
    result = 0;

    switch (this.state.operand) {
      case ('+'):
        result = num1 + num2;
        break;

      case ('-'):
        result = num1 - num2;
        break;

      case ('*'):
        result = num1 * num2;
        break;

      case ('/'):
        result = num1 / num2;
        break;

      default:
        result = parseFloat(num1) || 0;
        break;
    }

    console.log(`result = ${result}`)
    console.log(typeof (result))
    this.setState({ txt: result, output: result == 0 ? '' : result, _output: '' })
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'black',  }}>
            <Text adjustsFontSizeToFit style={styles.display}>{this.state.txt}</Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'space-around', backgroundColor: 'black' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.buttons_g1} onPress={() => this.opInput('C')}><Text style={styles.buttons_sym}>AC</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g1} onPress={() => this.opInput('+/-')}><Text style={styles.buttons_sym}>±</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g1} onPress={() => this.opInput('%')}><Text style={styles.buttons_sym}>%</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g3} onPress={() => this.opInput('/')}><Text style={styles.buttons_txt}>÷</Text></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('7')}><Text style={styles.buttons_txt}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('8')}><Text style={styles.buttons_txt}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('9')}><Text style={styles.buttons_txt}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g3} onPress={() => this.opInput('*')}><Text style={styles.buttons_txt}>x</Text></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('4')}><Text style={styles.buttons_txt}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('5')}><Text style={styles.buttons_txt}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('6')}><Text style={styles.buttons_txt}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g3} onPress={() => this.opInput('-')}><Text style={styles.buttons_txt}>-</Text></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('1')}><Text style={styles.buttons_txt}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('2')}><Text style={styles.buttons_txt}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('3')}><Text style={styles.buttons_txt}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g3} onPress={() => this.opInput('+')}><Text style={styles.buttons_txt}>+</Text></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.button_0} onPress={() => this.btnInput('0')}><Text style={styles.buttons_txt}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g2} onPress={() => this.btnInput('.')}><Text style={styles.buttons_txt}>.</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons_g3} onPress={() => this.evalInput()}><Text style={styles.buttons_txt}>=</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  display: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    color: 'white',
    fontSize: 95,
    height: 100,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons_g1: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#a8a8a8',
  },

  buttons_g2: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#2a2a2a',
  },

  buttons_g3: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#FFA500',
  },

  button_0: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 25,
    width: 180,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#2a2a2a',
  },

  buttons_txt: {
    padding: 'auto',
    color: 'white',
    fontSize: 35,
  },

  buttons_sym: {
    padding: 'auto',
    color: 'black',
    fontSize: 35,
  }
});