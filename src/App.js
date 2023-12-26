import './App.css';
import Layout from './components/Layout/Layout';
import TableMenu from './components/Table';
import Help from './components/help';
import HowTOSell from './components/how_to_sell';
import Main from './components/main';
import WhyShouldSell from './components/third_section';

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
        <TableMenu />
        <HowTOSell />
        <Help />
        <WhyShouldSell />
      </Layout>
    </div>
  );
}

export default App;
