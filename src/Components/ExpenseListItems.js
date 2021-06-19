import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ExpenseListItems = ({id,description,amount,createdAt,dispatch}) => {
  return (
    <div>
      <Link to ={`/edit/${id}`}>{description}</Link>
      <p>{amount} - {createdAt}</p>
     
    </div>
  );
};

export default connect()(ExpenseListItems);
