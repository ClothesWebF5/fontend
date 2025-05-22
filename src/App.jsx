import AllRoute from './components/allRouter/index.allRoute';
function App() {

  const cart = localStorage.getItem("cart");
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
