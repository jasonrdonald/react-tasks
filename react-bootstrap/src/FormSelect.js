import {useState, useEffect, useContext} from 'react';
import FormImpl from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import {userinputforms,
    systempriority, 
    systemtaskbuckets, 
    systemfrequency, 
    systemfinancecategory, 
    systeminputtaskfinancecategory, 
    systeminputtaskconfig, 
    systemtaskstatus, 
    inputtasks, 
    systemtaskhistory} from './datastore';
import {stateTask, stateTasks} from './stateTask';
let varStateTask = stateTask;
const FormSelect = (props) => {

  /*
  let [task, setTask] = useState({
        status: '',
        title: '',
        taskconfig: '',
        priority: ''
      });
  */  
      const handleChange = (event) => {
        
        let value = event.target.value;
        let heading = event.target.attributes["heading"].value;
        console.log(event.target);
      
        varStateTask = {
          ...varStateTask,   // Spread Operator               
          [heading]: value
        };
        console.log('varStateTask');
        console.log(varStateTask);
        
        stateTask.setTask({
          ...stateTask,   // Spread Operator               
          [heading]: value
        });
        console.log('global.stateTask');
        console.log(stateTask);
        /*
        setTask((prevalue) => {
          console.log({
            ...prevalue,   // Spread Operator               
            [heading]: value
          });
          
          
          return {
            ...prevalue,   // Spread Operator               
            [heading]: value
          }
        })
        */
      }

        //console.log("FormSelect:props.data:");
        //console.log(props.data);
        //console.log("FormSelect:typeof(props.data)");
        //console.log(typeof(props.data));
        if(props.data !== undefined && typeof(props.data) === 'string' && props.data[0] === '<')
            {
                return (<Form key={props.key}>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>{props.heading}</Form.Label>
                    <Form.Control as="select" custom heading={props.heading} systemid={props.data.systemid} onChange={handleChange}>
                    <option hidden>{props.data}</option>
                    <Options heading={props.heading} data={props.data} />  
                    </Form.Control>
                </Form.Group>                
                </Form>);
            }

        return (<>{props.data}</>);

}

const Options = (props) => {
    //console.log("FormSelect.Options:props");
    //console.log(props);
    
    let datastore;
    switch (props.heading) {
        case 'FinanceCategory':
            datastore = systemfinancecategory;
          break;
        case 'taskfinancecategory':
            datastore = systeminputtaskfinancecategory;
          break;
        case 'status':
            datastore = systemtaskstatus;
          break;
        case 'taskbucket':
            datastore = systemtaskbuckets;
          break;
        case 'priority?':
            datastore = systempriority;
          break;
        case 'frequency':
            datastore = systemfrequency;
          break;
        case 'taskconfig':
            datastore = systeminputtaskconfig;
            break;
        default:
            datastore = systemfrequency;
            break;
      }
      //console.log("FormSelect.Options:datastore");
        //console.log(datastore);
    if(datastore[0].name != null)
        return (
            <>
                {
                  datastore.map(item => <option>{item.name}</option>)
               }            
            </>
        );
    else if (datastore[0].Name !=null)
        return (
            <>
                {
                datastore.map(item => <option>{item.Name}</option>)
            }            
            </>
        );
    else if (datastore[0].title !=null)
    return (
        <>
            {
              datastore.map(item => <option>{item.title}</option>)
           }            
        </>
    );
}

export default FormSelect;