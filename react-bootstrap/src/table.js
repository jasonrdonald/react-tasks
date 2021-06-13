import React from 'react';
import Table from 'react-bootstrap/Table';
import FormSelect from './FormSelect';
import Form from 'react-bootstrap/Form';
import LoadingButton from './LoadingButton';
import {stateSetTask, stateGetTaskById} from './stateTask';

const TableComponent = ({ data }) => {
    let headings = Object.keys(data[1]);
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            {headings.map((heading) => (
              <th>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              {headings.map((heading) => (
                <td>{item[heading]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const Reacttable = ({data, formname}) => {
    //console.log("Reactable:data:");
    //console.log(data);
    let headings = Object.keys(data[1]);
    
    //console.log("Reactable:formname");
    //console.log(formname);
    return (
    <Table striped bordered hover>
        {() => 
          {<thead>          
          <TableHead headings={headings} formname={formname} />
          </thead>
          }
        }
        <tbody>
          <tr><td>
          {data.map((item, i) => (
            (i > 0) &&  //show only 1 new record
            <Table striped bordered hover>
              <TableRow key={i} headings={headings} item={item} formname={formname}></TableRow>
            </Table>
          ))}
          </td>
          </tr>

        </tbody>
    </Table>
    );
  };

  const TableHead = (props) =>
  {
    /*
    console.log("TableHead.props.headings");
    console.log(props.headings);
    console.log("TableHead.props.formname");
    console.log(props.formname);
    */
    if(props.formname !== undefined)
              return (
                <tr>
                  <th>+</th>
                    {props.headings.map((heading, i) => (
                      <th key={i}>{heading}</th>
                      )
                    )}
                </tr>
                );            
    
    return (
      <tr>
          {props.headings.map((heading, i) => (
            <th key={i}>{heading}</th>
            )
          )}
      </tr>
    );
  }

  const TableRow = (props) =>
  {
    if(props.formname !== undefined)
    {
      //if(props.formname === 'inputtasks'){ handleDBLoad(props);}
      //console.log('TableRow');
      //console.log(props);
      return (
            <>
              <tr><th colSpan='2' class='section'>Section {props.formname} {props.item['recordtype'] === 'template' && <div class='thtemplate'>New Record</div>}</th></tr>
                {props.headings.map((heading, j) => (
                  heading !== 'recordtype' && 
                  <tr key={props.key}>
                  <Tablecell key={j} data={props.item[heading]}  systemtaskid={props.item['systemtaskid']} heading={heading} recordtype={props.item['recordtype']} formname={props.formname} />
                  </tr>
                ))}
                {
                  props.item['systemtaskid'] === 0 ?
                  <tr key={props.key}><td colSpan='2'><LoadingButton variant="primary" data={props} action='save'>Save</LoadingButton></td></tr>
                  :
                  <tr key={props.key}><td colSpan='2'><LoadingButton variant="primary" systemtaskid={props.item.systemtaskid} data={props} action='edit'>Edit</LoadingButton></td></tr>
                }
          </>
      );
    }

    return (
      <>
              <tr><th colSpan='2'>Record: #{props.key}</th></tr>
              {props.headings.map((heading, j) => (
                <tr key={props.key}>
                <Tablecell key={j} data={props.item[heading]} heading={heading} formname={props.formname}/>
                </tr>
              ))}
      </>  
    );
  }
  
  const Tablecell = (props) => {
      
    const handleBlur = (event) => {
        
      let value = event.target.value;
      let heading = event.target.attributes["heading"].value;
      let systemtaskid = event.target.attributes["systemtaskid"].value;
      console.log('handleBlur.event.target');
      console.log(event.target);

      stateSetTask(systemtaskid, 
        {...stateGetTaskById(systemtaskid), [heading]: value}
      );
    }

    //if (!props.data) {    return (<><td class='tdhead'>{props.heading}</td> <td class='tdcontent tdempty' >&lt;no data&gt;</td></>);  }  
   
    //console.log("Tablecell:props.data:");
    //console.log(props.data);
    //console.log("Tablecell:typeof(props.data)");
    //console.log(typeof(props.data));
    //console.log("Tablecell:props.heading:");
    //console.log(props.heading);
    if(props.heading !== undefined && props.formname !== undefined && props.heading === 'systemtaskid' && props.systemtaskid > 0)
      return (<><td class='tdhead'>{props.heading}</td> <td class='tdcontent'><div>{props.data}</div></td></>);

    if(props.heading !== undefined && props.formname !== undefined
      && (props.heading.toLowerCase() === 'name' || props.heading.toLowerCase() ==='title') 
      && props.data !== undefined && props.data[0] === '<')
    {
      //console.log("props.heading");
      var controlID = "formBasicEmail" + props.key;
        return (
          <>
          <td class='tdhead'><Form.Label>{props.heading}</Form.Label></td>
            <td class='tdcontent'>
            <div>
            <Form key={props.key}>
              <Form.Group controlId={controlID} >              
              <Form.Control type="text" placeholder={props.data} heading={props.heading} systemtaskid={props.systemtaskid} onBlur={handleBlur} />
              </Form.Group>
            </Form>
            </div>
            </td>
          </>
        );
    }
    else if(props.data !== undefined && props.formname !== undefined && typeof(props.data) === 'string' && props.data[0] === '<')
    {
      return (
          <FormSelect key={props.key} data={props.data} heading={props.heading} systemtaskid={props.systemtaskid} />
      );
    }
    //console.log('Tablecell.props');
    //console.log(props);
    if(props.heading !== undefined && props.formname !== undefined
      && (props.heading.toLowerCase() === 'name' || props.heading.toLowerCase() ==='title') 
      )
    {
      //console.log("props.heading");
      controlID = "formBasicEmail" + props.key;
        return (
          <>
          <td class='tdhead'><Form.Label>{props.heading}</Form.Label></td>
            <td class='tdcontent'>
            <div>
            <Form key={props.key}>
              <Form.Group controlId={controlID} >              
              <Form.Control type="text" defaultValue={props.data} heading={props.heading} systemtaskid={props.systemtaskid} onBlur={handleBlur}/>
              </Form.Group>
            </Form>
            </div>
            </td>
          </>
        );
    }
    else if(typeof(props.data) === 'string' && props.formname !== undefined)
    {
      return (
          <FormSelect key={props.key} data={props.data} heading={props.heading} systemtaskid={props.systemtaskid} />
      );
    }

    
    //console.log("else part");
    return (<><td class='tdhead'>{props.heading}</td> <td class='tdcontent'><div>{props.data}</div></td></>);
  }
  
  const data2 = [
    {
      something: "Marcel",
      somethingElse: "Michau",
      yetAnotherThing: "24",
      andAnother: "Male",
      moarStuff: "bla bla"
    },
    {
      something: "Marcel",
      somethingElse: "Michau",
      yetAnotherThing: "24",
      andAnother: "Male",
      moarStuff: "bla bla"
    },
    {
      something: "Marcel",
      somethingElse: "Michau",
      yetAnotherThing: "24",
      andAnother: "Male",
      moarStuff: "bla bla"
    }
  ];
  
  
  export  {Reacttable};
  