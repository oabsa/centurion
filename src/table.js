import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    const { region, recipients } = this.props;

    // Filter the data by region
    let rows = this.props.recipients.filter((recipient) => {
      if (region === recipient.region) {
        return true;
      }

      return false;
    });

    return (
      <table cellPadding="0" cellSpacing="0" style={{
        width:'100%'
      }}>
      	<tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td><strong>Lodge</strong></td>
            <td><strong>Service</strong></td>
          </tr>
          <tr>
            <td colSpan="3">
              <hr />
            </td>
          </tr>
          {rows.map(function(row) {
            return (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.lodge}</td>
                <td>{row.service}</td>
              </tr>
            );
          })}
      	</tbody>
      </table>
    );
  }
}
