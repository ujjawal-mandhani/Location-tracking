import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

export default class ExampleOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: [
        ['1', '2'],
        ['a', 'b'],
      ],
    }
  }

  render() {
    const state = this.state
    return (
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row
          data={state.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={state.tableData} textStyle={styles.text} />
      </Table>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 20, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
})
