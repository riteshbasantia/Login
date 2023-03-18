import { Container, Row, Col, Table } from 'react-bootstrap';

function Dashboard() {
  const clients = [
    { id: 1, name: 'Client 1', email: 'client1@example.com' },
    { id: 2, name: 'Client 2', email: 'client2@example.com' },
    { id: 3, name: 'Client 3', email: 'client3@example.com' },
  ];

  const appRoute={dashboard:"/dashboard"}
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Company Name</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </>
    
  );
}

export default Dashboard;
