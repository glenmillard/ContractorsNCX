import React from 'react';
import './App.css';

import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';

// The docs recommended a class so I followed their guide
// I created the grid with the sort and filter enabled
// I didn't want to get too fancy as I just wanted to get it done!

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: 'ID' , field: 'Id',  sortable: true, checkboxSelection: true, filter: true},
                {headerName: 'Code' , field: 'Code',  sortable: true, filter: true},
                {headerName: 'Name' , field: 'Name',  sortable: true, filter: true},
                {headerName: 'Hours of Operation - Start', field: 'HoursOfOperation_StartTime',  sortable: true, filter: true},
                {headerName: 'Hours of Operation - End', field: 'HoursOfOperation_EndTime',  sortable: true, filter: true},
                {headerName: 'Hours of Operation - TimeZone', field: 'HoursOfOperation_Timezone',  sortable: true, filter: true},
                {headerName: 'Baseline - Per Minute Currency', field: 'BaseLinePerMin_Currency',  sortable: true, filter: true},
                {headerName: 'Baseline - Per Minute Value', field: 'BaseLinePerMin_Value',  sortable: true, filter: true},
                {headerName: 'Minimum Rate - Per Minute Currency' , field: 'MinimumRatePerMinute_Currency',  sortable: true, filter: true},
                {headerName: 'Minimum Rate - Per Minute Value', field: 'MinimumRatePerMinute_Value',  sortable: true, filter: true},
                {headerName: 'Minimum Training Rate - Per Minute Currency', field: 'MinimumTrainingRatePerMinute_Currency',  sortable: true, filter: true},
                {headerName: 'Minimum Training Rate - Per Minute Value', field: 'MinimumTrainingRatePerMinute_Value',  sortable: true, filter: true},
                {headerName: 'Minimum Aux Rate - Per Minute Currency', field: 'MinimumAuxiliaryRatePerMinute_Currency',  sortable: true, filter: true},
                {headerName: 'Minimum Aux Rate - Per Minute Value', field: 'MinimumAuxiliaryRatePerMinute_Value',  sortable: true, filter: true},
                {headerName: 'Minimum Idle Rate - Per Minute Currency', field: 'MinimumIdleRatePerMinute_Currency',  sortable: true, filter: true},
                {headerName: 'Minimum Idle Rate - Per Minute Value', field: 'MinimumIdleRatePerMinute_Value',  sortable: true, filter: true},
                {headerName: 'Work Description', field: 'WorkDescription',  sortable: true, filter: true},
                {headerName: 'Start Date', field: 'StartDate',  sortable: true, filter: true},
                {headerName: 'End Date', field: 'EndDate',  sortable: true, filter: true},
                {headerName: 'Project ID', field: 'ProjectId',  sortable: true, filter: true},
                {headerName: 'Type', field: 'Type',  sortable: true, filter: true}
        ],
        rowData: [
                {Id: '001', Code: 'Your Code', HoursOfOperation_StartTime: '13:00', HoursOfOperation_EndTime: '17:00', HoursOfOperation_Timezone: 'MST', BaseLinePerMin_Currency: 'EUR', BaseLinePerMin_Value: '0.2', MinimumRatePerMinute_Currency: '0.2', MinimumRatePerMinute_Value: '0.2', MinimumTrainingRatePerMinute_Currency: '0.1', MinimumTrainingRatePerMinute_Value: '0.1', MinimumAuxiliaryRatePerMinute_Currency: '0.1', MinimumAuxiliaryRatePerMinute_Value: '0.1', MinimumIdleRatePerMinute_Value: '0.1', WorkDescription: 'Werks', StartDate: 'Today', EndDate: 'Never', ProjectId: 'IDunno', Type: 'Not My Type'},
                {Id: '002', Code: 'My Code', HoursOfOperation_StartTime: '13:00', HoursOfOperation_EndTime: '17:00', HoursOfOperation_Timezone: 'MST', BaseLinePerMin_Currency: 'EUR', BaseLinePerMin_Value: '0.2', MinimumRatePerMinute_Currency: '0.2', MinimumRatePerMinute_Value: '0.2', MinimumTrainingRatePerMinute_Currency: '0.1', MinimumTrainingRatePerMinute_Value: '0.1', MinimumAuxiliaryRatePerMinute_Currency: '0.1', MinimumAuxiliaryRatePerMinute_Value: '0.1', MinimumIdleRatePerMinute_Value: '0.1', WorkDescription: 'Werks', StartDate: 'Today', EndDate: 'Never', ProjectId: 'IDunno', Type: 'Not My Type'}
        ] 
        };
    }
     render() {
        return (
            <div className="ag-theme-balham"
            style={{
                width: 1725,
                height: 300
            }}
            >
                <AgGridReact rowSelection="multiple" columnDefs={this.state.columnDefs}
                rowData={this.state.rowData} />

            </div>
        )
    }
}

export default App;
