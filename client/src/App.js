import React, { Component } from "react";
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto;'
  },
  table: {
    minWidth: 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>BirthDay</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(c=>{
              return (
                <Customer key={c.id} id={c.id} img={c.img} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
              )
            })
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
