
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {Card, Table,CardGroup} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
function Home(){
 
  const [salary,setSalary]=useState(null)
  const [print,setPrint]=useState(false)
  
  function getSalary(val)
    {
      console.warn(val.target.value)
      setSalary(val.target.value)
      setPrint(false)
    }

    const [transaction, setTransaction] = useState({
      description: '',
      amount: ''
    })
    const [list, setList] = useState(
      JSON.parse(localStorage.getItem('list')) || []
    )
    const [balance, setBalance] = useState('')
    const [credit, setCredit] = useState(
      JSON.parse(localStorage.getItem('credit'))
    )
    const [debit, setDebit] = useState(JSON.parse(localStorage.getItem('debit')))
  
    const updateForm = e => {
      setTransaction({
         ...transaction,
         [e.target.name]:
          e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      })
    }

  
    const getBalance = () => {
      const money = salary-credit;
      setBalance(money)
    }

  
    useEffect(() => {
      getBalance()
      localStorage.setItem('list', JSON.stringify(list))
      localStorage.setItem('credit', JSON.stringify(credit))
      localStorage.setItem('debit', JSON.stringify(debit))
      localStorage.setItem('salary',JSON.stringify(salary))
     
    }, [list])
  
    const plusMinus = () => {
      transaction.amount > 0
        ? setCredit(credit + transaction.amount)
        : setDebit(debit + transaction.amount)
    }
  
    const clearBudget = () => {
      setList([])
      setCredit(null)
      setDebit(null)
    }
  



          let user = JSON.parse(localStorage.getItem('user-info'))


  return(
      
      <div>
         <Card>
  <Card.Header>Persons Info</Card.Header>
  <Card.Body>
    <Card.Title>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
       
       <tr>
        <th>#</th>
     
        <th>{user && user.name}</th>
        <th>{user && user.email}</th>
       </tr>

  </tbody>
</Table>
    </Card.Title>
    <Card.Text>
    <CardGroup>
  <Card>
    
    <Card.Body>
      {
    print?
      <Card.Title>{salary}</Card.Title>
      :null
}
      <Card.Text>
        
        <input type="number" placeholder="salary" onChange={getSalary}></input>
        <button onClick={()=>setPrint(true)}>Print Data</button>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Expensses</Card.Title>
      <Card.Text>
      <h4>${credit}</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
  <Card>
  
    <Card.Body>
      <Card.Title>Balance</Card.Title>
      <Card.Text>
      <h3>${balance}</h3>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
  
</CardGroup>
    </Card.Text>
    
  </Card.Body>
</Card>
      <div>Home</div>
      <div className="card">
          <div className="form">
          <h2 className="card-header">Enter an Item</h2>
          <form
            onSubmit={e => {
              e.preventDefault()
              setList([transaction, ...list])
              plusMinus()
              setTransaction({ description: '', amount: '' })
            }}
          >
            <div>
              <input
                type="text"
                className="input"
                placeholder="Enter Transaction"
                value={transaction.description}
                name="description"
                onChange={updateForm}
              />
            </div>
            <input
              type="number"
              className="input"
              placeholder="Enter Amonut"
              name="amount"
              value={transaction.amount}
              onChange={updateForm}
            />
            <div>
              <button type="submit" className="button is-primary">
                Submit
              </button>
            </div>
            
          </form>
        </div>
          <div>
            <button className="button danger" onClick={clearBudget}>
              Clear Budget
            </button>
            </div>
            <div className="card">
            <h2 className="card-header">History</h2>
            {list.map(i => {
              return (
                <table className="table">
                  <tbody key={i.description}>
                    <tr>{i.description}</tr>
                    <td>${parseInt(i.amount)}</td>
                  </tbody>
                </table>
              )
            })}
          </div>
        </div>
     
</div>
    );
}

export default Home;