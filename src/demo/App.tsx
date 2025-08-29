import { Button, Card } from '../components'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>Component Library Demo</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => alert('Primary clicked!')}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
            Secondary Button
          </Button>
          <Button variant="danger" onClick={() => alert('Danger clicked!')}>
            Danger Button
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>Cards</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '1rem' }}>
          <Card title="Basic Card" shadow="sm">
            <p>This is a basic card with small shadow.</p>
            <Button size="small">Action</Button>
          </Card>
          
          <Card title="Medium Shadow Card" shadow="md">
            <p>This card has medium shadow and looks more prominent.</p>
            <Button variant="secondary" size="small">Secondary Action</Button>
          </Card>
          
          <Card title="Large Shadow Card" shadow="lg" padding="lg">
            <p>This card has large shadow and padding, making it stand out the most.</p>
            <Button variant="danger" size="small">Danger Action</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
