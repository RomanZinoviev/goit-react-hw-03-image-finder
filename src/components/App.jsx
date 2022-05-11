import { Searchbar } from "./Searchbar/Searchbar";
export const App = () => {
  const handler = (value) => {
    console.log(value)
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handler}/>
    </div>
  );
};
