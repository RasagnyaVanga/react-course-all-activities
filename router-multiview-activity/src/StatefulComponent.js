export default function StatefulComponent() {
  return (
    <div style={{ textAlign: "center" , margin: "10px", padding:"30px" }}>
      <p>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</p>
    </div>);
}