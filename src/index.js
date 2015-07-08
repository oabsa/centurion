var React = require('react');
var fs = require('fs');
var data = require('../data.json');

var Table = React.createClass({
  render: function () {
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
          {data.map(function(scout) {
            return (
              <tr key={scout.id}>
                <td>{scout.name}</td>
                <td>{scout.lodge}</td>
                <td>{scout.service}</td>
              </tr>
            );
          })}
      	</tbody>
      </table>
    );
  }
});

var htmlCode = React.renderToStaticMarkup(<Table />);

fs.writeFile('index.html', htmlCode, function(error) {
    if (error) {
      return console.log(error);
    }
    console.log("The file was saved!");
});
