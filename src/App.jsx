
import  { useState } from 'react';
import {
  Button,
  Input,
  Checkbox,
  Card,
  Modal,
  FormField,
} from './components/ui/index.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('');

  return (
    <main
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '32px 20px',
      }}
    >
      <header style={{ marginBottom: '32px' }}>
        <p
          style={{
            color: '#2563eb',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Week 2 Internship Project
        </p>

        <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}>
          Reusable UI Component Library
        </h1>

        <p style={{ color: '#64748b', lineHeight: 1.7 }}>
          A collection of reusable, responsive, and accessible
          React components.
        </p>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '24px',
        }}
      >
        <Card
          title="Buttons"
          description="Different variants and sizes for common actions."
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Button onClick={() => setButtonMessage('Primary button clicked!')}>
              Primary
            </Button>

            <Button variant="secondary">Secondary</Button>

            <Button variant="danger">Delete</Button>

            <Button size="small">Small</Button>

            <Button size="large">Large</Button>

            <Button disabled>Disabled</Button>
          </div>
          {buttonMessage && (
  <p role="status" style={{ marginTop: '12px', color: '#2563eb' }}>
    {buttonMessage}
  </p>
)}
        </Card>

        <Card
          title="Input Fields"
          description="Text inputs with hints and validation messages."
        >
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            hint="Enter your first and last name."
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            required
          />

          <Input
            label="Username"
            placeholder="Choose a username"
            error="This is an example validation message."
          />
        </Card>

        <Card
          title="Checkboxes"
          description="Accessible checkbox controls with labels."
        >
          <Checkbox
            label="Receive project updates"
            defaultChecked
            hint="You can change this preference anytime."
          />

          <Checkbox
            label="Accept the project guidelines"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
          />

          <p style={{ color: '#64748b', fontSize: '14px' }}>
            Guidelines accepted: {accepted ? 'Yes' : 'No'}
          </p>
        </Card>

        <Card
          title="Form Fields"
          description="Combine labels, controls, hints, and errors."
        >
          <FormField
            label="Project Name"
            hint="Use a short, descriptive project name."
            required
          >
            <input
              className="ui-input"
              type="text"
              placeholder="My React Project"
              required
            />
          </FormField>

          <FormField
            label="Project Description"
            error="Please provide a description."
          >
            <textarea
              className="ui-input"
              rows={3}
              placeholder="Describe your project..."
            />
          </FormField>
        </Card>

        <Card
          title="Modal Dialog"
          description="Display additional information in a dialog."
          footer={
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
          }
        >
          <p>
            Click the button to open an accessible dialog window.
          </p>
        </Card>

        <Card
          title="Component Library"
          description="Designed for reuse across different React projects."
        >
          <p>Components implemented: 6</p>
          <p>Styling: Shared CSS</p>
          <p>Layout: Responsive grid</p>
          <p>Accessibility: Labels, focus states, and dialog semantics</p>
        </Card>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to the UI Library"
      >
        <p>
          This modal is a reusable React component built with the
          native HTML dialog element.
        </p>

        <Button onClick={() => setIsModalOpen(false)}>
          Close Modal
        </Button>
      </Modal>

      <footer
        style={{
          marginTop: '40px',
          padding: '20px 0',
          borderTop: '1px solid #e2e8f0',
          color: '#64748b',
          textAlign: 'center',
        }}
      >
        Week 2 — Reusable UI Component Library
      </footer>
    </main>
  );
}

export default App;
