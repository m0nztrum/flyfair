import { Header } from './components/shared/Header';
import { SearchForm } from './components/SearchForm';
import { Footer } from './components/shared/Footer';

function App() {
    return (
        <div className="flex min-h-screen w-screen flex-col bg-sky-950">
            <Header />
            <div className="flex-grow">
                <SearchForm />
            </div>
            <Footer />
        </div>
    );
}

export default App;
