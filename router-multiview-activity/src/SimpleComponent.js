export default function SimpleComponent() {
  return (
    <section style={{ textAlign: "center" , margin: "10px", padding:"30px" }}>
      <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
      <p><b>JSX is optional and not required to use React.</b>Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
    </section>
  );
}