import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import FormSelect from './FormSelect';
import Form from 'react-bootstrap/Form';
import {userinputforms} from './datastore';
import LoadingButton from './LoadingButton';

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
    console.log("Reactable:data:");
    console.log(data);
    let headings = Object.keys(data[1]);
    
    //console.log("Reactable:typeof(data):");
    //console.log(typeof(data));
    //console.log("Reactable:headings:BELOW");
    //console.log(headings);
    console.log("Reactable:formname");
    console.log(formname);
    return (
    <Table striped bordered hover>
        <thead>
          <TableHead headings={headings} formname={formname} />
        </thead>
        <tbody>
              
          {data.map((item, i) => (
            <TableRow key={i} headings={headings} item={item} formname={formname}></TableRow>
          ))}
        </tbody>
    </Table>
    );
  };

  const TableHead = (props) =>
  {
    console.log("TableHead.props.headings");
    console.log(props.headings);
    console.log("TableHead.props.formname");
    console.log(props.formname);
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
      return (
        <tr key={props.key}>
                <td><LoadingButton variant="primary" data={props}>Save</LoadingButton></td>
                {props.headings.map((heading, j) => (
                  <td key={j}>                
                  <Tablecell key={j} data={props.item[heading]}  systemtaskid={props.item['systemtaskid']} heading={heading} />
                  </td>
                ))}
          </tr>
      );
    }

    return (
      <tr key={props.key}>
              {props.headings.map((heading, j) => (
                <td key={j}>                
                <Tablecell key={j} data={props.item[heading]} heading={heading} />
                </td>
              ))}
        </tr>
    );
  }
  
  const Tablecell = (props) => {
      
    if (!props.data) {    return null;  }  
   
    //console.log("Tablecell:props.data:");
    //console.log(props.data);
    //console.log("Tablecell:typeof(props.data)");
    //console.log(typeof(props.data));
    //console.log("Tablecell:props.heading:");
    //console.log(props.heading);
    if(props.heading !== undefined 
      && (props.heading.toLowerCase() === 'name' || props.heading.toLowerCase() ==='title') 
      && props.data !== undefined && props.data[0] === '<')
    {
      //console.log("props.heading");
      var controlID = "formBasicEmail" + props.key;
        return (
            <Form key={props.key}>
              <Form.Group controlId={controlID} >
              <Form.Label>{props.heading}</Form.Label>
              <Form.Control type="text" placeholder={props.data}  />
              </Form.Group>
            </Form>
        );
    }
    else if(props.data !== undefined && typeof(props.data) === 'string' && props.data[0] === '<')
    {
      return (
          <FormSelect key={props.key} data={props.data} heading={props.heading} systemtaskid={props.systemtaskid} />
      );
    }

    
    //console.log("else part");
    return (<>{props.data}</>);
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
  