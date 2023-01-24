import React from "react";
import EmployeeService from "../services/EmployeeService";



class EmployeeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employees:[]
        }
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((Response)=>{
            this.setState({employees:Response.data})
        });
    }
    render(){
        return(
            <div>
                <h1 className="text-center">LIST OF EMPLOYEES</h1>
                <table className="table table-bordered table-striped table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col"> ID </th>   
                        <th scope="col"> EMPLOYEE_NAME</th>
                        <th scope="col"> EMPLOYEE_EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                            <tr key = {employee.id}>
                                <td> {employee.id}</td>
                                <td> {employee.name}</td>
                                <td> {employee.email}</td>
                            </tr> 
                        )
                    }
                </tbody>
                </table>
            </div>
        )
    }
}


export default EmployeeComponent
