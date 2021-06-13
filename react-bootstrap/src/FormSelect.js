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
import {stateTask, stateTasks, stateGetTaskById, stateSetTask, stateCurrTaskId} from './stateTask';

const FormSelect = (props) => {

      const handleChange = (event) => {
        
        let value = event.target.value;
        let heading = event.target.attributes["heading"].value;
        let systemtaskid = event.target.attributes["systemtaskid"].value;
        
        stateSetTask(systemtaskid, 
          {...stateGetTaskById(systemtaskid), [heading]: value}
        );

        console.log('global.getTaskById:' + systemtaskid);
        console.log(stateGetTaskById(systemtaskid));
        
      }

      const handleEditChange = (event) => {
        
        let value = event.target.value;
        let heading = event.target.attributes["heading"].value;
        let systemtaskid = event.target.attributes["systemtaskid"].value;
        
        stateSetTask(systemtaskid, 
          {...stateGetTaskById(systemtaskid), [heading]: value}
        );

        console.log('global.getTaskById:' + systemtaskid);
        console.log(stateGetTaskById(systemtaskid));
      }

      //console.log("FormSelect:props.data:");
      //console.log(props.data);
      //console.log("FormSelect:typeof(props.data)");
      //console.log(typeof(props.data));
      if(props.data !== undefined && typeof(props.data) === 'string' && props.data[0] === '<')
      {
          return (
          <>
          <td class='tdhead'><Form.Label>{props.heading}</Form.Label></td>
          <td class='tdcontent'>
          <div>
          <Form key={props.key}>
          <Form.Group controlId="exampleForm.SelectCustom">                    
              <Form.Control as="select" custom heading={props.heading} systemtaskid={props.systemtaskid} onChange={handleChange}>
              <option hidden>{props.data}</option>
              <Options heading={props.heading} data={props.data} />  
              </Form.Control>
          </Form.Group>                
          </Form>
          </div>
          </td>
          </>
          );
      }

      if(typeof(props.data) === 'string')
      {
          return (
          <>
          <td class='tdhead'><Form.Label>{props.heading}</Form.Label></td>
          <td class='tdcontent'>
          <div>
          <Form key={props.key}>
          <Form.Group controlId="exampleForm.SelectCustom">                    
              <Form.Control as="select" custom heading={props.heading} systemtaskid={props.systemtaskid} onChange={handleEditChange}>
              <option hidden>{props.data}</option>
              <Options heading={props.heading} data={props.data} />  
              </Form.Control>
          </Form.Group>                
          </Form>
          </div>
          </td>
          </>
          );
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
        case 'priority':
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