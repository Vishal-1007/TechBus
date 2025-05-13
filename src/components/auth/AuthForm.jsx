
import './auth.css';

const AuthForm = ({ children, title, onSubmit }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{title}</h2>
        <form onSubmit={onSubmit} className="auth-form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;