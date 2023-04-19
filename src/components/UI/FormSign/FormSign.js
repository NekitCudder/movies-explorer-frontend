import "./FormSign.css";

function FormSign({ children }) {
  return (
    <section className="formSign">
      <form className="formSign__children">{children}</form>
    </section>
  );
}

export default FormSign;