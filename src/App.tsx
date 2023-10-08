import Logo from 'assets/logo.svg?react';
import Button from 'components/Button';
import './App.css';

export default function App() {
  console.log('Environment information:', import.meta.env);

  return (
    <div className="container">
      <Logo height={128} width={128} />

      <h1 className="title">
        Welcome to <span className="highlight">React + TypeScript + Vite</span>{' '}
        template
      </h1>

      <Button>Get started!</Button>
    </div>
  );
}
