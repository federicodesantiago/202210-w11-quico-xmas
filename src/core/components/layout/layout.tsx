import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { AppRoutes } from '../routes/app.routes';

export function Layout() {
    return (
        <>
            <Header></Header>
            <main>
                <form className="form_Personal">
                    <AppRoutes></AppRoutes>
                </form>
            </main>
            <Footer></Footer>
        </>
    );
}
