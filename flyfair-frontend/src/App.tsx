import { Header } from './components/shared/Header';
import { SearchForm } from './components/SearchForm';

function App() {
    return (
        <div className="flex min-h-screen w-screen flex-col">
            <Header />
            <div className="flex-grow">
                <SearchForm />
            </div>
        </div>
    );
}

export default App;
