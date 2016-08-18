import PureComponent from 'react-pure-render/component';
import React from 'react';
import { Map } from 'immutable';

class SummaryTable extends PureComponent {
  render() {
    const { assignees, pointsByAssignee } = this.props;

    return (
      <div>
        <table style={{ borderCollapse: 'separate', borderSpacing: '6px', margin: '5px' }}>
          <thead>
            <tr>
              <th>Assignee</th>
              <td>new</td>
              <td>indeterminate</td>
              <td>done</td>
            </tr>
          </thead>
          <tbody>
          {
            assignees
              .valueSeq()
              .sortBy(assignee => assignee.get('name'))
              .map(assignee => {
                const assigneeId = assignee.get('id');
                const points = pointsByAssignee.get(assigneeId);

                return (
                  <tr key={assigneeId}>
                    <td>
                      <div className="ghx-avatar">
                        <img
                          src={assignee.get('avatarUrl')}
                          className="ghx-avatar-img"
                          alt={`Assignee: ${assignee.get('name')}`}
                        />
                      </div>
                    </td>
                    <td>{points.get('new')}</td>
                    <td>{points.get('indeterminate')}</td>
                    <td>{points.get('done')}</td>
                  </tr>
                );
              })
              .toJS()
          }
          </tbody>
        </table>
      </div>
    );
  }
}

SummaryTable.defaultProps = {
  assignees: Map(),
  pointsByAssignee: Map(),
};

export default SummaryTable;
