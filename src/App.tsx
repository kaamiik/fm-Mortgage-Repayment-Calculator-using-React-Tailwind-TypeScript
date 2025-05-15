import PageFooter from './components/PageFooter';
import PageMain from './components/PageMain';

function App() {
  return (
    <div className="text-400 flex min-h-svh flex-col bg-slate-100 font-serif font-medium text-slate-700">
      <PageMain />
      <PageFooter />
    </div>
  );
}

export default App;
