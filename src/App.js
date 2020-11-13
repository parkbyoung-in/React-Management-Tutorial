import React, { Component } from "react";
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'img': 'https://placeimg.com/100/100/any',
    'name': '이민아',
    'birthday': '921212',
    'gender': '여성',
    'job': '대학생'
  },
  {
    'id': 2,
    'img': 'https://placeimg.com/100/100/any',
    'name': '박병인',
    'birthday': '961212',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'img': 'https://placeimg.com/100/100/any',
    'name': '김성진',
    'birthday': '891212',
    'gender': '남자',
    'job': '건설사'
  }
]

class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c=>{
          return (
            <Customer 
              id={c.id} 
              img={c.img} 
              name={c.name} 
              birthday={c.birthday} 
              gender={c.genter} 
              job={c.job} 
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;
