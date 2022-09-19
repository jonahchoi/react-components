
// TODO
const GroceryList = () => {
  const [list, setList] = React.useState(['pizza', 'pasta']);

  return(
    <ul>
      {list.map((name) => {
        return <GroceryListItem name={name} />
      })}
    </ul>
  )
}

const GroceryListItem = (props) => {
  const [done, setDone] = React.useState(false);
  const style = {
    fontWeight: done ? 'bold' : 'normal'
  };

  return(
    <li style={style} onMouseOver={()=>setDone(!done)} onMouseLeave={()=>setDone(!done)}>{props.name}</li>
  )
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));
/* const Pizza = () => {
  const [food, setFood] = React.useState('Pizza');

  return(
    <li>{food}</li>
  )
}
const Pasta = () => {
  const [food, setFood] = React.useState('Pasta');

  return(
    <li>{food}</li>
  )
} */
